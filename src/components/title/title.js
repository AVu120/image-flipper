import React from "react";
import styles from "./title.module.css";
import HelpIcon from "@material-ui/icons/Help";
import Tooltip from "@material-ui/core/Tooltip";

const Title = () => {
  return (
    <div className={styles.title}>
      <h1 className={styles.title__text}>Image Flipper</h1>
      <Tooltip
        title={
          <div>
            <h3>Instructions:</h3>
            <p>
              1. Enter image url into bottom input and click DISPLAY button to
              display another image.
            </p>
            <p>
              2. Select one or multiple images by clicking on them (selected
              images will display in a pink border).
            </p>
            <p>
              3. Click on any of the action buttons in the right actions bar to
              perform that action on the selected images.
            </p>
          </div>
        }
      >
        <HelpIcon className={styles.title__helpIcon} />
      </Tooltip>
    </div>
  );
};

export default Title;
