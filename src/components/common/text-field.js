import React from "react";
import TextField from "@material-ui/core/TextField";

const TextFieldComponent = ({ label, onChange, inputProps }) => {
  return (
    <div>
      <TextField
        label={label}
        onChange={onChange}
        InputProps={{
          style: inputProps,
        }}
      />
    </div>
  );
};

export default TextFieldComponent;
