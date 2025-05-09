import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import App from "../App";
import UserDropDownContextProvider, { UserDropDownContext } from "../context/UserDropDownContextProvider";
import { APP_CONTEXT, todos } from "./utils/TestUtils";

describe("Tests for App component", () => {
    it("should render user dropdown component when viewForAdmin is true", async () => {
        render(
            <UserDropDownContextProvider>
                <App />
            </UserDropDownContextProvider>
        );
        expect(screen.getByTestId("user-dropdown-type-testid")).toBeInTheDocument();
    });

    it("should render data grid component when viewForAdmin is false", async () => {
        const NON_ADMIN_DASHBOARD_CONTEXT = { ...APP_CONTEXT, clientDashboard: { childPage: true, parentPage: false } }
        await act(async () =>
            render(
                <UserDropDownContext.Provider value={NON_ADMIN_DASHBOARD_CONTEXT}>
                    <App />
                </UserDropDownContext.Provider>
            )
        )
        await waitFor(() => {
            expect(screen.getByTestId("back-button-type-testid")).toBeInTheDocument();
            expect(screen.getByTestId("data-grid-testid")).toBeInTheDocument();
            expect(NON_ADMIN_DASHBOARD_CONTEXT.fetchGridData).toHaveBeenCalled();
            expect(NON_ADMIN_DASHBOARD_CONTEXT.fetchGridData).toHaveBeenCalledTimes(1);
            expect(NON_ADMIN_DASHBOARD_CONTEXT.fetchGridData).toHaveBeenCalledWith();
            expect(NON_ADMIN_DASHBOARD_CONTEXT.fetchGridData).toHaveReturnedTimes(1);
            expect(NON_ADMIN_DASHBOARD_CONTEXT.fetchGridData).toHaveReturnedWith({ data: todos });
            expect(NON_ADMIN_DASHBOARD_CONTEXT.fetchUserDetails).not.toHaveBeenCalled();
            expect(NON_ADMIN_DASHBOARD_CONTEXT.fetchUserDetails).not.toHaveReturned();
            expect(NON_ADMIN_DASHBOARD_CONTEXT.setClientDashboard).not.toHaveBeenCalled();
            expect(NON_ADMIN_DASHBOARD_CONTEXT.setClientDashboard).not.toHaveReturned();
        });
    });
});
