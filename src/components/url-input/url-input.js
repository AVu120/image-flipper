import React from "react";
import TextField from "../common/inputs/text-field";
import Button from "../common/buttons/button";
import Grid from "@material-ui/core/Grid";
import styles from "./url-input.module.css";

const UrlInput = ({ changeSelectedUrl, changeDisplayedUrl, selectedUrl }) => {
  return (
    <div className={styles.urlInputContainer}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <TextField
            label="Enter image URL:"
            onChange={changeSelectedUrl}
            inputProps={{ height: "20px", width: "25vw", fontSize: "1em" }}
            inputLabelProps={{ fontSize: "1em" }}
            value={selectedUrl}
            variant="standard"
            type="text"
            color="secondary"
          />
        </Grid>
      </Grid>
      <Button
        label="Display"
        variant="contained"
        color="secondary"
        className={styles.urlInputContainer__button}
        onClick={changeDisplayedUrl}
      />
    </div>
  );
};

export default UrlInput;
