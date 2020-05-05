import React from "react";
import TextField from "@material-ui/core/TextField";

const TextFieldComponent = ({
  label,
  onChange,
  inputProps,
  inputLabelProps,
  variant,
  type,
  color,
  value,
}) => {
  return (
    <div>
      <TextField
        value={value}
        label={label}
        onChange={onChange}
        InputProps={{
          style: inputProps,
        }}
        InputLabelProps={{ style: inputLabelProps }}
        variant={variant}
        type={type}
        color={color}
      />
    </div>
  );
};

export default TextFieldComponent;
