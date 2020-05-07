import React from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const ResetIcon = ({ color, tooltipLabel, onClick, buttonSize, style }) => {
  const disabled = tooltipLabel ? false : true;
  return (
    <div>
      <IconButton size={buttonSize}>
        <Tooltip disableHoverListener={disabled} title={tooltipLabel}>
          <RefreshIcon color={color} onClick={onClick} style={style} />
        </Tooltip>
      </IconButton>
    </div>
  );
};

export default ResetIcon;
