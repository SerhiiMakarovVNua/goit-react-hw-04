import React from 'react';
import Modal from 'react-modal';
import styles from '../ImageModal/ImageModal.module.css';
import { RxCross2 } from "react-icons/rx";

const ImageModal = ({ isOpen, onRequestClose, imageUrl, alt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <button className={styles.closeButton} onClick={onRequestClose}><RxCross2 /></button>
      <img src={imageUrl} alt={alt} className={styles.modalImage} />
    </Modal>
  );
};

export default ImageModal;