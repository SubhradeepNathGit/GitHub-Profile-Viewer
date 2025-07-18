const endpoint = {
  getUser: (username) =>  `/users/${username}`,
  getRepos: (username) => `/users/${username}/repos`,
};

export default endpoint;
