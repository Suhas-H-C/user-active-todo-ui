import React, { useState } from "react";
import { Button } from "@mui/material";
import DropDown from "./DropDown";

const Generic = () => {
  const [dropdown1Value, setDropdown1Value] = useState(null);
  const [dropdown2Value, setDropdown2Value] = useState(null);

  const options1 = [
    { value: "option1_1", label: "Option 1-1" },
    { value: "option1_2", label: "Option 1-2" },
  ];

  const options2 = [
    { value: "option2_1", label: "Option 2-1" },
    { value: "option2_2", label: "Option 2-2" },
  ];

  const isButtonEnabled = dropdown1Value !== null && dropdown2Value !== null;

  return (
    <div>
      <DropDown
        label="Dropdown 1"
        options={options1}
        value={dropdown1Value}
        onChange={setDropdown1Value}
      />
      <DropDown
        label="Dropdown 2"
        options={options2}
        value={dropdown2Value}
        onChange={setDropdown2Value}
      />
      <Button variant="contained" color="primary" disabled={!isButtonEnabled}>
        Submit
      </Button>
    </div>
  );
};

export default Generic;
