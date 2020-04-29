import React from "react";
import styles from "./app.module.css";
import Grid from "../grid/grid";

function App() {
  return (
    <div className={styles.app}>
      <h1>Image Flipper</h1>
      <Grid />
    </div>
  );
}

export default App;
