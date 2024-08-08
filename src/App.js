import { useContext } from "react";
import "./App.css";
import ClientDashboard from "./component/ClientDashboard";
import UserDropDown from "./component/UserDropDown";
import { UserDropDownContext } from "./context/UserDropDownContextProvider";

function App() {
  const { state, clientDashboard } = useContext(UserDropDownContext);

  return clientDashboard.parentPage ? (
    <UserDropDown />
  ) : (
    <ClientDashboard name={state.selectedUser} />
  );
}

export default App;
