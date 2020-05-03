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
  const [isHorizontallyFlipped, setIsHorizontallyFlipped] = useState({
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
  });
  const [isVerticallyFlipped, setIsVerticallyFlipped] = useState({
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
  });
  const [selectedImages, setSelectedImages] = useState([]);

  const changeDegrees = (event) => setDegrees(event.target.value);
  const changeRotation = () => {
    if (selectedImages.length > 0) {
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
    } else alert("Please select an image first.");
  };

  const changeUrl = (event) => setSelectedUrl(event.target.value);
  const changeDisplayedUrl = () => {
    if (selectedUrl.replace(/\s/g, "").length > 0) setDisplayedUrl(selectedUrl);
    else alert("Please enter an image url before clicking DISPLAY.");
  };

  const changeSelectedImages = (newSelection) => {
    let currentlySelectedImages;
    if (selectedImages.includes(newSelection)) {
      currentlySelectedImages = selectedImages.filter(
        (_) => _ !== newSelection
      );
    } else {
      currentlySelectedImages = selectedImages.concat(newSelection);
    }
    setSelectedImages(currentlySelectedImages);
  };

  const flipImage = (setState, state) => {
    setState({
      topLeft:
        selectedImages && selectedImages.includes("topLeft")
          ? !state.topLeft
          : state.topLeft,
      topRight:
        selectedImages && selectedImages.includes("topRight")
          ? !state.topRight
          : state.topRight,
      bottomLeft:
        selectedImages && selectedImages.includes("bottomLeft")
          ? !state.bottomLeft
          : state.bottomLeft,
      bottomRight:
        selectedImages && selectedImages.includes("bottomRight")
          ? !state.bottomRight
          : state.bottomRight,
    });
  };

  const changeIsHorizontallyFlipped = () => {
    flipImage(setIsHorizontallyFlipped, isHorizontallyFlipped);
  };
  const changeIsVerticallyFlipped = () => {
    flipImage(setIsVerticallyFlipped, isVerticallyFlipped);
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
          isHorizontallyFlipped={isHorizontallyFlipped}
          isVerticallyFlipped={isVerticallyFlipped}
        />
        <ActionsBar
          changeDegrees={changeDegrees}
          changeRotation={changeRotation}
          changeIsHorizontallyFlipped={changeIsHorizontallyFlipped}
          changeIsVerticallyFlipped={changeIsVerticallyFlipped}
        />
      </div>
      <UrlInput changeUrl={changeUrl} changeDisplayedUrl={changeDisplayedUrl} />
    </div>
  );
}

export default App;
