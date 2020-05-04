import React from "react";

const Image = ({ imageClassName, borderClassName, url, onClick, alt }) => {
  return (
    <div className={borderClassName} onClick={onClick}>
      <img src={url} className={imageClassName} alt={alt} />
    </div>
  );
};

export default Image;
