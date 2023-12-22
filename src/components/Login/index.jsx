import { Checkbox } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function Login() {
  return (
    <section id="login">
      <div className="login-container">
        <h2>Sign In</h2>
        <div className="login-content">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if(!values.password){
                errors.password = "Required";
              }else if(values.password.length<8){
                errors.password = "Use at least 8 characters";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="login-inputs">
                  <input
                    placeholder="Enter Your Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    placeholder="Enter Your Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                </div>
                <div className="login-text">
                  <div className="checkbox">
                    <Checkbox {...label} defaultChecked size="small" />{" "}
                    <span>Remember me</span>
                  </div>
                  <Link>Forget Password?</Link>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  LOGIN
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <p className="haveAcc">
        Don't have account? <Link to={"/register"}>Sign Up</Link>
      </p>
    </section>
  );
}

export default Login;
