import React, { useState } from "react";
import "./Contact.css";
import Slider from "../Slider/Slider";
function Contact({ showSlider , showMap }) {
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
          <h4>BOOK AN APPOINTMENT</h4>
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
        {showMap && <div className="map-container">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3793.72726354988!2d79.53468637518013!3d18.037856682964474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDAyJzE2LjMiTiA3OcKwMzInMTQuMSJF!5e0!3m2!1sen!2sin!4v1709742369721!5m2!1sen!2sin"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>}
      </div>
    </div>
  );
}

export default Contact;
