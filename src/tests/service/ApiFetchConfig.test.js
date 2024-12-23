import "@testing-library/jest-dom";
import axios from 'axios';
import { EMPTY_OBJECT, GET, HEADERS } from "../../constant/Constant";
import * as ApiConfig from "../../service/ApiFetchConfig";
import { users } from "../utils/TestUtils";

jest.mock("axios");
describe("Tests for API Fetch Config component", () => {
    it("should return appropriate response based on status", async () => {
        const APIResponse = { status: 200 };
        const statusResponse = await ApiConfig.handleResponse(APIResponse);
        expect(statusResponse).toEqual(APIResponse);
    });

    it("should call axios with appropriate parameters and return the response", async () => {
        const url = "https://test/users";
        axios.mockResolvedValue({
            status: 200,
            data: users
        });
        const fetchResponse = await ApiConfig.fetchResponse(url, GET, HEADERS, EMPTY_OBJECT);
        expect(fetchResponse.data.length).toEqual(users.length);
        expect(fetchResponse.status).toEqual(200);
        expect(axios).toHaveBeenCalled();
        expect(axios).toHaveBeenCalledTimes(1);
        expect(axios).toHaveBeenCalledWith({ url, method: GET, headers: HEADERS, data: EMPTY_OBJECT });
        expect(axios).toHaveReturned();
        expect(axios).toHaveReturnedTimes(1);
    });
});
