import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Tell Us Your Project</h2>
          <form>
            <div className="contact-inputs">
              <input type="text" placeholder="Name *" />
              <input type="text" placeholder="Phone *" />
              <input type="text" placeholder="Email *" />
              <input type="text" placeholder="Subject *" />
            </div>
            <textarea placeholder="Message *"></textarea>
            <button>SEND MESSAGE</button>
          </form>
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
                <p> Address : No 40 Baria Sreet 133/2 NewYork City</p>
              </div>
              <div className="contact-text-icon">
                <p> info@yourdomain.com</p>
              </div>
              <div className="contact-text-icon">
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
