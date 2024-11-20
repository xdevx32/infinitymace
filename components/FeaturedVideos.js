// components/FeaturedVideos.js
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
const MotionBox = motion(Box);

const videoUrls = [
'https://streamable.com/2axopv',
'https://streamable.com/jp4nix',
'https://youtu.be/VG1p_jPqB1U',


];

export default function FeaturedVideos() {
  return (
    <section className={styles.section}>
      <h2>Featured Videos</h2>
      <div className={styles.videoGallery}>
        {videoUrls.map((url, index) => (
          <div key={index} className={styles.videoWrapper}>
            <ReactPlayer
              url={url}
              className={styles.video}
              controls
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </section>
  );
}