import React from 'react';
import styles from "./Header.module.css";
import MaterialIcon from "material-icons-react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Header = () => {
  const {ref: a} = useWebAnimations({
    keyframes: {
      transform: ["rotate(15deg)", "rotate(-15deg)"]
    },
    timing: {
      duration: 1000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  })
    return (
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <nav className={styles.header}>
              <a ref={a} className={styles.logo} id={styles.logo} href="https">
                <svg fill="blue" height="23" width="66">
                  <path d="M44.87 17.272a4.318 4.318 0 11.04-4.877l3.191-1.884a8.019 8.019 0 10-.017 8.613l-3.213-1.852zM53.662 0H49.96v22.206h3.7v-7.402a4.318 4.318 0 118.636 0v7.402h3.701v-8.122a7.3 7.3 0 00-12.336-5.282V0zM27.756 0h-3.701v17.271a5.551 5.551 0 009.201 
                    4.183l-1.788-3.034a1.847 1.847 0 01-1.45.701h-.412a1.851 1.851 0 01-1.85-1.85v-6.168h3.7V7.402h-3.7V0zM19.74 0a2.056 2.056 0 100 4.112 2.056 2.056 0 000-4.112zM21.59 22.206V7.402h-3.7v14.804h3.7z" fill="black"></path>
                  <path d="M0 22.206h3.7v-4.318h3.393A8.944 8.944 0 107.093 0H0v22.206zM3.7 3.7h3.393a5.243 5.243 0 010 10.486H3.701V3.7z" fill="black"></path>
              </svg>
              </a>
              <a className={styles.login} href="https" >login</a>
              <button className={styles.signup}>Get early access</button>
              <MaterialIcon icon="menu" id='icon' />
            </nav>
          </div>
        </div>
    )
}
