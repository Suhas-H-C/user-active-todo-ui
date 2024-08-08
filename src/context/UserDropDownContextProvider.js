import React, { createContext, useState } from "react";
import { TODOS_ENDPOINT, USERS_ENDPOINT } from "../constant/Constant";
import getUsers, { getGridData } from "../service/DropDownService";
import { userInitialState, viewForAdmin } from "./InitialState";

export const UserDropDownContext = createContext();

const UserDropDownContextProvider = ({ children }) => {
  const [state, setState] = useState(userInitialState);
  const [clientDashboard, setClientDashboard] = useState(viewForAdmin);

  const fetchUserDetails = async () => {
    return await getUsers(USERS_ENDPOINT);
  };

  const fetchGridData = async () => {
    return await getGridData(TODOS_ENDPOINT);
  };

  return (
    <UserDropDownContext.Provider
      value={{
        state,
        setState,
        fetchUserDetails,
        fetchGridData,
        clientDashboard,
        setClientDashboard,
      }}
    >
      {children}
    </UserDropDownContext.Provider>
  );
};

export default UserDropDownContextProvider;
