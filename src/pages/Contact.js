import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <div id="contact" >
      <div className="contact-container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d627.3129408199028!2d-114.13054273031226!3d51.02997064167109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716e278ca5f49d%3A0xcc695963623a5df1!2s3001%2026%20Ave%20SW%2C%20Calgary%2C%20AB%20T3E%202K7!5e0!3m2!1sen!2sca!4v1696643485238!5m2!1sen!2sca"
            width="100%"
            height="633"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="iframe1"
          ></iframe>
        </div>
        <div className="contact-box">
          <img src="contact.jpg" alt="contact box"/>
        </div>
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form>
            <div className="input-item">
              <label>Name</label>
              <input type="text" />
            </div>
            <div className="input-item"> 
              <label>Phone Number</label>
              <input type="text" />
            </div>
            <div className="input-item">
              <label>Subject</label>
              <input type="text" />
            </div>
            <div className="input-item">
              <label>Message</label>
              <textarea></textarea>
            </div>
            <div>
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
