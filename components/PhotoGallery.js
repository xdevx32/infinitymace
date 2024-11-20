// PhotoGallery.js
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Modal from './Modal';

const images = [
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5a039e7332601eca495b1fe4/1515222685712-5TE1CSSA3AVTGXKAFJRH/Thor+Mace.jpg',
    alt: 'Image 1',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQINDtwk_xsRENY7p-UeuTrJ88JKraaqvDyow&s',
    alt: 'Image 2',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSs0KjuSOtidaygSH-t2v2S49xzyvbZXocg&s',
    alt: 'Image 3',
  },
];

export default function PhotoGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <section className={styles.section}>
      <h2>Photo Gallery</h2>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={styles.image}
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <img src={currentImage.src} alt={currentImage.alt} className={styles.modalImage} />
        </Modal>
      )}
    </section>
  );
}
