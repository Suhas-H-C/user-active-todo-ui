import React, { createContext, useState } from "react";
import getUsers from "../service/DropDownService";
import { userInitialState } from "./InitialState";
import { URL } from "../constant/Constant";

export const UserDropDownContext = createContext();

const UserDropDownContextProvider = ({ children }) => {
  const [state, setState] = useState(userInitialState);

  const fetchUserDetails = async () => {
    try {
      const response = await getUsers(URL).json();
      const names = response.map((user) => user.name);
      setState((prev) => ({ ...prev, username: names }));
    } catch (error) {
      console.error("Failed fetching users data:", error);
    }
  };

  return (
    <UserDropDownContext.Provider
      value={{
        state,
        setState,
        fetchUserDetails,
      }}
    >
      {children}
    </UserDropDownContext.Provider>
  );
};

export default UserDropDownContextProvider;
