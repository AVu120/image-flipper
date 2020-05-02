import React from "react";
import Image from "./image/image";
import styles from "./grid.module.css";

const nonSelectedBorder = "3px solid black";
const selectedBorder = "3px solid #f50057";

const Grid = ({ url, rotation, changeSelectedImages, selectedImages }) => {
  return (
    <div className={styles.grid}>
      <div
        className={styles.grid__imageBorder}
        style={{
          "--rotation": `rotate(${rotation.topLeft}deg)`,
          border: `${
            selectedImages && selectedImages.includes("topLeft")
              ? selectedBorder
              : nonSelectedBorder
          }`,
        }}
        onClick={() => changeSelectedImages("topLeft")}
      >
        <Image className={styles.grid__image} url={url} />
      </div>
      <div
        className={styles.grid__imageBorder}
        style={{
          "--rotation": `rotate(${rotation.topRight}deg)`,
          border: `${
            selectedImages && selectedImages.includes("topRight")
              ? selectedBorder
              : nonSelectedBorder
          }`,
        }}
        onClick={() => changeSelectedImages("topRight")}
      >
        <Image className={styles.grid__image} url={url} />
      </div>
      <div
        className={styles.grid__imageBorder}
        style={{
          "--rotation": `rotate(${rotation.bottomLeft}deg)`,
          border: `${
            selectedImages && selectedImages.includes("bottomLeft")
              ? selectedBorder
              : nonSelectedBorder
          }`,
        }}
        onClick={() => changeSelectedImages("bottomLeft")}
      >
        <Image className={styles.grid__image} url={url} />
      </div>
      <div
        className={styles.grid__imageBorder}
        style={{
          "--rotation": `rotate(${rotation.bottomRight}deg)`,
          border: `${
            selectedImages && selectedImages.includes("bottomRight")
              ? selectedBorder
              : nonSelectedBorder
          }`,
        }}
        onClick={() => changeSelectedImages("bottomRight")}
      >
        <Image className={styles.grid__image} url={url} />
      </div>
    </div>
  );
};

export default Grid;
