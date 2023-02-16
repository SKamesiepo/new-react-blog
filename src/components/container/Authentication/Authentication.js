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
    <div> {
      getEmail && getPassword ?
        <App /> :
        <div className="loginContainer">
          <form onSubmit={handleSubmit}>
            <input type="text" ref={email} />
            <input type="password" ref={password} />
            <button>Login</button>
          </form>

        </div>
    }
    </div>
  )
};

export default Authentication;