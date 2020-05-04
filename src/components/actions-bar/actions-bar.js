import React from "react";
import NumberField from "../common/inputs/text-field";
import RotateClockwiseIcon from "../icons/rotate-clockwise-icon";
import HorizontalFlipIcon from "../icons/horizontal-flip-icon";
import VerticalFlipIcon from "../icons/vertical-flip-icon";
import ResetIcon from "../icons/reset-icon";
import Filters from "../common/inputs/dropdown-field";
import * as style from "./actions-bar.style";
import styles from "./actions-bar.module.css";

const ActionsBar = ({
  changeDegrees,
  changeRotation,
  changeIsHorizontallyFlipped,
  changeIsVerticallyFlipped,
  resetAppState,
  changeFilters,
}) => {
  return (
    <div className={styles.actionsBar}>
      <h3 className={styles.actionsBar__title}>Actions</h3>
      <div className={styles.actionsBar__numberField}>
        <NumberField
          label="Degrees:"
          variant="standard"
          inputProps={{ fontSize: "15px", width: "45px" }}
          inputLabelProps={{ fontSize: "10px" }}
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
      <div className={styles.actionsBar__horizontalFlipIcon}>
        <HorizontalFlipIcon
          color="secondary"
          tooltipLabel="Flip horizontally"
          onClick={changeIsHorizontallyFlipped}
        />
      </div>
      <div className={styles.actionsBar__verticalFlipIcon}>
        <VerticalFlipIcon
          color="secondary"
          tooltipLabel="Flip vertically"
          onClick={changeIsVerticallyFlipped}
        />
      </div>
      <div className={styles.actionBar__resetIcon}>
        <ResetIcon
          color="secondary"
          tooltipLabel="Reset to original settings"
          onClick={resetAppState}
        />
      </div>
      <div className={styles.actionBar__filters}>
        <Filters
          options={style.filters}
          style={{ width: "auto" }}
          onChange={changeFilters}
        />
      </div>
    </div>
  );
};

export default ActionsBar;
