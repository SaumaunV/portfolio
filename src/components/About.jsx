import { forwardRef } from 'react';
import styles from './About.module.css';

function About(_, ref) {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.heading}>About</h1>
        <p>
          I am a web developer and computer science graduate interested in
          creating visually pleasing and intuitive web experiences that leave a
          lasting impression.
        </p>
        <p>
          I have honed my skills in frontend frameworks such as React and
          Next.js. On the backend, I have experience with server-side languages
          like Node.js and C#, along with database management systems like
          MySQLand PostgreSQL.
        </p>
        <p>
          I am eager to contribute my skills and learn from experienced
          professionals, and I am excited about the opportunity to make a
          meaningful impact as part of a talented team. I am committed to
          continuous improvement, open to challenges, and ready to take on new
          and exciting projects.
        </p>
      </div>
      <div className={styles.skills}>
        <h1 className={styles.heading}>Skills</h1>
        <div className={styles.skillGrid}>
          <figure>
            <img
              className={styles.img}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure>
            <i className="devicon-typescript-plain colored"></i>
            <figcaption>TypeScript</figcaption>
          </figure>
          <figure>
            <i className="devicon-react-original colored"></i>
            <figcaption>React</figcaption>
          </figure>
          <figure>
            <i className="devicon-nextjs-original colored"></i>
            <figcaption>Next.js</figcaption>
          </figure>
          <figure>
            <i className="devicon-nodejs-plain colored"></i>
            <figcaption>Node.js</figcaption>
          </figure>
          <figure>
            <i className="devicon-java-plain colored"></i>
            <figcaption>Java</figcaption>
          </figure>
          <figure>
            <i className="devicon-csharp-plain colored"></i>
            <figcaption>C#</figcaption>
          </figure>
          <figure>
            <i className="devicon-postgresql-plain colored"></i>
            <figcaption>PostgreSQL</figcaption>
          </figure>
          <figure>
            <i className="devicon-mysql-plain colored"></i>
            <figcaption>MySQL</figcaption>
          </figure>
          <figure>
            <i className="devicon-express-original colored"></i>
            <figcaption>Express</figcaption>
          </figure>
          <figure>
            <i className="devicon-html5-plain colored"></i>
            <figcaption>HTML</figcaption>
          </figure>
          <figure>
            <i className="devicon-css3-plain colored"></i>
            <figcaption>CSS</figcaption>
          </figure>
          <figure>
            <i className="devicon-tailwindcss-plain colored"></i>
            <figcaption>Tailwind CSS</figcaption>
          </figure>
          <figure>
            <i className="devicon-firebase-plain colored"></i>
            <figcaption>Firebase</figcaption>
          </figure>
          <figure>
            <i className="devicon-graphql-plain colored"></i>
            <figcaption>GraphQL</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(About)