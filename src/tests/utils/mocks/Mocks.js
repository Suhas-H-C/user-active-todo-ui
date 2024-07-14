import { userInitialState } from "../../../context/InitialState";

export const MOCK_VALUE_USER_DROP_DOWN = {
  state: userInitialState,
  setState: jest.fn(),
  fetchUserDetails: jest.fn(),
};
