import React, { forwardRef, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { faArrowRight, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Contact(_, ref) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_msrwxu5",
        "template_4f60f1h",
        form.current,
        "AKG0LKTPY5f4CwmHH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.heading}>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" required />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
          ></textarea>
          <button className={styles.submit} type="submit">
            <span className={styles.buttonText}>Submit</span>
            <FontAwesomeIcon icon={faArrowRight} />
            {/* <FontAwesomeIcon icon={faCircleNotch} spin /> */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default forwardRef(Contact)
