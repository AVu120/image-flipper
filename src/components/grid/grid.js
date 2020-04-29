import React from "react";
import Image from "./image/image";
import styles from "./grid.module.css";

const Grid = () => {
  return (
    <div className={styles.grid}>
      <Image className={styles.grid__image} />
      <Image className={styles.grid__image} />
      <Image className={styles.grid__image} />
      <Image className={styles.grid__image} />
    </div>
  );
};

export default Grid;
