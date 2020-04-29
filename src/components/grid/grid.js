import React from "react";
import Image from "./image/image";
import styles from "./grid.module.css";

const Grid = ({ url }) => {
  return (
    <div className={styles.grid}>
      <Image className={styles.grid__image} url={url} />
      <Image className={styles.grid__image} url={url} />
      <Image className={styles.grid__image} url={url} />
      <Image className={styles.grid__image} url={url} />
    </div>
  );
};

export default Grid;
