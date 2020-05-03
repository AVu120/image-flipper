import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup({
  values,
  groupName,
  title,
  onChange,
}) {
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  const capitalizeFirstLetter = (value) =>
    value.charAt(0).toUpperCase() + value.slice(1);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{title}</FormLabel>
      <RadioGroup
        aria-label={groupName}
        name={`${groupName}1`}
        onChange={onChange}
      >
        {values.map((value) => (
          <FormControlLabel
            value={value}
            control={<Radio size="small" />}
            label={capitalizeFirstLetter(value)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
