import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import UserDropDown from "../../component/UserDropDown";
import UserDropDownContextProvider from "../../context/UserDropDownContextProvider";
import * as ApiConfig from "../../service/ApiFetchConfig";
import { users } from "../utils/TestUtils";

describe("Tests for User Dropdown component", () => {
  ApiConfig.fetchResponse = jest.fn().mockResolvedValue({
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
    await waitFor(() => expect(screen.getByRole("combobox", { name: /select users/i })).toBeInTheDocument());
  });

  it("should render user drop down component with disabled send button", async () => {
    await act(async () => {
      render(
        <UserDropDownContextProvider>
          <UserDropDown />
        </UserDropDownContextProvider>
      );
    });
    await waitFor(() => expect(screen.getByRole("button", { name: /send/i })).toBeDisabled());
  });

  it("user should see options from dropdown when component is rendered with mocked data", async () => {
    await act(async () => {
      render(
        <UserDropDownContextProvider>
          <UserDropDown />
        </UserDropDownContextProvider>
      );
    });
    await waitFor(() => userEvent.click(screen.getByRole("combobox", { name: /select users/i, })));
    await waitFor(() => expect(screen.getByRole("option")).toBeInTheDocument());
  });

  it("user should select an option which maked send button enabled", async () => {
    await act(async () => {
      render(
        <UserDropDownContextProvider>
          <UserDropDown />
        </UserDropDownContextProvider>
      );
    });
    await waitFor(() => userEvent.click(screen.getByRole("combobox", { name: /select users/i })));
    await waitFor(() => userEvent.click(screen.getByRole("option", { name: /leanne graham/i })));
    await waitFor(() => {
      const button = screen.getByRole("button", { name: /send/i });
      expect(button).not.toBeDisabled();
    });
  });

  it("user should see disabled button when options are deselected", async () => {
    await act(async () => {
      render(
        <UserDropDownContextProvider>
          <UserDropDown />
        </UserDropDownContextProvider>
      );
    });
    await waitFor(() => userEvent.click(screen.getByRole("combobox", { name: /select users/i })));
    await waitFor(() => userEvent.click(screen.getByRole("option", { name: /leanne graham/i })));
    await waitFor(() => {
      const button = screen.getByRole("button", {
        name: /send/i,
      });
      expect(button).not.toBeDisabled();
    });
    await waitFor(() => userEvent.click(screen.getByTestId('CancelIcon')))
    await waitFor(() => {
      const button = screen.getByRole("button", {
        name: /send/i,
      });
      expect(button).toBeDisabled();
    })
  });
});
