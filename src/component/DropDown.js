import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const DropDown = ({ label, options, value, onChange }) => {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
      isOptionEqualToValue={(option, value) => option.value === value.value}
    />
  );
};

export default DropDown;
