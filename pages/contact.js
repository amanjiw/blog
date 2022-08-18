import React from "react";
import Head from "next/head";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact me </title>
        <meta name="description" content="send me your messages" />
      </Head>
      <ContactForm />
    </>
  );
}

export default Contact;
