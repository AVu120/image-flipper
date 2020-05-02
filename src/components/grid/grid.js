import React from "react";
import Image from "./image/image";
import styles from "./grid.module.css";

const Grid = ({ url, rotation }) => {
  return (
    <div className={styles.grid}>
      <div
        className={styles.grid__imageBorder}
        style={{ "--rotation": `rotate(${rotation.topLeft}deg)` }}
      >
        <Image className={styles.grid__image} url={url} />
      </div>
      <div
        className={styles.grid__imageBorder}
        style={{ "--rotation": `rotate(${rotation.topRight}deg)` }}
      >
        <Image className={styles.grid__image} url={url} />
      </div>
      <div
        className={styles.grid__imageBorder}
        style={{ "--rotation": `rotate(${rotation.bottomLeft}deg)` }}
      >
        <Image className={styles.grid__image} url={url} />
      </div>
      <div
        className={styles.grid__imageBorder}
        style={{ "--rotation": `rotate(${rotation.bottomRight}deg)` }}
      >
        <Image className={styles.grid__image} url={url} />
      </div>
    </div>
  );
};

export default Grid;
