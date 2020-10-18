let inititalState = {
  signupPage: false,
  loginPage: false,
  IsUserLoggedIn: localStorage["IsUserLoggedIn"] == "true"
}



const mainReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "changeSignupStatus":
      return { ...state, signupPage: true, loginPage: false }
    case "changeLoginStatus":
      return { ...state, loginPage: true, signupPage: false }
    case "layerChangeStatus":
      return { ...state, loginPage: false, signupPage: false }
    case "USER_LOGGEDIN":
      localStorage.setItem("IsUserLoggedIn", true);
      return { ...state, IsUserLoggedIn: true };
    case "USER_LOGGEDOUT":
      localStorage.setItem("IsUserLoggedIn", false);
      return { ...state, IsUserLoggedIn: false };
    default:
      return { ...state }
  }
}

export default mainReducer