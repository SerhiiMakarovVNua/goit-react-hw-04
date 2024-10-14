import React from 'react';
import styles from '../LoadMoreBtn/LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={styles.loadMoreButton} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;                  