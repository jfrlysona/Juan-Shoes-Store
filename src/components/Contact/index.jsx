import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Tell Us Your Project</h2>
          <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
          <div className="contact-inputs">
           <Field type="text" name="name" placeholder="Name *" />
           <ErrorMessage name="name" component="div" />
           <Field type="tel" name="phone" placeholder="Phone *" />
           <ErrorMessage name="phone" component="div" />
           <Field type="email" name="email"  placeholder="Email *" />
           <ErrorMessage name="email" component="div" />
           <Field type="subject" name="subject" placeholder="Subject *"/>
           <ErrorMessage name="subject" component="div" />
          </div>
          <textarea placeholder="Message *"></textarea>
           <button type="submit" disabled={isSubmitting}>
           SEND MESSAGE
           </button>
         </Form>
       )}
     </Formik>
          {/* <form>
            <div className="contact-inputs">
              <input type="text" placeholder="Name *" />
              <input type="text" placeholder="Phone *" />
              <input type="text" placeholder="Email *" />
              <input type="text" placeholder="Subject *" />
            </div>
            <textarea placeholder="Message *"></textarea>
            <button>SEND MESSAGE</button>
          </form> */}
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
