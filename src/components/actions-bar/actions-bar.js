import React from "react";
import NumberField from "../common/text-field";
import RotateClockwiseIcon from "../icons/rotate-clockwise-icon";
import styles from "./actions-bar.module.css";

const ActionsBar = ({ changeDegrees, changeRotation }) => {
  return (
    <div className={styles.actionsBar}>
      <h3 className={styles.actionsBar__title}>Actions</h3>
      <div className={styles.actionsBar__numberField}>
        <NumberField
          label="Degrees:"
          variant="standard"
          inputProps={{ fontSize: "15px", width: "50px" }}
          inputLabelProps={{ fontSize: "12px" }}
          onChange={changeDegrees}
          type="number"
          color="secondary"
        />
        <div className={styles.actionsBar__rotateIcon}>
          <RotateClockwiseIcon
            color="secondary"
            tooltipLabel="Rotate clockwise"
            onClick={changeRotation}
          />
        </div>
      </div>
    </div>
  );
};

export default ActionsBar;
