import React from 'react';
import styles from "./Image.module.css";
import useWebAnimations from '@wellyshen/use-web-animations';

export const Image = () => {
    const {ref} = useWebAnimations({
        keyframes: {
            transform: ['scale(0.7)', 'scale(1.25)'],
            top: ['0.5vw', '0.75vw', '1vw', '1.25vw', '1.5vw', '1.75vw', '2vw'],
        },
        timing: {
            duration: 10000,
            iterations: 2,
            direction: "alternate",
        }
    })
    return (
        <div ref={ref} className={styles.container}>
            <img className={styles.outerImage} alt="face" src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1600165470/website-images/images/home/hero-ui/hero-ui_1248w.jpg" />
            <img className={styles.innerImage} alt="inner-face" src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1600165470/website-images/images/home/hero-hands/hero-hands_960w.png" />
            <h1 className={styles.heading}>All hands <br/>on deck.</h1>
        </div>
    )
}
