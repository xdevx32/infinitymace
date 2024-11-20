// components/Carousel.js
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const images = [
  'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800', // Cat looking at the camera
  'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800', // Dog on a grassy field
  'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800', // Cat lying in the garden
  'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800', // Close-up of a cat
  'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800', // Dog sitting in a field
  'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800', // Dog running in a park
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        <div className={styles.carouselImageWrapper}>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className={styles.carouselItem}
          />
        </div>
        <div className={styles.carouselControls}>
          <button className={styles.leftArrow} onClick={prevSlide}>
            &#10094;
          </button>
          <button className={styles.rightArrow} onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        <div className={styles.carouselIndicators}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.carouselIndicator} ${
                index === currentIndex ? styles.active : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
