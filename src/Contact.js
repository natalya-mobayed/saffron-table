import React from "react";
import "./Contact.css";

function Contact() {
  function sendMessage(e) {
    e.preventDefault();
    alert("Your message has been received!");
    e.target.reset();
  }

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have a question? Send us a message.</p>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;