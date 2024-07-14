import { act, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import UserDropDown from "../component/UserDropDown";
import { UserDropDownContext } from "../context/UserDropDownContextProvider";
import { MOCK_VALUE_USER_DROP_DOWN } from "./utils/mocks/Mocks";

describe("Tests for User Dropdown component", () => {
  it("should render user drop down component", async () => {
    await act(async () => {
      render(
        <UserDropDownContext.Provider value={MOCK_VALUE_USER_DROP_DOWN}>
          <UserDropDown />
        </UserDropDownContext.Provider>
      );
    });

    await waitFor(() => {
      const getDropDown = screen.getByTestId("user-dropdown-type-testid");
      expect(getDropDown).toBeInTheDocument();
    });
  });

  // it("user should be able to see options when clicked", async () => {
  //   await act(async () => {
  //     render(
  //       <UserDropDownContext.Provider value={MOCK_VALUE_USER_DROP_DOWN}>
  //         <UserDropDown />
  //       </UserDropDownContext.Provider>
  //     );
  //   });

  //   screen.logTestingPlaygroundURL();
  //   await waitFor(() => {
  //     userEvent.click(screen.getByRole("combobox", { name: /select users/i }));
  //   });

  //   screen.logTestingPlaygroundURL();
  //   await waitFor(() => {
  //     const option = screen.getByText(
  //       MOCK_VALUE_USER_DROP_DOWN.state.username[0].name
  //     );
  //     expect(option).toBeInTheDocument();
  //   });
  // });
});
