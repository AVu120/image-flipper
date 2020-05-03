import React from "react";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import Tooltip from "@material-ui/core/Tooltip";

const HorizontalFlipIcon = ({ color, tooltipLabel, onClick }) => {
  const disabled = tooltipLabel ? false : true;
  return (
    <div>
      <Tooltip disableHoverListener={disabled} title={tooltipLabel}>
        <SyncAltIcon color={color} onClick={onClick} />
      </Tooltip>
    </div>
  );
};

export default HorizontalFlipIcon;
