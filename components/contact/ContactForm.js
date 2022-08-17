import React, { useState } from "react";
import classes from "./contact-form.module.css";

// =>

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const sendMessageHandler = (e) => {
    e.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section className={classes.contact}>
      <h1>How can i help you</h1>
      <form onSubmit={sendMessageHandler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name=""
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name=""
              id="name"
              required
              value={enteredName}
              onChange={(e) => {
                setEnteredName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message"> your message</label>
          <textarea
            name=""
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(e) => {
              setEnteredMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>send message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
