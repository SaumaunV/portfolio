import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>SV</div>
      <div className={styles.menu}>
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
    </div>
  );
}

export default Header