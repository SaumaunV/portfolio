import styles from './Header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

function Header({homeRef, aboutRef, projectsRef, contactRef}) {
  const [menu, setMenu] = useState(false);

  function handleClick(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className={styles.header}>
      <div className={styles.logo}>SV</div>
      <div className={styles.menu}>
        <div className={styles.menuItem} onClick={() => handleClick(homeRef)}>
          Home
        </div>
        <div className={styles.menuItem} onClick={() => handleClick(aboutRef)}>
          About
        </div>
        <div
          className={styles.menuItem}
          onClick={() => handleClick(projectsRef)}
        >
          Projects
        </div>
        <div
          className={styles.menuItem}
          onClick={() => handleClick(contactRef)}
        >
          Contact
        </div>
      </div>
      <FontAwesomeIcon
        className={styles.icon}
        icon={faBars}
        onClick={() => setMenu(true)}
      />
      {menu && (
        <div className={styles.hamburgerMenuContainer}>
          <div className={styles.hamburgerMenu}>
            <FontAwesomeIcon
              className={styles.hamburgerMenuClose}
              icon={faXmark}
              onClick={() => setMenu(false)}
            />
            <div
              className={styles.hamburgerMenuItem}
              onClick={() => handleClick(homeRef)}
            >
              Home
            </div>
            <div
              className={styles.hamburgerMenuItem}
              onClick={() => handleClick(aboutRef)}
            >
              About
            </div>
            <div
              className={styles.hamburgerMenuItem}
              onClick={() => handleClick(projectsRef)}
            >
              Projects
            </div>
            <div
              className={styles.hamburgerMenuItem}
              onClick={() => handleClick(contactRef)}
            >
              Contact
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header