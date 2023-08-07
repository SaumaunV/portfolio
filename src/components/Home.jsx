import { forwardRef } from 'react';
import styles from './Home.module.css';
import resume from '../../Saumaun-Vahedipour-Resume.pdf'

function Home({ projectsRef }, ref) {
  function showProjects() {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.heading}>Saumaun Vahedipour</h1>
        <h2 className={styles.subheading}>
          Full Stack Developer Fusing Design and Functionality
        </h2>
        <div className={styles.info}>
          <a href={resume} target="_blank" rel="noreferrer">
            <div>
              <i className={`fa-solid fa-file-arrow-down ${styles.cv}`}></i>
            </div>
          </a>
          <a href="https://github.com/SaumaunV" target="_blank">
            <div>
              <i
                className={`devicon-github-original colored ${styles.github}`}
              ></i>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/saumaun/" target="_blank">
            <div>
              <i class={`devicon-linkedin-plain ${styles.linkedin}`}></i>
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