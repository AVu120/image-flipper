import React from "react";
import TextField from "@material-ui/core/TextField";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import Grid from "@material-ui/core/Grid";
import styles from "./url-input.module.css";

const UrlInput = ({ changeUrl }) => {
  return (
    <div className={styles.urlInputContainer}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <ImageSearchIcon />
        </Grid>
        <Grid item>
          <TextField label="Image URL" onChange={changeUrl} />
        </Grid>
      </Grid>
    </div>
  );
};

export default UrlInput;
