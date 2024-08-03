import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React, { act } from "react";
import ClientDashboard from "../../component/ClientDashboard";
import UserDropDownContextProvider, {
  UserDropDownContext,
} from "../../context/UserDropDownContextProvider";
import * as ApiConfig from "../../service/ApiFetchConfig";
import { CLIENT_DASHBOARD_CONTEXT, todos } from "../utils/TestUtils";

describe("Tests for Client Dashboard component", () => {
  it("should render client component with greetings for provided name with data grid", async () => {
    render(
      <UserDropDownContext.Provider value={CLIENT_DASHBOARD_CONTEXT}>
        <ClientDashboard name={CLIENT_DASHBOARD_CONTEXT.names} />
      </UserDropDownContext.Provider>
    );

    const message = screen.getByText(/Welcome John and others/i);
    const userId = screen.getByText("User ID");
    const Id = screen.getByText("ID");
    const title = screen.getByText("Title");
    const completed = screen.getByText("Completed");

    expect(message).toBeInTheDocument();
    expect(CLIENT_DASHBOARD_CONTEXT.fetchGridData).toHaveBeenCalled();
    expect(userId).toBeInTheDocument();
    expect(Id).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(completed).toBeInTheDocument();
  });

  it("user should see a row on the data grid when component is rendered", async () => {
    ApiConfig.fetchResponse = jest.fn().mockResolvedValue({
      data: todos,
    });

    await act(async () => {
      render(
        <UserDropDownContextProvider>
          <ClientDashboard name={CLIENT_DASHBOARD_CONTEXT.names} />
        </UserDropDownContextProvider>
      );
    });

    await waitFor(() => {
      const title = screen.getByRole("gridcell", {
        name: /delectus aut autem/i,
      });
      expect(title).toBeInTheDocument();
    });

    await waitFor(() => {
      const completed = screen.getByRole("gridcell", {
        name: /false/i,
      });
      expect(completed).toBeInTheDocument();
    });
  });
});
