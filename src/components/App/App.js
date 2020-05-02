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

  const changeDegrees = (event) => setDegrees(event.target.value);
  const changeRotation = () => {
    if (degrees && degrees < 360)
      setRotation({
        topLeft: degrees,
        topRight: degrees,
        bottomLeft: degrees,
        bottomRight: degrees,
      });
    else alert("Please enter a number between 0 and 360.");
  };

  const changeUrl = (event) => setSelectedUrl(event.target.value);
  const changeDisplayedUrl = () => {
    if (selectedUrl.replace(/\s/g, "").length > 0) setDisplayedUrl(selectedUrl);
    else alert("Please enter an image url before clicking DISPLAY.");
  };

  return (
    <div className={styles.app}>
      <Title />
      <div className={styles.app__gridActionsBarContainer}>
        <Grid url={displayedUrl} rotation={rotation} />
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
