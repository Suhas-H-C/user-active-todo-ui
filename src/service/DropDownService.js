let getUsers = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    console.error("Network call failed");
  }
  return response;
};

export default getUsers;
