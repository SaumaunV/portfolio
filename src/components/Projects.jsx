import React, { forwardRef } from 'react'
import styles from './Projects.module.css'
import Project from './Project'
import bug_tracker_image from "../../images/bug-tracker.png";
import discord_clone_image from "../../images/discord-clone.png";
import amazon_clone_image from "../../images/amazon-clone.png";
import minesweeper_image from "../../images/minesweeper.png";

function Projects(_, ref) {
  return (
    <div ref={ref} className={styles.container}>
      <h1 className={styles.heading}>My Projects</h1>
      <div className={styles.projectContainer}>
        <Project
          image={bug_tracker_image}
          name="Bug Tracker"
          description="Bug tracker application that allows users to collaborate with teams"
          stack={[
            "TypeScript",
            "React",
            "Next.js",
            "Node",
            "Express",
            "PostgreSQL",
            "Graphql",
            "ChakraUI",
          ]}
          demoLink="https://bug-tracker-red.vercel.app"
          githubLink="https://github.com/SaumaunV/bug-tracker"
        />
        <Project
          image={discord_clone_image}
          name="Discord Clone"
          description="Chat application that allows users to join servers and interact through channels"
          stack={[
            "TypeScript",
            "React",
            "Next.js",
            "Node",
            "Express",
            "MySQL",
            "Prisma",
            "TailwindCSS",
          ]}
          demoLink="https://chatter-rosy.vercel.app "
          githubLink="https://github.com/SaumaunV/discord-clone"
        />
        <Project
          image={amazon_clone_image}
          name="Amazon Clone"
          description="E-commerce store with shopping cart, purchase history, and payment integration"
          stack={[
            "TypeScript",
            "React",
            "Node",
            "Firebase",
            "Styled Components",
            "Stripe",
          ]}
          demoLink="https://clone-e06ca.firebaseapp.com"
          githubLink="https://github.com/SaumaunV/amazon-clone"
        />
        <Project
          image={minesweeper_image}
          name="Minesweeper"
          description="Clone of the minesweeper game"
          stack={["JavaSript", "HTML", "CSS"]}
          demoLink="https://saumaunv.github.io/Minesweeper"
          githubLink="https://github.com/SaumaunV/Minesweeper"
        />
      </div>
    </div>
  );
}

export default forwardRef(Projects); 