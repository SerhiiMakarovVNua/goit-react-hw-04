import React from 'react'
import styles from '../ErrorMessage/ErrorMessage.module.css'

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.errorMessage}>
      {message}
    </div>
  );
};

export default ErrorMessage;
