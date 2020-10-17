import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const inititalState = {
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

const globalStore = createStore(mainReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
