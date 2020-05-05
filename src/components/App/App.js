import React, { useState } from "react";
import styles from "./App.module.css";
import Title from "../title/title";
import Grid from "../grid/grid";
import ActionsBar from "../actions-bar/actions-bar";
import UrlInput from "../url-input/url-input";

function App() {
  const [selectedUrl, setSelectedUrl] = useState(
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TdPokmDzMQVHdyG_6-iNrwHaFj%26pid%3DApi&f=1"
  );
  const [displayedUrl, setDisplayedUrl] = useState(
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TdPokmDzMQVHdyG_6-iNrwHaFj%26pid%3DApi&f=1"
  );
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
  const [filters, setFilters] = useState({
    topLeft: "none",
    topRight: "none",
    bottomLeft: "none",
    bottomRight: "none",
  });
  const [selectedImages, setSelectedImages] = useState([]);

  /* Functions related to image url input. */
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

  /* Methods related to actions */
  const changeDegrees = (event) => setDegrees(event.target.value);

  /* Generic function that will be later used to change various image states. */
  const changeState = (
    setState,
    newTopLeftState,
    newTopRightState,
    newBottomLeftState,
    newBottomRightState,
    originalState
  ) =>
    setState({
      topLeft:
        selectedImages && selectedImages.includes("topLeft")
          ? newTopLeftState
          : originalState.topLeft,
      topRight:
        selectedImages && selectedImages.includes("topRight")
          ? newTopRightState
          : originalState.topRight,
      bottomLeft:
        selectedImages && selectedImages.includes("bottomLeft")
          ? newBottomLeftState
          : originalState.bottomLeft,
      bottomRight:
        selectedImages && selectedImages.includes("bottomRight")
          ? newBottomRightState
          : originalState.bottomRight,
    });

  const changeRotation = () => {
    if (selectedImages.length > 0) {
      if (degrees && degrees > -360 && degrees < 360)
        changeState(setRotation, degrees, degrees, degrees, degrees, rotation);
      else alert("Please enter a number between 0 and 360.");
    } else alert("Please select an image first.");
  };

  const changeIsHorizontallyFlipped = () => {
    if (selectedImages.length > 0)
      changeState(
        setIsHorizontallyFlipped,
        !isHorizontallyFlipped.topLeft,
        !isHorizontallyFlipped.topRight,
        !isHorizontallyFlipped.bottomLeft,
        !isHorizontallyFlipped.bottomRight,
        isHorizontallyFlipped
      );
    else alert("Please select an image first.");
  };

  const changeIsVerticallyFlipped = () => {
    if (selectedImages.length > 0)
      changeState(
        setIsVerticallyFlipped,
        !isVerticallyFlipped.topLeft,
        !isVerticallyFlipped.topRight,
        !isVerticallyFlipped.bottomLeft,
        !isVerticallyFlipped.bottomRight,
        isVerticallyFlipped
      );
    else alert("Please select an image first.");
  };

  const resetAppState = () => {
    if (selectedImages.length > 0) {
      changeState(setRotation, 0, 0, 0, 0, rotation);
      changeState(
        setIsHorizontallyFlipped,
        false,
        false,
        false,
        false,
        isHorizontallyFlipped
      );
      changeState(
        setIsVerticallyFlipped,
        false,
        false,
        false,
        false,
        isVerticallyFlipped
      );
      changeState(setFilters, "None", "None", "None", "None", filters);
    } else alert("Please select an image first.");
  };

  const changeFilters = (event, value) => {
    if (selectedImages.length > 0) {
      if (value && value.title !== null) {
        const newFilter = value.title;
        changeState(
          setFilters,
          newFilter,
          newFilter,
          newFilter,
          newFilter,
          filters
        );
      }
    } else alert("Please select an image first.");
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
          filters={filters}
        />
        <ActionsBar
          changeDegrees={changeDegrees}
          changeRotation={changeRotation}
          changeIsHorizontallyFlipped={changeIsHorizontallyFlipped}
          changeIsVerticallyFlipped={changeIsVerticallyFlipped}
          resetAppState={resetAppState}
          changeFilters={changeFilters}
        />
      </div>
      <UrlInput
        changeUrl={changeUrl}
        changeDisplayedUrl={changeDisplayedUrl}
        displayedUrl={displayedUrl}
      />
    </div>
  );
}

export default App;
