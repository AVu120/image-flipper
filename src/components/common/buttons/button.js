import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Overwrite in-built styling.
const useStyles = makeStyles({
  button: {
    // textTransform: "none",
    // fontSize: "",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: "1.7vh",
    padding: "0.5vh",
  },
});

const DisplayButton = ({ label, variant, color, className, onClick }) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant={variant}
        color={color}
        className={`${className} ${classes.button}`}
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
};

export default DisplayButton;
