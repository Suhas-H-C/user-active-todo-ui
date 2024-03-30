import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../css/UserDropDown.css";

const UserDropDown = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [state, setState] = useState({
    username: [],
    selectedUser: [],
    isButtonDisabled: true,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        let names = result.map((user) => user.name);
        setState((prev) => {
          return { ...prev, username: names };
        });
      })
      .catch((err) => console.warn(err));
  }, [url]);

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
        id="username"
        options={state.username}
        value={state.selectedUser}
        sx={{ width: 900 }}
        onChange={handleChange}
        data-testid="my-user-dropdown"
        renderInput={(params) => <TextField {...params} label="Select users" />}
      />
      <Button
        type="button"
        style={{ marginTop: 10 }}
        color="success"
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
