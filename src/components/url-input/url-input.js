import React from "react";
import TextField from "../common/inputs/text-field";
import SearchIcon from "../icons/search-icon";
import Button from "../common/buttons/button";
import Grid from "@material-ui/core/Grid";
import styles from "./url-input.module.css";

const UrlInput = ({ changeUrl, changeDisplayedUrl }) => {
  return (
    <div className={styles.urlInputContainer}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>{/* <SearchIcon /> */}</Grid>
        <Grid item>
          <TextField
            label="Enter image URL:"
            onChange={changeUrl}
            inputProps={{ width: "300px" }}
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
