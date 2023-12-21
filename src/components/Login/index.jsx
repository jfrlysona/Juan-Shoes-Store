import { Checkbox } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function Login() {
  return (
    <section id="login">
      <div className="login-container">
        <h2>Sign In</h2>
        <div className="login-content">
          <div className="login-inputs">
            <input type="text" placeholder="Email Or Username" />
            <input type="text" placeholder="Enter Your Password" />
          </div>
          <div className="login-text">
            <div className="checkbox">
              <Checkbox {...label} defaultChecked size="small" />{" "}
              <span>Remember me</span>
            </div>
            <Link>Forget Password?</Link>
          </div>
          <button>LOGIN</button>
        </div>
      </div>
      <p className="haveAcc">
        Don't have account? <Link to={"/register"}>Sign Up</Link>
      </p>
    </section>
  );
}

export default Login;
