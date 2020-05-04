import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
  },
});

export default function DropDownField({ style, options, onChange }) {
  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        id="auto-dropdown"
        options={options}
        getOptionLabel={(option) => option.title}
        style={style}
        size="small"
        onChange={onChange}
        renderInput={(params) => (
          <TextField {...params} label="Filters:" variant="outlined" />
        )}
      />
    </ThemeProvider>
  );
}
