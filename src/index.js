import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import LoginSignUpReducer from './Reducers/LoginSignUpReducer';
import { ActiveModule } from "./Reducers/ActiveModuleReducer";
import { UserDetails} from "./Reducers/UserDetails";

const rootReducer = combineReducers({
    mainReducer: LoginSignUpReducer,
    ModuleReducer: ActiveModule,
    UserReducer: UserDetails
})

const globalStore = createStore(rootReducer)

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
