import { act, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import UserDropDown from "../component/UserDropDown";
import UserDropDownContextProvider from "../context/UserDropDownContextProvider";
import getUsers from "../service/DropDownService";
import { users } from "./utils/TestUtils";

describe("Tests for User Dropdown component", () => {
  getUsers = jest.fn().mockResolvedValue({
    data: users,
  });

  it("should render user drop down component", async () => {
    await act(async () => {
      render(
        <UserDropDownContextProvider>
          <UserDropDown />
        </UserDropDownContextProvider>
      );
    });

    await waitFor(() => {
      const getDropDown = screen.getByTestId("user-dropdown-type-testid");
      expect(getDropDown).toBeInTheDocument();
    });
  });
});
