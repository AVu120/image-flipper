import React from "react";
import Filters from "../common/inputs/dropdown-field";
import NumberField from "../common/inputs/text-field";
import HorizontalFlipIcon from "../icons/horizontal-flip-icon";
import ResetIcon from "../icons/reset-icon";
import RotateClockwiseIcon from "../icons/rotate-clockwise-icon";
import VerticalFlipIcon from "../icons/vertical-flip-icon";
import styles from "./actions-bar.module.css";
import * as style from "./actions-bar.style";

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
      <div className={styles.actionBar__actionsContainer}>
        <h3 className={styles.actionsBar__title}>Actions</h3>
        <div className={styles.actionsBar__numberField}>
          <NumberField
            label="Degrees:"
            variant="standard"
            inputProps={{ fontSize: "1.5vh", width: "40px" }}
            inputLabelProps={{ fontSize: "1.1vh" }}
            onChange={changeDegrees}
            type="number"
            color="secondary"
          />
          <div className={styles.actionsBar__rotateIcon}>
            <RotateClockwiseIcon
              color="secondary"
              tooltipLabel="Rotate clockwise"
              onClick={changeRotation}
              buttonSize={style.iconButtonSize}
            />
          </div>
        </div>
        <div className={styles.actionsBar__horizontalFlipIcon}>
          <HorizontalFlipIcon
            color="secondary"
            tooltipLabel="Flip horizontally"
            onClick={changeIsHorizontallyFlipped}
            buttonSize={style.iconButtonSize}
          />
        </div>
        <div className={styles.actionsBar__verticalFlipIcon}>
          <VerticalFlipIcon
            color="secondary"
            tooltipLabel="Flip vertically"
            onClick={changeIsVerticallyFlipped}
            buttonSize={style.iconButtonSize}
          />
        </div>
        <div className={styles.actionBar__resetIcon}>
          <ResetIcon
            color="secondary"
            tooltipLabel="Reset to original settings"
            onClick={resetAppState}
            buttonSize={style.iconButtonSize}
          />
        </div>
        <div className={styles.actionBar__filters}>
          <Filters
            options={style.filters}
            style={{ width: "5.7vw" }}
            size="small"
            onChange={changeFilters}
          />
        </div>
      </div>
    </div>
  );
};

export default ActionsBar;
