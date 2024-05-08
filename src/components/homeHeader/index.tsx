import React from 'react';
import styles from './styles.module.css';

const HomeHeader: React.FC = () => {
  return (
    <section className={`${styles.home} ${styles.section}`} id="home">
      <div className={`${styles.home__container} ${styles.container} ${styles.grid}`}>
        <div className={`${styles.home__content} ${styles.grid}`}>
          <div className={styles.home__social}>
            <a href="https://www.linkedin.com/in/aksh-ai/" target="_blank" className={styles.home__socialIcon}>
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://github.com/aksh-ai" target="_blank" className={styles.home__socialIcon}>
              <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://twitter.com/akkiboeing" target="_blank" className={styles.home__socialIcon}>
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
          <div className={styles.home__img}>
            <svg className={styles.home__blob} viewBox="0 0 200 187">
              <mask id="mask0">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                <image className={styles.home__blobImg} x="25" y="12" xlinkHref="./assets/img/A_final.png"/>
              </g>
            </svg>
          </div>
          <div className={styles.home__data}>
            <h1 className={styles.home__title}>Hi, I'm Akshay</h1>
            <h3 className={styles.home__subtitle}>Machine Learning Engineer</h3>
            <p className={styles.home__description}>
              24 | Artificial Intelligence | Data Science | Software Development | Full-Stack | Open Research | Freelance<br/><br/>
            </p>
            <a href="#contact" className={`${styles.button} ${styles.buttonFlex}`}>
              Contact <i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>
        <div className={styles.home__scroll}>
          <a href="#about" className={`${styles.home__scrollButton} ${styles.buttonFlex}`}>
            <i className="uil uil-mouse-alt home__scrollMouse"></i>
            <span className={styles.home__scrollName}>Scroll down</span>
            <i className="uil uil-arrow-down home__scrollArrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
