import { EMPTY_OBJECT } from "../../constant/Constant";
import { userInitialState, viewForAdmin } from "../../context/InitialState";

export const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

export const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
];

export const CLIENT_DASHBOARD_CONTEXT = {
  fetchGridData: jest.fn().mockReturnValue({
    data: todos
  }),
  names: ["John", "Marco", "Elvis"],
};

export const USER_DROPDOWN_CONTEXT = {
  state: {
    username: CLIENT_DASHBOARD_CONTEXT.names,
    selectedUser: [],
    isButtonDisabled: true,
  },
  setState: jest.fn(),
  fetchUserDetails: jest.fn(),
  setClientDashboard: jest.fn(),
};

export const BACK_NAVIGATION_CONTEXT = {
  setClientDashboard: jest.fn().mockReturnValue(EMPTY_OBJECT),
};

export const APP_CONTEXT = {
  state: userInitialState,
  setState: jest.fn(),
  fetchUserDetails: jest.fn().mockReturnValue({
    data: users
  }),
  fetchGridData: jest.fn().mockReturnValue({
    data: todos
  }),
  clientDashboard: viewForAdmin,
  setClientDashboard: jest.fn(),
};