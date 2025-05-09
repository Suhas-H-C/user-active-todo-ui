import { Button } from "@mui/material";
import React, { useContext } from "react";
import { UserDropDownContext } from "../context/UserDropDownContextProvider";

const BackNavigationButton = ({ name }) => {
  const { setClientDashboard } = useContext(UserDropDownContext);

  const handleNavigation = () => {
    setClientDashboard({
      childPage: false,
      parentPage: true,
    });
  };

  return (
    <Button
      type="button"
      style={{ marginTop: 10 }}
      color="info"
      variant="contained"
      data-testid="back-button-type-testid"
      onClick={handleNavigation}
    >
      Back
    </Button>
  );
};

export default BackNavigationButton;
