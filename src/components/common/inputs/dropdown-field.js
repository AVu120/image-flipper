import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import * as style from "../../actions-bar/actions-bar.style";

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: "relative",
        "& $notchedOutline": {
          borderColor: "rgba(0, 0, 0, 0.23)",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: style.actionColor,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
        },
        "&$focused $notchedOutline": {
          borderColor: style.actionColor,
          borderWidth: 1,
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: style.actionColor,
        },
        fontSize: 13,
      },
    },
    inputRoot: {
      height: "300px",
    },
  },
});

const useStyles = makeStyles({
  root: {
    height: "1000px",
  },
});

export default function DropDownField({ style, size, options, onChange }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        id="auto-dropdown"
        options={options}
        getOptionLabel={(option) => option.title}
        onChange={onChange}
        size={size}
        style={style}
        renderInput={(params) => (
          <TextField {...params} label="Filters:" variant="outlined" />
        )}
      />
    </ThemeProvider>
  );
}
