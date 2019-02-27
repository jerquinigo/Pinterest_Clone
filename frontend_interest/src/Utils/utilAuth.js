const Auth = {
  authenticateUser: token => {
    localStorage.setItem("token", token);
  },
  isUserAuthenticated: () => {
    return localStorage.getItem("token") !== null && localStorage.getItem("token") !== "";
  },
  deauthenticateUser: () => {
    localStorage.removeItem("token");
  },
  getToken: () => {
    return localStorage.getItem("token");
  }
};

export default Auth;
