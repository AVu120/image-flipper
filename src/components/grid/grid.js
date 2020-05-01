import React from "react";
import Image from "./image/image";
import styles from "./grid.module.css";

const Grid = ({ url }) => {
  return (
    <div className={styles.grid}>
      <div
        className={styles.grid__imageBorder}
        style={{ "--rotation": `rotate(${0}deg)` }}
      >
        <Image className={styles.grid__image} url={url} />
      </div>
      <div
        className={styles.grid__imageBorder}
        style={{ "--rotation": `rotate(${0}deg)` }}
      >
        <Image className={styles.grid__image} url={url} />
      </div>
      <div
        className={styles.grid__imageBorder}
        style={{ "--rotation": `rotate(${0}deg)` }}
      >
        <Image className={styles.grid__image} url={url} />
      </div>
      <div
        className={styles.grid__imageBorder}
        style={{ "--rotation": `rotate(${0}deg)` }}
      >
        <Image className={styles.grid__image} url={url} />
      </div>
    </div>
  );
};

export default Grid;