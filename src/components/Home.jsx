import { forwardRef } from 'react';
import styles from './Home.module.css';
import resume from '../../Saumaun-Vahedipour-Resume.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

function Home({ projectsRef }, ref) {
  function showProjects() {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.heading}>Saumaun Vahedipour</h1>
        <h2 className={styles.subheading}>Full Stack Developer Fusing Design and Functionality</h2>
        <div className={styles.info}>
          <a href={resume} target="_blank" rel="noreferrer">
            <div>
              <FontAwesomeIcon className={styles.cv} icon={faFileArrowDown} />
            </div>
          </a>
          <a href="https://github.com/SaumaunV" target="_blank">
            <div>
              <i
                className={`devicon-github-original colored ${styles.icon}`}
              ></i>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/saumaun/" target="_blank">
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
            </div>
          </a>
        </div>
        <div className={styles.projects} onClick={showProjects}>
          <div className={styles.text}>View Projects</div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <img
          src="../../images/home_image.png"
          alt=""
          className={styles.home_image}
        />
      </div>
    </div>
  );
}

export default forwardRef(Home); 