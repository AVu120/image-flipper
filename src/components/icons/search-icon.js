import React from "react";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import Tooltip from "@material-ui/core/Tooltip";

const SearchIcon = ({ color, tooltipLabel, onClick }) => {
  const disabled = tooltipLabel ? false : true;
  return (
    <div>
      <Tooltip disableHoverListener={disabled} title={tooltipLabel}>
        <ImageSearchIcon color={color} onClick={onClick} />
      </Tooltip>
    </div>
  );
};

export default SearchIcon;
