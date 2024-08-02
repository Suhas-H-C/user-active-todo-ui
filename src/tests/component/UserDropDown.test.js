import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import UserDropDown from "../../component/UserDropDown";
import UserDropDownContextProvider from "../../context/UserDropDownContextProvider";

describe("Tests for User Dropdown component", () => {
  it("should render user drop down component", async () => {
    await act(async () => {
      render(
        <UserDropDownContextProvider>
          <UserDropDown />
        </UserDropDownContextProvider>
      );
    });

    await waitFor(() => {
      const getDropDown = screen.getByRole("combobox", {
        name: /select users/i,
      });
      expect(getDropDown).toBeInTheDocument();
    });
  });
});
