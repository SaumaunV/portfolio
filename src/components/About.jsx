import styles from './About.module.css';

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.heading}>About</h1>
        <p>
          I am a software developer and computer science graduate from the University of Illinois at Chicago.
        </p>
        <p>
          I have honed my skills in HTML, CSS, JavaScript, and frontend frameworks 
          such as React and Next.js. On the backend, I have experience with server-side 
          languages like Node.js and C#, along with database management systems like MySQL
          and PostgreSQL.
        </p>
        <p>
          I am eager to contribute my skills and learn from experienced
          professionals, and I am excited about the opportunity to make a
          meaningful impact as part of a talented team. I am committed to 
          continuous improvement, open to challenges, and ready to take on 
          new and exciting projects.
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
            <i class="devicon-typescript-plain colored"></i>
            <figcaption>TypeScript</figcaption>
          </figure>
          <figure>
            <i className="devicon-react-original colored"></i>
            <figcaption>React</figcaption>
          </figure>
          <figure>
            <i class="devicon-nextjs-original colored"></i>
            <figcaption>Next.js</figcaption>
          </figure>
          <figure>
            <i class="devicon-nodejs-plain colored"></i>
            <figcaption>Node.js</figcaption>
          </figure>
          <figure>
            <i class="devicon-java-plain colored"></i>
            <figcaption>Java</figcaption>
          </figure>
          <figure>
            <i class="devicon-csharp-plain colored"></i>
            <figcaption>C#</figcaption>
          </figure>
          <figure>
            <i class="devicon-postgresql-plain colored"></i>
            <figcaption>PostgreSQL</figcaption>
          </figure>
          <figure>
            <i class="devicon-mysql-plain colored"></i>
            <figcaption>MySQL</figcaption>
          </figure>
          <figure>
            <i class="devicon-express-original colored"></i>
            <figcaption>Express</figcaption>
          </figure>
          <figure>
            <i class="devicon-html5-plain colored"></i>
            <figcaption>HTML</figcaption>
          </figure>
          <figure>
            <i class="devicon-css3-plain colored"></i>
            <figcaption>CSS</figcaption>
          </figure>
          <figure>
            <i class="devicon-tailwindcss-plain colored"></i>
            <figcaption>Tailwind CSS</figcaption>
          </figure>
          <figure>
            <i class="devicon-firebase-plain colored"></i>
            <figcaption>Firebase</figcaption>
          </figure>
          <figure>
            <i class="devicon-graphql-plain colored"></i>
            <figcaption>GraphQL</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default About