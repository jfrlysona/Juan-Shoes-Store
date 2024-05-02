import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();
  const sendEmail = (values) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: "Juan team",
      message: values.message,
      subject: values.subject,
      phone: values.phone,
    };

    emailjs
      .send("service_k1d1vbj", "template_r8ulnco", templateParams, {
        publicKey: "pWNZ_zemwjWdjhKrB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Tell Us Your Project</h2>
          <Formik
            initialValues={{
              email: "",
              name: "",
              phone: "",
              subject: "",
              message: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.subject) {
                errors.subject = "Required";
              }
              if (!values.message) {
                errors.message = "Required";
              }
              if (!values.phone) {
                errors.phone = "Required";
              } else if (!/^[\d()+-]*$/.test(values.phone)) {
                errors.phone = "Use only digits and allowed characters";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(false);
              sendEmail(values);
              resetForm(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form ref={form}>
                <div className="contact-inputs">
                  <div>
                    <Field type="text" name="name" placeholder="Name *" />
                    <ErrorMessage name="name" component="span" />
                  </div>
                  <div>
                    <Field type="tel" name="phone" placeholder="Phone *" />
                    <ErrorMessage name="phone" component="span" />
                  </div>
                  <div>
                    <Field type="email" name="email" placeholder="Email *" />
                    <ErrorMessage name="email" component="span" />
                  </div>
                  <div>
                    <Field
                      type="subject"
                      name="subject"
                      placeholder="Subject *"
                    />
                    <ErrorMessage name="subject" component="span" />
                  </div>
                </div>
                <div className="textarea">
                  <Field as="textarea" name="message" placeholder="Message *" />
                  <ErrorMessage name="message" component="span" />
                </div>
                <button type="submit" disabled={isSubmitting}>
                  SEND MESSAGE
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="contact-text">
          <h2>Contact Us</h2>
          <div className="contact-text-content">
            <p>
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram anteposuerit litterarum formas human.
            </p>
            <div className="contact-text-icons">
              <div className="contact-text-icon">
                <i className="fa-sharp fa-solid fa-fax"></i>
                <p> Address : No 40 Baria Sreet 133/2 NewYork City</p>
              </div>
              <div className="contact-text-icon">
                <i className="fa-sharp fa-solid fa-phone"></i>
                <p> info@yourdomain.com</p>
              </div>
              <div className="contact-text-icon">
                <i className="fa-sharp fa-light fa-envelope"></i>
                <p>+88013245657</p>
              </div>
            </div>
            <div className="contact-hours">
              <h3>Working Hours</h3>
              <p>
                <span>Monday – Saturday:</span>08AM – 22PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
