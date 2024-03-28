import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const UserDropDown = () => {
  const [username, setUsername] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        let names = result.map((user) => user.name);
        setUsername(names);
      })
      .catch((err) => console.warn(err));
  }, [url]);

  const handleChange = (event, newValue) => {
    setSelectedUser(newValue);
    setButtonDisabled(newValue.length === 0 ? true : false);
  };

  const storeUsers = () => {
    console.log(selectedUser);
  };

  return (
    <div>
      <Autocomplete
        multiple
        id="username"
        options={username}
        value={selectedUser}
        sx={{ width: 900 }}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} label="Select users" />}
      />
      <Button
        type="button"
        color="success"
        variant="contained"
        onClick={storeUsers}
        disabled={isButtonDisabled}
      >
        Send
      </Button>
    </div>
  );
};

export default UserDropDown;
