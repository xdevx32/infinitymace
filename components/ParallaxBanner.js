// components/ParallaxBanner.js
import React from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/ParallaxBanner.module.css';

// Dynamically load ReactPlayer to handle SSR
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function ParallaxBanner() {
  return (
    <div className={styles.parallaxContainer}>
      <div className={styles.videoWrapper}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=A89FMtIkWKc"
          playing
          muted
          loop
          controls={false} // Hide YouTube player controls
          width="100%"
          height="100%"
          className={styles.videoPlayer}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Infinity Mace</h1>
        <p className={styles.subtitle}>Discover the power of functional fitness</p>
      </div>
    </div>
  );
}
