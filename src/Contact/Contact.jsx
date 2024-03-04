import React, { useState } from "react";
import "./Contact.css";
import Slider from "../Slider/Slider";
function Contact({ showSlider }) {
  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const { name, email, mobile, message, subject } = formState;
    const config = {
      SecureToken: "c0e6da63-104f-4aec-a01e-cbe0015cc83e",
      To: "jogof50513@sfpixel.com",
      From: "shivakumarrangu555@gmail.com",
      Subject: " For service Enquiry ",
      Body: `
      Name: ${name || ""}
      Email: ${email || ""}
      Mobile: ${mobile || ""}
      Message: ${message || ""}
      Subject: ${subject || ""}
    `,
    };
    if (window.Email) {
      window.Email.send(config).then(() => alert(" Your Enquiry Has Been Sent "));
    } else {
      alert("Email sending failed. Please check your configurations.");
    }
  };
  return (
    <div>
      {showSlider && <Slider />}
      <p id="heading">Contact Us</p>
      <div className="contact-container">
        <div className="contact-form">
          <h4>CONTACT FORM</h4>
          <form onSubmit={submitHandler}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={changeHandler}
                  value={formState.name || ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={changeHandler}
                  value={formState.email || ""}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={changeHandler}
                  value={formState.subject || ""}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  onChange={changeHandler}
                  value={formState.mobile || ""}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  onChange={changeHandler}
                  value={formState.message || ""}
                ></textarea>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="map-container">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.6787885234507!2d79.01653467464288!3d18.111856081532213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc9555573e5a77%3A0x14628637ce38e3c6!2sBaddipadaga%2C%20Telangana%20502375%2C%20India!5e1!3m2!1sen!2sus!4v1709490807467!5m2!1sen!2sus"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
