// components/MainComponent.js
import React from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/MainComponent.module.css';

// Dynamically load ReactPlayer to handle SSR
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function MainComponent() {
  return (
    <div className={styles.mainContainer}>
      {/* Video Background */}
      <div className={styles.videoBackground}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=A89FMtIkWKc"
          playing
          muted
          loop
          controls={false}
          width="100%"
          height="100%"
          className={styles.videoPlayer}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Scrollable Content */}
      <div className={styles.content}>
        <h1>Welcome to Infinity Mace</h1>
        <p>Discover the power of functional fitness and find your strength!</p>
        <div style={{ height: '200vh' }}>
          <p>Keep scrolling to explore more content!</p>
        </div>
      </div>
    </div>
  );
}
