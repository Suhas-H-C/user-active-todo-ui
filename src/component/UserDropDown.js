import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../css/UserDropDown.css";
import getUsers from "../service/DropDownService";

const UserDropDown = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [state, setState] = useState({
    username: [],
    selectedUser: [],
    isButtonDisabled: true,
  });

  getUsers(url, setState);

  const handleChange = (event, newValue) => {
    let showButton = newValue.length === 0 ? true : false;
    setState((prev) => {
      return { ...prev, selectedUser: newValue, isButtonDisabled: showButton };
    });
  };

  const storeUsers = () => {
    //TODO - can further call backend API with the logged payload
    console.log(state);
  };

  return (
    <div className="dropdown">
      <Autocomplete
        multiple
        limitTags={1}
        id="username"
        options={state.username}
        value={state.selectedUser}
        sx={{ width: 500 }}
        onChange={handleChange}
        data-testid="my-user-dropdown"
        renderInput={(params) => <TextField {...params} label="Select users" />}
      />
      <Button
        type="button"
        style={{ marginTop: 10 }}
        color="info"
        variant="contained"
        data-testid="send-button"
        onClick={storeUsers}
        disabled={state.isButtonDisabled}
      >
        Send
      </Button>
    </div>
  );
};

export default UserDropDown;
