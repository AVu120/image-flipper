import React, { useState } from "react";
import styles from "./app.module.css";
import Title from "../title/title";
import Grid from "../grid/grid";
import UrlInput from "../url-input/url-input";

function App() {
  const [url, setUrl] = useState("");

  const changeUrl = (event) => setUrl(event.target.value);

  return (
    <div className={styles.app}>
      <Title />
      <Grid url={url} />
      <UrlInput changeUrl={changeUrl} />
    </div>
  );
}

export default App;
