import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import RotateRightIcon from "@material-ui/icons/RotateRight";

const RotateClockwiseIcon = ({ color, tooltipLabel, onClick }) => {
  const disabled = tooltipLabel ? false : true;
  return (
    <div>
      <Tooltip disableHoverListener={disabled} title={tooltipLabel}>
        <RotateRightIcon color={color} onClick={onClick} />
      </Tooltip>
    </div>
  );
};

export default RotateClockwiseIcon;
