import React from 'react';

function Contact () {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p>
            Have a project in mind or just want to say hello? Feel free to
            reach out to me using the contact details below.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>Email: your.email@example.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>Phone: +123-456-7890</p>
            </div>
          </div>
          {/* Add a contact form here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;