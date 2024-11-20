// components/BannerSlider.js
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/BannerSlider.module.css';

// Load ReactPlayer dynamically to handle SSR issues
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const BannerSlider = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Auto-play the video when the component is mounted
    setIsPlaying(true);
  }, []);

  return (
    <div className={styles.bannerSlider}>
      <ReactPlayer
        url="https://streamable.com/2axopv"
        playing={isPlaying}
        loop
        controls
        width="100%"
        height="100%"
        className={styles.videoPlayer}
      />
    </div>
  );
};

export default BannerSlider;
