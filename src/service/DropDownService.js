const getUsers = (url, setState) => {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let names = result.map((user) => user.name);
      setState((prev) => {
        return { ...prev, username: names };
      });
    })
    .catch((err) => console.warn(err));
};

export default getUsers;
