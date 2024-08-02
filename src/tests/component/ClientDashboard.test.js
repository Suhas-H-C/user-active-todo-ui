import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import ClientDashboard from "../../component/ClientDashboard";
import { UserDropDownContext } from "../../context/UserDropDownContextProvider";
import { CLIENT_DASHBOARD_CONTEXT } from "../utils/TestUtils";

describe("Tests for Client Dashboard component", () => {
  it("should render client component with greetings for provided name", async () => {
    render(
      <UserDropDownContext.Provider value={CLIENT_DASHBOARD_CONTEXT}>
        <ClientDashboard name={CLIENT_DASHBOARD_CONTEXT.names} />
      </UserDropDownContext.Provider>
    );

    const message = screen.getByText(/Welcome John and others/i);
    expect(message).toBeInTheDocument();
    expect(CLIENT_DASHBOARD_CONTEXT.fetchGridData).toHaveBeenCalled();
  });
});
