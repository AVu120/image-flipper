import React, { useState } from "react";
import styles from "./image.module.css";

const Image = ({ className }) => {
  const [position, setPosition] = useState("");

  return (
    <div className={className}>
      <img
        src="https://www.zoossa.com.au/wp-content/uploads/2016/01/eNewsMTRhino-960x620.jpg"
        alt="No Image available. Please enter another image url below and click DISPLAY."
      />
    </div>
  );
};

export default Image;
