import React, { useState } from "react";
import styles from "./app.module.css";
import Title from "../title/title";
import Grid from "../grid/grid";
import ActionsBar from "../actions-bar/actions-bar";
import UrlInput from "../url-input/url-input";

function App() {
  const [selectedUrl, setSelectedUrl] = useState("");
  const [displayedUrl, setDisplayedUrl] = useState("");
  const [degrees, setDegrees] = useState(null);
  const [rotation, setRotation] = useState({
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  });
  const [selectedImages, setSelectedImages] = useState([]);

  const changeDegrees = (event) => setDegrees(event.target.value);
  const changeRotation = () => {
    if (degrees && degrees < 360)
      setRotation({
        topLeft:
          selectedImages && selectedImages.includes("topLeft")
            ? degrees
            : rotation.topLeft,
        topRight:
          selectedImages && selectedImages.includes("topRight")
            ? degrees
            : rotation.topRight,
        bottomLeft:
          selectedImages && selectedImages.includes("bottomLeft")
            ? degrees
            : rotation.bottomLeft,
        bottomRight:
          selectedImages && selectedImages.includes("bottomRight")
            ? degrees
            : rotation.bottomRight,
      });
    else alert("Please enter a number between 0 and 360.");
  };

  const changeUrl = (event) => setSelectedUrl(event.target.value);
  const changeDisplayedUrl = () => {
    if (selectedUrl.replace(/\s/g, "").length > 0) setDisplayedUrl(selectedUrl);
    else alert("Please enter an image url before clicking DISPLAY.");
  };

  const changeSelectedImages = (newSelection) => {
    let currentlySelectedImages = selectedImages;
    if (currentlySelectedImages.includes(newSelection)) {
      currentlySelectedImages = currentlySelectedImages.filter(
        (_) => _ !== newSelection
      );
    } else {
      currentlySelectedImages = currentlySelectedImages.concat(newSelection);
    }
    setSelectedImages(currentlySelectedImages);
  };

  return (
    <div className={styles.app}>
      <Title />
      <div className={styles.app__gridActionsBarContainer}>
        <Grid
          url={displayedUrl}
          rotation={rotation}
          changeSelectedImages={changeSelectedImages}
          selectedImages={selectedImages}
        />
        <ActionsBar
          changeDegrees={changeDegrees}
          changeRotation={changeRotation}
        />
      </div>
      <UrlInput changeUrl={changeUrl} changeDisplayedUrl={changeDisplayedUrl} />
    </div>
  );
}

export default App;
