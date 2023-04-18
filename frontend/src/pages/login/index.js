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
            <span>
              Facebook helps you to connect and share with the people in your
              life
            </span>
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
          </div>
          <Link to="/" className="sign_extra">
            <b>Create a page </b>
            for a celibrity, brand or business
          </Link>
        </div>
        <div className="register"></div>
      </div>
    </div>
  )
}
