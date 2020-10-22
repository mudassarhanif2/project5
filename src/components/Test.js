import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import vid from './snap.mp4';
import styles from './Test.module.css';

export const Test = () => {
  useEffect(()=>{
    window.onscroll = ()=>{
      if(document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 800){
        document.getElementById('vid').play();
        // document.getElementById('heading').style.left = "55vw";
      }
    }
  });
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  
  
  return(
    <div className={styles.container}>
      <video id="vid" className={styles.vid} src={vid} autoPlay muted />
      <h1 id='heading' data-aos='fade-up'  className={styles.heading}>Formating that's<br /> effertless</h1>
    </div>
  );
};

