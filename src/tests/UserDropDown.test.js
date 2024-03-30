import React from "react";
import { screen, render } from "@testing-library/react";
import UserDropDown from "../component/UserDropDown";

describe("Testing the User Dropdown component", () => {
  it("should render my dropdown component", async () => {
    render(<UserDropDown />);
    const getDropDown = screen.getByTestId("my-user-dropdown");
    expect(getDropDown).toBeInTheDocument();
  });

  it("should render by send button", async () => {
    render(<UserDropDown />);
    const mySendButton = screen.getByTestId("send-button");
    expect(mySendButton).toBeDisabled();
  });
});
