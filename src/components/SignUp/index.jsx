import { Checkbox } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SignUp() {
  return (
    <section id="signUp">
      <div className="signUp-container">
        <h2>Sign Up</h2>
        <div className="signUp-content">
          <div className="signUp-inputs">
            <input type="text" placeholder="Enter Username" />
            <input type="text" placeholder="Enter Your Email" />
            <div className="password">
              <input type="text" placeholder="Enter Your Password" />
              <input type="text" placeholder="Repeat Your Password" />
            </div>
          </div>
          <div className="checkbox">
            <Checkbox {...label} defaultChecked size="small" />{" "}
            <span> Subscribe Our Newsletter</span>
          </div>
          <button>REGISTER</button>
        </div>
      </div>
      <p className="haveAcc">
        Already have an account? <Link to={"/login"}>Login</Link>
      </p>
    </section>
  );
}

export default SignUp;
