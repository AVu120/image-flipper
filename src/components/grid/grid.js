import React from "react";
import Image from "./image/image";
import * as style from "./grid.style";
import styles from "./grid.module.css";

const Grid = ({
  url,
  rotation,
  changeSelectedImages,
  selectedImages,
  isHorizontallyFlipped,
  isVerticallyFlipped,
}) => {
  // Generate each image's style object based on props.
  const modifyImage = (
    degrees,
    gridPosition,
    horizontallyFlipped,
    verticallyFlipped
  ) => {
    return {
      "--rotation": `rotate(${degrees}deg)`,
      "--border": `${
        selectedImages.includes(gridPosition)
          ? style.selectedBorder
          : style.nonSelectedBorder
      }`,
      "--horizontalInversion": `${
        horizontallyFlipped ? `rotateY(180deg)` : `rotateY(0deg)`
      }`,
      "--verticalInversion": `${
        verticallyFlipped ? `rotateX(180deg)` : `rotateX(0deg)`
      }`,
    };
  };
  return (
    <div className={styles.grid}>
      <div
        className={styles.grid__imageBorder}
        style={modifyImage(
          rotation.topLeft,
          "topLeft",
          isHorizontallyFlipped.topLeft,
          isVerticallyFlipped.topLeft
        )}
      >
        <Image
          className={`${styles.grid__image} ${styles.grid__image_horizontallyFlipped}`}
          url={url}
          onClick={() => changeSelectedImages("topLeft")}
          alt={style.alt}
        />
      </div>
      <div
        className={styles.grid__imageBorder}
        style={modifyImage(
          rotation.topRight,
          "topRight",
          isHorizontallyFlipped.topRight,
          isVerticallyFlipped.topRight
        )}
      >
        <Image
          className={styles.grid__image}
          url={url}
          onClick={() => changeSelectedImages("topRight")}
          alt={style.alt}
        />
      </div>
      <div
        className={styles.grid__imageBorder}
        style={modifyImage(
          rotation.bottomLeft,
          "bottomLeft",
          isHorizontallyFlipped.bottomLeft,
          isVerticallyFlipped.bottomLeft
        )}
      >
        <Image
          className={styles.grid__image}
          url={url}
          onClick={() => changeSelectedImages("bottomLeft")}
          alt={style.alt}
        />
      </div>
      <div
        className={styles.grid__imageBorder}
        style={modifyImage(
          rotation.bottomRight,
          "bottomRight",
          isHorizontallyFlipped.bottomRight,
          isVerticallyFlipped.bottomRight
        )}
      >
        <Image
          className={styles.grid__image}
          url={url}
          onClick={() => changeSelectedImages("bottomRight")}
          alt={style.alt}
        />
      </div>
    </div>
  );
};

export default Grid;
