// components/StickyBanner.js
import React from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/StickyBanner.module.css';

// Dynamically load ReactPlayer to handle SSR
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function StickyBanner() {
  return (
    <div className={styles.stickyBanner}>
      <div className={styles.content}>
        <p className={styles.text}>
          🚀 Welcome to Infinity Mace! Unlock your potential today! 🚀
        </p>
        <div className={styles.videoContainer}>
          <ReactPlayer
            url="https://youtu.be/mcJNm45dChM"
            playing
            muted
            loop
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
