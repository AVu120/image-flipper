import React from "react";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const VerticalFlipIcon = ({
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
          <ImportExportIcon color={color} onClick={onClick} style={style} />
        </Tooltip>
      </IconButton>
    </div>
  );
};

export default VerticalFlipIcon;
