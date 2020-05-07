import React from "react";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const HorizontalFlipIcon = ({
  color,
  tooltipLabel,
  onClick,
  buttonSize,
  style,
}) => {
  const disabled = tooltipLabel ? false : true;
  return (
    <div>
      <IconButton size={buttonSize}>
        <Tooltip disableHoverListener={disabled} title={tooltipLabel}>
          <SyncAltIcon color={color} onClick={onClick} style={style} />
        </Tooltip>
      </IconButton>
    </div>
  );
};

export default HorizontalFlipIcon;
