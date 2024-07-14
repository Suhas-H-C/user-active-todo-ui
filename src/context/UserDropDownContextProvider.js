import React, { createContext, useState } from "react";
import getUsers from "../service/DropDownService";
import { userInitialState } from "./InitialState";
import { URL } from "../constant/Constant";

export const UserDropDownContext = createContext();

const UserDropDownContextProvider = ({ children }) => {
  const [state, setState] = useState(userInitialState);

  const fetchUserDetails = async () => {
    return await getUsers(URL);
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
