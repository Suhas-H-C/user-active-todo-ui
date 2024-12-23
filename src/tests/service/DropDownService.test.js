import "@testing-library/jest-dom";
import { EMPTY_OBJECT, GET, HEADERS } from "../../constant/Constant";
import * as ApiConfig from "../../service/ApiFetchConfig";
import getUsers, { getGridData } from "../../service/DropDownService";
import { todos, users } from "../utils/TestUtils";

describe("Tests for Drop Down Service component", () => {
    it("should return users when API is triggered", async () => {
        const url = "https://test/users";
        const APIResponse = {
            data: users
        };
        ApiConfig.fetchResponse = jest.fn().mockReturnValue(APIResponse);
        const response = await getUsers(url);
        expect(response.length).toEqual(users.length);
        expect(ApiConfig.fetchResponse).toHaveBeenCalled();
        expect(ApiConfig.fetchResponse).toHaveBeenCalledWith(url, GET, HEADERS, EMPTY_OBJECT);
        expect(ApiConfig.fetchResponse).toHaveReturned();
        expect(ApiConfig.fetchResponse).toHaveReturnedWith(APIResponse);
    });
    it("should return grid data when API is triggered", async () => {
        const url = "https://test/grid";
        const APIResponse = {
            data: todos
        };
        ApiConfig.fetchResponse = jest.fn().mockReturnValue(APIResponse);
        const response = await getGridData(url);
        expect(response.length).toEqual(users.length);
        expect(ApiConfig.fetchResponse).toHaveBeenCalled();
        expect(ApiConfig.fetchResponse).toHaveBeenCalledWith(url, GET, HEADERS, EMPTY_OBJECT);
        expect(ApiConfig.fetchResponse).toHaveReturned();
        expect(ApiConfig.fetchResponse).toHaveReturnedWith(APIResponse);
    });
});
