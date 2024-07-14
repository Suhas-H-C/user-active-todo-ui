import { EMPTY_ARRAY } from "../../../constant/Constant";
import { users } from "../data/TestUtils";

const userMockedState = {
  username: users,
  selectedUser: EMPTY_ARRAY,
  isButtonDisabled: true,
};

export const MOCK_VALUE_USER_DROP_DOWN = {
  state: userMockedState,
  setState: jest.fn(),
  fetchUserDetails: jest.fn(),
};
