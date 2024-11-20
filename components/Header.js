// components/Header.js
import { useEffect } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  useEffect(() => {
    const header = document.querySelector(`.${styles.header}`);
    let colors = ['#ff7eb3', '#ff758c', '#7bffb3', '#8c7bff'];
    let index = 0;

    const changeColor = () => {
      header.style.background = `linear-gradient(135deg, ${colors[index]}, ${colors[(index + 1) % colors.length]})`;
      index = (index + 1) % colors.length;
    };

    const interval = setInterval(changeColor, 4000); // Change color every 4 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UOW09a8y-Ue_FtTFn01C4U4-dZmIax-P_g&s"
          alt="Infinity Mace Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>INFINITY MACE</h1>
      </div>
      <p className={styles.subtitle}>
        Discover your plan, body preference, calorie intake, and more.
      </p>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li><a href="#cool-maces" className={styles.navLink}>Cool Maces</a></li>
          <li><a href="#meal-plans" className={styles.navLink}>Meal Plans</a></li>
          <li><a href="#personal-trainer" className={styles.navLink}>Personal Trainer</a></li>
          <li><a href="#schedule" className={styles.navLink}>Schedule</a></li>
          <li><a href="#testimonials" className={styles.navLink}>Testimonials</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
