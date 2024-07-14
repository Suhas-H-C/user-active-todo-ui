import { fetchResponse } from "./ApiFetchConfig";

const getUsers = async (url) => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const body = {};
  let response = await fetchResponse(url, "GET", header, body);
  return response.data;
};

export default getUsers;
