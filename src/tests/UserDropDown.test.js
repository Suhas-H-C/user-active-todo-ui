import { act, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import UserDropDown from "../component/UserDropDown";
import UserDropDownContextProvider, {
  UserDropDownContext,
} from "../context/UserDropDownContextProvider";
import getUsers from "../service/DropDownService";
import { users } from "./utils/data/TestUtils";
import { MOCK_VALUE_USER_DROP_DOWN } from "./utils/mocks/Mocks";

jest.mock("../service/DropDownService");

describe("Tests for User Dropdown component", () => {
  getUsers.mockResolvedValue({
    data: users,
  });

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
});
