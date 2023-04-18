const jwt = require("jsonwebtoken")
exports.generateToken = (payload, expired) => {
  let token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: expired,
  })
  return token
}
