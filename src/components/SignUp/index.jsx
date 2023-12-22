import { Checkbox } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SignUp() {
  return (
    <section id="signUp">
      <div className="signUp-container">
        <h2>Sign Up</h2>
        <div className="signUp-content">
          <Formik
            initialValues={{ email: "", password: "", name: "",passwordCheck:"" }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Required";
              } else if (values.password.length < 8) {
                errors.password = "Use at least 8 characters";
              }
              if (!values.passwordCheck) {
                errors.passwordCheck = "Required";
              } else if (values.passwordCheck.length < 8) {
                errors.passwordCheck = "Use at least 8 characters";
              } else if(values.password !==values.passwordCheck){
                errors.passwordCheck ="Passwords do not match";
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
                <div className="signUp-inputs">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Enter Your Name"
                  />
                  {errors.name && touched.name && errors.name}
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter Your Email"
                  />
                  {errors.email && touched.email && errors.email}
                  <div className="password">
                    <div className="pas1">
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Enter Your Password"
                      />
                      {errors.password && touched.password && errors.password}
                    </div>
                    <div className="pas2">
                      <input
                        type="password"
                        name="passwordCheck"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordCheck}
                        placeholder="Repeat Your Password"
                      />
                      {errors.passwordCheck && touched.passwordCheck && errors.passwordCheck}
                    </div>
                  </div>
                </div>
                <div className="checkbox">
                  <Checkbox {...label} defaultChecked size="small" />{" "}
                  <span> Subscribe Our Newsletter</span>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  REGISTER
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <p className="haveAcc">
        Already have an account? <Link to={"/login"}>Login</Link>
      </p>
    </section>
  );
}

export default SignUp;
