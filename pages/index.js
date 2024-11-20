// pages/index.js
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import FeaturedVideos from '../components/FeaturedVideos';
import PhotoGallery from '../components/PhotoGallery';
import BannerSlider from '../components/BannerSlider';
import InstagramEmbed from '../components/InstagramEmbed';

const Carousel = dynamic(() => import('../components/Carousel'), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <BannerSlider />
      <Carousel />
      <FeaturedVideos />
      <PhotoGallery />
    </div>
  );
}
