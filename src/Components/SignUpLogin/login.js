import React from 'react';
import classes from './login.module.css';
import { connect } from 'react-redux';
import axios from "axios"

class Login extends React.Component {
    state = {
        UserName: "",
        Password: "",
        isUserLoggedInValid: false,
        isPasswordValid: false,
    };

    checker = (response) => {

        let arr = [];
        response.map((item) => {
            if (
                item.username == this.state.UserName &&
                item.password == this.state.Password && this.state.UserName !== "" && this.state.Password !== ""
            ) {
                arr.push(item);
            }
        });
        if (arr.length !== 0) {
            return true;
        }
    };

    handleLocalStorage = () => {
        let obj = {
            UserName: this.state.UserName,
            Password: this.state.Password,
        };

        localStorage.setItem("UserData", JSON.stringify(obj));
    };

    handleLogin = (e) => {
        e.preventDefault();
        axios
            .get("https://5ee248998b27f3001609487e.mockapi.io/EdyodaUsers")
            .then((response) => {
                if (response.status == 200) {

                    this.checker(response.data);
                    this.handleLocalStorage();
                    if (this.checker(response.data)) {
                        this.props.UserLoggedIn();
                        this.props.layerChangeStatus();


                        alert("Login Successful");
                    } else {
                        alert("Invalid Credentials");
                    }



                }

            });
    };

    handleUserName = (e) => {
        this.setState({
            UserName: e.target.value,
        });
    };
    handlePassWord = (e) => {
        this.setState({
            Password: e.target.value,
        });
    };


    render() {
        return (
            <>
                <div onClick={() => this.props.layerChangeStatus()} className={classes.layerWrapper}>
                </div>
                <div className={classes.signUpWrapper}>
                    <span onClick={() => this.props.layerChangeStatus()} className={classes.cancleButton}>x</span>
                    <div className={classes.loginButtonWrapper}>
                        <div className={`${classes.button} ${classes.specialButton}`}>Login</div>
                        <div onClick={this.props.changeSignupStatus} className={classes.button}>Sign Up</div>
                    </div>

                    <div className={classes.formWrapperDiv}>
                        <form>
                            <p className={classes.inputTitle}>Username</p>
                            <input className={classes.inputField} onChange={this.handleUserName} type="name" placeholder="Email" />
                            <p className={classes.inputTitle}>Password</p>
                            <input className={classes.inputField} onChange={this.handlePassWord} type="password" placeholder="Password" />
                            <button className={classes.signUp} onClick={this.handleLogin}>Login</button>
                            <p className={classes.forgotPass}>Forgot Password ?</p>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

const getData = (globalStore) => {
    return {
        login: globalStore.loginPage,
        signup: globalStore.signupPage,
        loginStatus: globalStore.IsUserLoggedIn
    }
}

const changeData = (dispatch) => {
    return {
        layerChangeStatus: () => { return dispatch({ type: "layerChangeStatus" }) },
        changeSignupStatus: () => { return dispatch({ type: "changeSignupStatus" }) },
        UserLoggedIn: () => {
            dispatch({ type: "USER_LOGGEDIN" });
        },

    }
}


export default connect(getData, changeData)(Login);