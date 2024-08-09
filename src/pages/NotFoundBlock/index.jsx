import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h2>
        <span>🥺🥀❤️‍🩹</span>
        <br></br>
        Ничего не найдено
      </h2>
      <p className={styles.description}>К сожалению, данной страницы не существует</p>
    </div>
  );
};

export default NotFound;
