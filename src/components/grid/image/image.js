import React, { useState } from "react";

const Image = ({ className, url }) => {
  return (
    <img
      src={url}
      className={className}
      alt="No Image available. Please enter another image url below and click DISPLAY."
    />
  );
};

export default Image;
