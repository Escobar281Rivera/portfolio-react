import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.conainer}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'am Wilfredo Escobar</h1>
                <p className={styles.description}>I'am a full-stack developer with two years old of experience at programation world...</p>
                <a href="mailto:wilalexander05@gmail.com">Contact Me</a>
            </div>
            <img src={getImageUrl('hero/heroImage.png')} alt="Hero image of me" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
} 