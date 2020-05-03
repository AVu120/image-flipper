import React from "react";
import Image from "./image/image";
import styles from "./grid.module.css";

const nonSelectedBorder = "3px solid black";
const selectedBorder = "3px solid #f50057";

const Grid = ({
  url,
  rotation,
  changeSelectedImages,
  selectedImages,
  isHorizontallyFlipped,
  isVerticallyFlipped,
}) => {
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
          "--horizontalInversion": isHorizontallyFlipped.topLeft
            ? `rotateY(180deg)`
            : `rotateY(0deg)`,
          "--verticalInversion": isVerticallyFlipped.topLeft
            ? `rotateX(180deg)`
            : `rotateX(0deg)`,
        }}
        onClick={() => changeSelectedImages("topLeft")}
      >
        <Image
          className={`${styles.grid__image} ${styles.grid__image_horizontallyFlipped}`}
          url={url}
        />
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
          "--horizontalInversion": isHorizontallyFlipped.topRight
            ? `rotateY(180deg)`
            : `rotateY(0deg)`,
          "--verticalInversion": isVerticallyFlipped.topRight
            ? `rotateX(180deg)`
            : `rotateX(0deg)`,
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
          "--horizontalInversion": isHorizontallyFlipped.bottomLeft
            ? `rotateY(180deg)`
            : `rotateY(0deg)`,
          "--verticalInversion": isVerticallyFlipped.bottomLeft
            ? `rotateX(180deg)`
            : `rotateX(0deg)`,
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
          "--horizontalInversion": isHorizontallyFlipped.bottomRight
            ? `rotateY(180deg)`
            : `rotateY(0deg)`,
          "--verticalInversion": isVerticallyFlipped.bottomRight
            ? `rotateX(180deg)`
            : `rotateX(0deg)`,
        }}
        onClick={() => changeSelectedImages("bottomRight")}
      >
        <Image className={styles.grid__image} url={url} />
      </div>
    </div>
  );
};

export default Grid;
