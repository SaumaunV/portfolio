import React, { forwardRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { faArrowRight, faCircleCheck, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Contact(_, ref) {
  const [error, setError] = useState(false);
  const [submitted, setsubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setLoading(true);
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
          setsubmitted(true);
        },
        (error) => {
          setError(true);
          setLoading(false);
        }
      );
    form.current.reset();
  };

  return (
    <div ref={ref} className={styles.container}>
      {submitted ? (
        <div className={styles.submitContainer}>
          <div className={styles.submitInfo}>
            <FontAwesomeIcon
              className={styles.checkIcon}
              icon={faCircleCheck}
            />
            <span className={styles.submitMessage}>Message sent</span>
          </div>
        </div>
      ) : (
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
              {loading ? (
                <FontAwesomeIcon icon={faCircleNotch} spin />
              ) : (
                <>
                  <span className={styles.buttonText}>Submit</span>{" "}
                  <FontAwesomeIcon icon={faArrowRight} />
                </>
              )}
            </button>
          </form>
          {error && (
            <span className={styles.errorMessage}>An error occurred</span>
          )}
        </div>
      )}
    </div>
  );
}

export default forwardRef(Contact)
