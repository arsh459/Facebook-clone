import React, { useState } from "react"
import * as Yup from "yup"
import { Formik, Form } from "formik"
import { Link } from "react-router-dom"
import "./style.css"
import LoginInput from "../../components/inputs/logininput"
const loginInfos = {
  email: "",
  password: "",
}
export default function Login() {
  const [login, setLogin] = useState(loginInfos)
  const { email, password } = login

  function handleLoginChange(e) {
    const { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }
  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address")
      .max(30),
    password: Yup.string().required("Password is required"),
  })

  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_1">
            <img src="../../icons/facebook.svg" />
            <div>
              Facebook helps you to connect and share with the people in your
              life
            </div>
          </div>
          <div className="login_2">
            <div className="login_2_wrap">
              <Formik
                enableReinitialize
                initialValues={{
                  email,
                  password,
                }}
                validationSchema={loginValidation}
              >
                {(formik) => {
                  return (
                    <Form>
                      <LoginInput
                        placeholder="Email adress or Phone number"
                        type="text"
                        name="email"
                        onChange={handleLoginChange}
                      />
                      <LoginInput
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={handleLoginChange}
                        bottom
                      />
                      <button type="submit" className="blue_btn">
                        Log In
                      </button>
                    </Form>
                  )
                }}
              </Formik>

              <Link to="/forgot" className="forgot_passwod">
                Forgotten password?
              </Link>
              <div className="sign_splitter"></div>
              <button className="blue_btn open_signup">Create Account</button>
            </div>
            <div className="lower_footer">
              <Link to="/" className="sign_extra">
                <b>Create a page </b>
                for a celibrity, brand or business
              </Link>
            </div>
          </div>
        </div>
        <div className="register"></div>
        <footer className="login_footer">
          <div className="login_footer_wrap">
            <Link to="/">English (UK)</Link>
            <Link to="/">ਪੰਜਾਬੀ</Link>
            <Link to="/">हिन्दी</Link>
            <Link to="/">اردو</Link>
            <Link to="/">मराठी</Link>
            <Link to="/">ગુજરાતી</Link>
            <Link to="/">বাংলা</Link>
            <Link to="/">தமிழ்</Link>
            <Link to="/">తెలుగు</Link>
            <Link to="/">ಕನ್ನಡ</Link>
            <Link to="/">മലയാളം</Link>
            <Link to="/" className="footer_square">
              <i className="plus_icon"></i>
            </Link>
          </div>
          <div className="footer_splitter"></div>
          <div className="login_footer_wrap">
            <Link to="/">SignUp</Link>
            <Link to="/">Login</Link>
            <Link to="/">Messenger</Link>
            <Link to="/">Facebook Lite</Link>
            <Link to="/">Watch</Link>
            <Link to="/">Places</Link>
            <Link to="/">Games</Link>
            <Link to="/">Marketplace</Link>
            <Link to="/">Meta Pay</Link>
            <Link to="/">Meta Store</Link>
            <Link to="/">Meta Quest</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Bulletin</Link>
            <Link to="/">Fundraisers</Link>
            <Link to="/">Services</Link>
            <Link to="/">Voting Information Centre</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Privacy Centre</Link>
            <Link to="/">Groups</Link>
            <Link to="/">About</Link>
            <Link to="/">Create ad</Link>
            <Link to="/">Create Page</Link>
            <Link to="/">Developers</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">
              AdChoices <i className="adChoices_icon"></i>
            </Link>
            <Link to="/">Terms</Link>
            <Link to="/">Contact uploading and non-users</Link>
            <Link to="/">Settings</Link>
            <Link to="/">Activity log</Link>
          </div>
          <div style={{ fontSize: "12px" }} className="login_footer_wrap">
            Meta © 2023
          </div>
        </footer>
      </div>
    </div>
  )
}
