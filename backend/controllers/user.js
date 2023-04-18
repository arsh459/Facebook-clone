const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validation")
const { sendVerificationEmail } = require("../helpers/mailer")
const jwt = require("jsonwebtoken")
const { generateToken } = require("../helpers/tokens")
const User = require("../models/User")
const bcrypt = require("bcrypt")
exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      password,
      gender,
      bDay,
      bMonth,
      bYear,
      email,
    } = req.body

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "invalid email address",
      })
    }

    const check = await User.findOne({ email })
    if (check) {
      return res.status(400).json({
        message: "email already exists,try another",
      })
    }

    if (!validateLength(first_name, 3, 30)) {
      return res.status(400).json({
        message: "first name length must be between 3 and 30 characters",
      })
    }
    if (!validateLength(last_name, 3, 30)) {
      return res.status(400).json({
        message: "last name length must be between 3 and 30 characters",
      })
    }
    if (!validateLength(password, 6, 40)) {
      return res.status(400).json({
        message: "username length must be between 3 and 30 characters",
      })
    }

    const cryptedPassword = await bcrypt.hash(password, 12)
    let tempUsername = first_name + last_name
    let newUsername = await validateUsername(tempUsername)
    const user = await new User({
      first_name,
      last_name,
      username: newUsername,
      password: cryptedPassword,
      gender,
      bDay,
      bMonth,
      bYear,
      email,
    }).save()
    const emailVerificationToken = await generateToken(
      { id: user._id.toString() },
      "30m"
    )
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`
    sendVerificationEmail(user.email, first_name, url)
    const token = await generateToken({ id: user._id.toString() }, "7d")
    res.send({
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      token: token,
      picture: user.picture,
      id: user._id,
      verified: user.verified,
      message: "Register Success, Please activate your email",
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.activateAccount = async (req, res) => {
  try {
    const { token } = req.body
    const user = jwt.verify(token, process.env.TOKEN_SECRET)
    let check = await User.findById(user.id)
    if (check.verified) {
      res.json({
        message: "Account is already activated",
      })
    } else {
      await User.findByIdAndUpdate(user.id, { verified: true })
      res.status(200).json({
        message: "Account has been activated",
      })
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    })
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    console.log(user)
    if (!user) {
      return res.json({
        message: "email entered is not linked to any account",
      })
    }
    const check = await bcrypt.compare(password, user.password)
    if (!check) {
      return res.json({
        message: "Invalid credentials, please try again",
      })
    }
    const token = await generateToken({ id: user._id.toString() }, "7d")
    res.send({
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      token: token,
      picture: user.picture,
      id: user._id,
      verified: user.verified,
      message: "Register Success, Please activate your email",
    })
  } catch (err) {
    res.status(500).json({
      message: err.message,
    })
  }
}
