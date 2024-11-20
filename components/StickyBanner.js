// components/StickyBanner.js
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/StickyBanner.module.css';

// Dynamically load ReactPlayer to handle SSR
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={styles.stickyBanner}>
      <button
        className={styles.hideButton}
        onClick={() => setIsVisible(false)}
      >
        ✖
      </button>
      <ReactPlayer
        url="https://youtu.be/mcJNm45dChM"
        playing
        muted
        loop
        width="100%"
        height="100%"
        className={styles.videoPlayer}
      />
    </div>
  );
}
