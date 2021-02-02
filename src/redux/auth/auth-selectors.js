const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getToken,
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getIsFetchingCurrentUser,
};
export default authSelectors;
