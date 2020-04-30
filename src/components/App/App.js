import React, { useState } from "react";
import styles from "./app.module.css";
import Title from "../title/title";
import Grid from "../grid/grid";
import UrlInput from "../url-input/url-input";

function App() {
  const [selectedUrl, setSelectedUrl] = useState("");
  const [displayedUrl, setDisplayedUrl] = useState("");

  const changeUrl = (event) => setSelectedUrl(event.target.value);
  const changeDisplayedUrl = () => {
    if (selectedUrl.replace(/\s/g, "").length > 0) setDisplayedUrl(selectedUrl);
    else alert("Please enter an image url before clicking DISPLAY.");
  };

  return (
    <div className={styles.app}>
      <Title />
      <Grid url={displayedUrl} />
      <UrlInput changeUrl={changeUrl} changeDisplayedUrl={changeDisplayedUrl} />
    </div>
  );
}

export default App;
