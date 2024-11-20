// script.js
// Modal handling
const modal = document.getElementById('media-modal');
const modalImage = document.getElementById('modal-image');
const modalVideo = document.getElementById('modal-video');

function openModal(src) {
  if (src.endsWith('.mp4')) {
    modalImage.style.display = 'none';
    modalVideo.style.display = 'block';
    modalVideo.src = src;
    modalVideo.play();
  } else {
    modalVideo.style.display = 'none';
    modalImage.style.display = 'block';
    modalImage.src = src;
  }
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
  modalVideo.pause();
  modalVideo.src = '';
  modalImage.src = '';
}
