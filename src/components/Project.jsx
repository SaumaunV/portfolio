import React from "react";
import styles from "./Project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Project({ image, name, description, stack, demoLink, githubLink, first }) {
  return (
    <div className={styles.container} id={first && styles.first}>
      <img className={styles.img} src={image} alt={name} />
      <div className={styles.stack}>
        {stack.map((item) => (
          <div key={item} className={styles.stackItem}>{item}</div>
        ))}
      </div>
      <h1 className={styles.heading}>{name}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonContainer}>
        <a href={demoLink} target="_blank">
          <button className={styles.liveButton}>
            <span>Live</span> 
            <FontAwesomeIcon icon={faLink} />
          </button>
        </a>
        <a href={githubLink} target="_blank">
          <button className={styles.codeButton}>
            <span>Code</span>
            <i className={`devicon-github-original ${styles.githubIcon}`}></i>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Project;
