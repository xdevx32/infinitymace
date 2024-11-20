// pages/index.js
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import FeaturedVideos from '../components/FeaturedVideos';
import PhotoGallery from '../components/PhotoGallery';

const Carousel = dynamic(() => import('../components/Carousel'), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Carousel />
      <FeaturedVideos />
      <PhotoGallery />
    </div>
  );
}
