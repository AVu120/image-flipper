import React from "react";
import TextField from "@material-ui/core/TextField";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import Button from "../common/button";
import Grid from "@material-ui/core/Grid";
import styles from "./url-input.module.css";

const UrlInput = ({ changeUrl, changeDisplayedUrl }) => {
  return (
    <div className={styles.urlInputContainer}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <ImageSearchIcon />
        </Grid>
        <Grid item>
          <TextField
            label="Image URL"
            onChange={changeUrl}
            InputProps={{
              style: {
                width: "300px",
              },
            }}
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
