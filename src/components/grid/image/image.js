import React, { useState } from "react";
import styles from "./image.module.css";

const Image = ({ className, url }) => {
  const [position, setPosition] = useState("");

  return (
    <div className={className}>
      <img
        src={url}
        alt="No Image available. Please enter another image url below and click DISPLAY."
      />
    </div>
  );
};

export default Image;
