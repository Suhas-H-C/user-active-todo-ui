import { render, screen } from "@testing-library/react";
import React from "react";
import ClientDashboard from "../../component/ClientDashboard";

describe("Tests for Client Dashboard component", () => {
  it("should render client component", async () => {
    render(<ClientDashboard />);

    const message = screen.getByText(/welcome/i);
    expect(message).toBeTruthy();
  });

  it("should render client component with greetings for provided name", async () => {
    render(<ClientDashboard name="John" />);

    const message = screen.getByText(/welcome john/i);
    expect(message).toBeTruthy();
  });
});
