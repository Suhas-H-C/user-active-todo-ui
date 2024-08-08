import axios from "axios";

export async function fetchResponse(url, method, headers, body) {
  return await axios({ url, method, headers, data: body })
    .then((response) => handleResponse(response))
    .then((data) => data)
    .catch((error) => console.error(error));
}

export async function handleResponse(response) {
  if (response.status === 200 || response.status === 201) {
    return response;
  }
}
