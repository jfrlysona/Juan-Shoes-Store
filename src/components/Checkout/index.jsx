import { Checkbox } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Checkout() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openCoupon, setOpenCoupon] = useState(false);
  return (
    <section id="checkout">
      <div className="checkout-accordion">
        <div className="accordion-login">
          <div className="accordion-heading">
            Returning Customer?{" "}
            <span onClick={() => setOpenLogin((open) => !open)}>
              Click Here To Login
            </span>
          </div>
          {openLogin && (
            <div
              className="accordion-body"
              data-aos="fade-down"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="5000"
            >
              <div className="login-content">
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    if (!values.password) {
                      errors.password = "Required";
                    } else if (values.password.length < 8) {
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
          )}
        </div>
        <div className="accordion-coupon">
          <div className="accordion-heading">
            Have A Coupon?{" "}
            <span onClick={() => setOpenCoupon((open) => !open)}>
              Click Here To Enter Your Code
            </span>
          </div>
          {openCoupon && (
            <div
              className="accordion-body"
              data-aos="fade-down"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="5000"
            >
              <div className="coupon">
                <input type="text" placeholder="Enter Your Coupon Code" />
                <button>APPLY COUPON</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="checkout-container">
        <div className="checkout-billing">
          <h2>Billing Details</h2>
          <div className="checkout-inputs">
            <div className="checkout-input-name"></div>
            <div className="checkout-input-email"></div>
            <div className="checkout-input-company"></div>
            <div className="checkout-input-country"></div>
            <div className="checkout-input-street"></div>
            <div className="checkout-input-town"></div>
            <div className="checkout-input-state"></div>
            <div className="checkout-input-zip"></div>
            <div className="checkout-input-phone"></div>
          </div>
        </div>
        <div className="checkout-summary">
          <h2>Your Order Summary</h2>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
