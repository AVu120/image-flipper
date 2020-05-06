import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import IconButton from "@material-ui/core/IconButton";

const RotateClockwiseIcon = ({ color, tooltipLabel, onClick, buttonSize }) => {
  const disabled = tooltipLabel ? false : true;
  return (
    <div>
      <IconButton size={buttonSize}>
        <Tooltip disableHoverListener={disabled} title={tooltipLabel}>
          <RotateRightIcon color={color} onClick={onClick} />
        </Tooltip>
      </IconButton>
    </div>
  );
};

export default RotateClockwiseIcon;
