import React from "react";
import App from "../../../App"
import { useRef } from "react";
import './authentication.scss'

function Authentication() {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem('emailData')
  const getPassword = localStorage.getItem('passwordData')
  const handleSubmit = () => {
    if (email.current.value == "skamesiepo@gmail.com" && password.current.value == "1234") {
      localStorage.setItem("emailData", "skamesiepo@gmail.com")
      localStorage.setItem("passwordData", "1234")
    }

  }

  return (
    <div> 

      {
      getEmail && getPassword ?
        <App /> :

        <div className="loginContainer">
          <h1>Welcome To Shaun's Blog!</h1>
          <h5>Please Enter Your Login Details Below To Proceed:</h5>
          <form className="loginForm" onSubmit={handleSubmit}>
            <div className="loginInputs">
              <input type="text" ref={email} placeholder="Enter your email..."/>
              <input type="password" ref={password} placeholder="Enter your password..."/>
            </div>
          <button>Login</button>
          </form>
        </div>
    }
    </div>
  )
};

export default Authentication;