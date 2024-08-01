import React, { createContext, useState } from "react";
import { URL } from "../constant/Constant";
import getUsers from "../service/DropDownService";
import { userInitialState, viewForAdmin } from "./InitialState";

export const UserDropDownContext = createContext();

const UserDropDownContextProvider = ({ children }) => {
  const [state, setState] = useState(userInitialState);
  const [clientDashboard, setClientDashboard] = useState(viewForAdmin);

  const fetchUserDetails = async () => {
    return await getUsers(URL);
  };

  return (
    <UserDropDownContext.Provider
      value={{
        state,
        setState,
        fetchUserDetails,
        clientDashboard,
        setClientDashboard,
      }}
    >
      {children}
    </UserDropDownContext.Provider>
  );
};

export default UserDropDownContextProvider;
