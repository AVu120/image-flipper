import React from "react";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import Tooltip from "@material-ui/core/Tooltip";

const VerticalFlipIcon = ({ color, tooltipLabel, onClick }) => {
  const disabled = tooltipLabel ? false : true;
  return (
    <div>
      <Tooltip disableHoverListener={disabled} title={tooltipLabel}>
        <ImportExportIcon color={color} onClick={onClick} />
      </Tooltip>
    </div>
  );
};

export default VerticalFlipIcon;
