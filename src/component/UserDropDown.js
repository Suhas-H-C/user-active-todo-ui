import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import "../css/UserDropDown.css";
import { UserDropDownContext } from "../context/UserDropDownContextProvider";

const UserDropDown = () => {
  const { state, setState, fetchUserDetails, setClientDashboard } =
    useContext(UserDropDownContext);

  useEffect(() => {
    (async () => {
      let response = await fetchUserDetails();
      let names = response.map((user) => user.name);
      setState((prev) => ({ ...prev, username: names }));
    })();
  }, []);

  const handleChange = (event, newValue) => {
    let showButton = newValue.length === 0 ? true : false;
    setState((prev) => {
      return { ...prev, selectedUser: newValue, isButtonDisabled: showButton };
    });
  };

  const storeUsers = () => {
    setClientDashboard({
      childPage: true,
      parentPage: false,
    });
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
        data-testid="user-dropdown-type-testid"
        renderInput={(params) => <TextField {...params} label="Select users" />}
      />
      <Button
        type="button"
        style={{ marginTop: 10 }}
        color="info"
        variant="contained"
        data-testid="send-button-type-testid"
        onClick={storeUsers}
        disabled={state.isButtonDisabled}
      >
        Send
      </Button>
    </div>
  );
};

export default UserDropDown;
