// pages/index.js
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import FeaturedVideos from '../components/FeaturedVideos';
import PhotoGallery from '../components/PhotoGallery';
import BannerSlider from '../components/BannerSlider';
import StickyBanner from '../components/StickyBanner';

const Carousel = dynamic(() => import('../components/Carousel'), { ssr: false });

export default function Home() {
  return (
    <div className={styles.backgroundContainer}>
      {/* Header */}
      <div className={styles.headerContainer}>
        <Header />
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <StickyBanner />
        <BannerSlider />
        <Carousel />
        <FeaturedVideos />
        <PhotoGallery />
      </div>
    </div>
  );
}
