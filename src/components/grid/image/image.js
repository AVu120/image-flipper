import React from "react";

const Image = ({ className, url, onClick, alt }) => {
  return (
    <div onClick={onClick}>
      <img src={url} className={className} alt={alt} />
    </div>
  );
};

export default Image;
