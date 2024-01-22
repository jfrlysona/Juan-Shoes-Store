import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Formik } from "formik";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { CartContext } from "../../context/CartProvider";
AOS.init();

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Checkout() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openCoupon, setOpenCoupon] = useState(false);
  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);
  const shippingPrice = total * 0.1;
  const totalPrice = total + shippingPrice;
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
              data-aos-duration="300"
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
            Have A Coupon?
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
              data-aos-duration="300"
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
            <div className="checkout-input-name">
              <label htmlFor="firstName">First Name</label>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="firstName" placeholder="First Name" />
              <input type="text" id="lastName" placeholder="Last Name" />
            </div>
            <div className="checkout-input-email">
              <label htmlFor="email">Email Address</label>
              <input type="text" id="email" placeholder="Email Address" />
            </div>
            <div className="checkout-input-company">
              <label htmlFor="company">Company Name</label>
              <input type="text" id="company" placeholder="Company Name" />
            </div>
            <div className="checkout-input-country">
              <label htmlFor="country">Country</label>
              <select name="country" id="country">
                <option value="azerbaijan">Azerbaijan</option>
                <option value="china">China</option>
                <option value="russia">Russia</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div className="checkout-input-street">
              <label htmlFor="street">Street Address</label>
              <input
                type="text"
                id="street"
                placeholder="Street address Line 1"
              />
              <input
                type="text"
                id="street"
                placeholder="Street address Line 2 (Optional)"
              />
            </div>
            <div className="checkout-input-town">
              <label htmlFor="town">Town / City</label>
              <input type="text" id="town" placeholder="Town / City" />
            </div>
            <div className="checkout-input-state">
              <label htmlFor="state">State / Divition</label>
              <input type="text" id="state" placeholder="State / Divition" />
            </div>
            <div className="checkout-input-zip">
              <label htmlFor="zip">Postcode / ZIP</label>
              <input type="text" id="zip" placeholder="Postcode / ZIP" />
            </div>
            <div className="checkout-input-phone">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="Phone" />
            </div>
            <div className="checkout-input-note">
              <label htmlFor="note">Order Note</label>
              <textarea
                id="note"
                cols="30"
                rows="10"
                placeholder="Notes about your order, e.g special notes for delivery."
              ></textarea>
            </div>
          </div>
        </div>
        <div className="checkout-summary">
          <h2>Your Order Summary</h2>
          <div className="summary">
            <div className="table-summary">
              <table>
                <thead>
                  <tr>
                    <th>Products</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((x) => (
                    <tr key={x.id}>
                      <td>{x.name}</td>
                      <td>${x.price}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>Sub Total</td>
                    <td className="total-price">${total.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td className="total-price">${shippingPrice.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Total Amount</td>
                    <td className="total-price">${totalPrice.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="radio">
              <FormGroup>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="pay"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="cash"
                    control={<Radio size="small" />}
                    label="Cash On Delivery"
                  />
                  <FormControlLabel
                    value="transfer"
                    control={<Radio size="small" />}
                    label="Direct Bank Transfer"
                  />
                  <FormControlLabel
                    value="check"
                    control={<Radio size="small" />}
                    label="Pay with Check"
                  />
                  <FormControlLabel
                    value="paypal"
                    control={<Radio size="small" />}
                    label="Paypal"
                  />
                </RadioGroup>
                <FormControlLabel
                  required
                  control={<Checkbox size="small" />}
                  label={
                    "I have read and agree to the website  terms and conditions."
                  }
                />
              </FormGroup>
              <button>PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
