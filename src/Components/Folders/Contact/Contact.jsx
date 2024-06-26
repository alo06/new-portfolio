import React, { useRef } from "react";
import TitleBar from "../TitleBar/TitleBar";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useGlobalContext } from "../../../Context";
import Navigation from "../Navigation/Navigation";


const Contact = () => {

  const {contact,setContact} = useGlobalContext()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2t6sqc7",
        "template_cc6926g",
        form.current,
        "nvN2PUCCh1c8JlPRM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={contact ? "contact" : "close"}>
      <TitleBar
        title="Contact"
        onToggle={() => {
          setContact(false);
        }}
      />
      <div className="split">
        <Navigation/>
        <div className="windows-xp-form-container">
          <form ref={form} onSubmit={sendEmail} className="form" id="contact">
            <div className="contact-inputs">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="contact-inputs">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="contact-inputs">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required />
            </div>
            <button type="submit">Submit</button>
          </form>
          <h3 style={{ color: "red", margin: "10px 0 0 0" }}>
            Please Note: Provide a valid email in-order to get a response
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
