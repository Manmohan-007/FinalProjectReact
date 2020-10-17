let inititalState = {
    signupPage: false,
    loginPage: false,
    loginStatus: checkLoginStatus()
}
  
function checkLoginStatus(){
    if(window.localStorage.getItem("FinalLoginStatus") == null){
        window.localStorage.setItem("FinalLoginStatus", false)
        return "false"
    }
    else {
        return window.localStorage.getItem("FinalLoginStatus")
    }
}

const mainReducer = (state = inititalState, action)=>{
    switch(action.type){
      case "changeSignupStatus":
        return {...state, signupPage: true, loginPage: false}
      case "changeLoginStatus":
        return {...state, loginPage: true, signupPage: false}
      case "layerChangeStatus": 
        return {...state, loginPage: false, signupPage: false}
      default:
        return {...state}
    } 
}

export default mainReducer