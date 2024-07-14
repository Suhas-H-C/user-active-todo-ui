import "./App.css";
import UserDropDown from "./component/UserDropDown";
import UserDropDownContextProvider from "./context/UserDropDownContextProvider";

function App() {
  return (
    <UserDropDownContextProvider>
      <UserDropDown />
    </UserDropDownContextProvider>
  );
}

export default App;
