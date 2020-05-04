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
  filters,
}) => {
  // Generate each image's style object based on props.
  const modifyImage = (
    degrees,
    gridPosition,
    horizontallyFlipped,
    verticallyFlipped,
    filters
  ) => {
    return {
      "--rotation": `rotate(${degrees}deg)`,
      "--border": `${
        selectedImages.includes(gridPosition)
          ? style.selectedImageBorder
          : style.nonSelectedImageBorder
      }`,
      "--horizontalInversion": `${
        horizontallyFlipped ? `rotateY(180deg)` : `rotateY(0deg)`
      }`,
      "--verticalInversion": `${
        verticallyFlipped ? `rotateX(180deg)` : `rotateX(0deg)`
      }`,
      "--filter":
        filters === "None"
          ? "none"
          : filters === "Blur"
          ? "blur(5px)"
          : filters === "Brightness"
          ? "brightness(200%)"
          : filters === "Dark-Contrast"
          ? "contrast(200%)"
          : filters === "Drop-shadow"
          ? "drop-shadow(8px 8px 10px gray)"
          : filters === "Grayscale"
          ? "grayscale(100%)"
          : filters === "Hue-rotate"
          ? "hue-rotate(90deg)"
          : filters === "Invert"
          ? "invert(100%)"
          : filters === "Opacity"
          ? "opacity(30%)"
          : filters === "Saturate"
          ? "saturate(8)"
          : filters === "Sepia"
          ? "sepia(100%)"
          : filters === "Bright-Contrast"
          ? "contrast(200%) brightness(150%)"
          : "none",
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
          isVerticallyFlipped.topLeft,
          filters.topLeft
        )}
      >
        <Image
          imageClassName={`${styles.grid__image} ${styles.grid__image_horizontallyFlipped}`}
          borderClassName={styles.grid__image_selected}
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
          isVerticallyFlipped.topRight,
          filters.topRight
        )}
      >
        <Image
          imageClassName={styles.grid__image}
          borderClassName={styles.grid__image_selected}
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
          isVerticallyFlipped.bottomLeft,
          filters.bottomLeft
        )}
      >
        <Image
          imageClassName={styles.grid__image}
          borderClassName={styles.grid__image_selected}
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
          isVerticallyFlipped.bottomRight,
          filters.bottomRight
        )}
      >
        <Image
          imageClassName={styles.grid__image}
          borderClassName={styles.grid__image_selected}
          url={url}
          onClick={() => changeSelectedImages("bottomRight")}
          alt={style.alt}
        />
      </div>
    </div>
  );
};

export default Grid;
