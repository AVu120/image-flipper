import React from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
import Tooltip from "@material-ui/core/Tooltip";

const ResetIcon = ({ color, tooltipLabel, onClick }) => {
  const disabled = tooltipLabel ? false : true;
  return (
    <div>
      <Tooltip disableHoverListener={disabled} title={tooltipLabel}>
        <RefreshIcon color={color} onClick={onClick} />
      </Tooltip>
    </div>
  );
};

export default ResetIcon;
