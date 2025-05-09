import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";
import BackNavigationButton from "../../component/BackNavigationButton";
import {
    UserDropDownContext,
} from "../../context/UserDropDownContextProvider";
import { BACK_NAVIGATION_CONTEXT } from "../utils/TestUtils";
import { EMPTY_OBJECT } from "../../constant/Constant";

describe("Tests for Back Navigation component", () => {
    it("should render back navigation button", async () => {
        render(
            <UserDropDownContext.Provider value={BACK_NAVIGATION_CONTEXT}>
                <BackNavigationButton />
            </UserDropDownContext.Provider>
        );
        expect(screen.getByTestId("back-button-type-testid")).toBeInTheDocument();
    });

    it("should render back navigation button which is not disabled", async () => {
        render(
            <UserDropDownContext.Provider value={BACK_NAVIGATION_CONTEXT}>
                <BackNavigationButton />
            </UserDropDownContext.Provider>
        );
        const button = screen.getByTestId("back-button-type-testid");
        expect(button).toBeInTheDocument();
        expect(button).not.toBeDisabled();
    });

    it("should call handle navigation when back button is clicked", async () => {
        await act(async () =>
            render(
                <UserDropDownContext.Provider value={BACK_NAVIGATION_CONTEXT}>
                    <BackNavigationButton />
                </UserDropDownContext.Provider>
            )
        );
        await waitFor(() => {
            const button = screen.getByTestId("back-button-type-testid");
            expect(button).toBeInTheDocument();
            expect(button).not.toBeDisabled();
            userEvent.click(button);
        });
        await waitFor(() => {
            expect(BACK_NAVIGATION_CONTEXT.setClientDashboard).toHaveBeenCalled();
            expect(BACK_NAVIGATION_CONTEXT.setClientDashboard).toHaveBeenCalledTimes(1);
            expect(BACK_NAVIGATION_CONTEXT.setClientDashboard).toHaveBeenCalledWith({
                childPage: false,
                parentPage: true,
            });
            expect(BACK_NAVIGATION_CONTEXT.setClientDashboard).toHaveReturned();
            expect(BACK_NAVIGATION_CONTEXT.setClientDashboard).toHaveReturnedTimes(1);
            expect(BACK_NAVIGATION_CONTEXT.setClientDashboard).toHaveReturnedWith(EMPTY_OBJECT);
        });
    });
});
