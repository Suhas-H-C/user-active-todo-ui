import { URL } from "../../constant/Constant";
import getUsers from "../../service/DropDownService";
import { users } from "../utils/data/TestUtils";

describe("Tests for Dropdown service", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("should call users data detail API", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue({ users }),
    });

    let response = await getUsers(URL);
    let data = await response.json();
    expect(fetch).toHaveBeenCalledWith(URL);
    expect(data.users).toHaveLength(1);
    expect(data.users).toEqual(users);
    expect(data.users[0].name).toEqual(users[0].name);
  });
});
