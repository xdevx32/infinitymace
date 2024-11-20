// components/FeaturedVideos.js
import React from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const videoUrls = [
  'https://streamable.com/2axopv',
  'https://streamable.com/jp4nix',
  'https://youtu.be/VG1p_jPqB1U',
  
  
  ];

export default function FeaturedVideos() {
  return (
    <div>
      <h2>Featured Videos</h2>
      <div className={styles.videoGallery}>
        {videoUrls.map((url, index) => (
          <div key={index} className={styles.videoWrapper}>
            <ReactPlayer url={url} controls width="100%" height="200px" />
          </div>
        ))}
      </div>
    </div>
  );
}
