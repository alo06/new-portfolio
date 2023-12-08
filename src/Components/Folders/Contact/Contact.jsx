import React from "react";
import TitleBar from "../TitleBar/TitleBar";
import "./Contact.css";

const Contact = ({ contact, setContact }) => {
  return (
    <div className={contact ? "contact" : "close"}>
      <TitleBar
        title="Contact"
        onToggle={() => {
          setContact(false);
        }}
      />
    </div>
  );
};

export default Contact;
