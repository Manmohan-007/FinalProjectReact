import React from 'react';
import classes from './signUp.module.css';
import { connect } from 'react-redux';
import axios from "axios"
class signUp extends React.Component {
    state = {
        UserName: "",
        Password: "",
        Email: "",
        IsPassValid: false,
        IsUserNameValid: false,
        IsEmailValid: false,
    };

    username = React.createRef();
    password = React.createRef();
    email = React.createRef();

    defaultstate = () => {
        this.setState({
            UserName: "",
            Password: "",
            Email: "",
            IsPassValid: false,
            IsUserNameValid: false,
            IsEmailValid: false,
        });
        this.username.current.value = "";
        this.password.current.value = "";
        this.email.current.value = "";
    };

    handleUserName = (e) => {
        const Validator = /^[a-zA-Z]{3,}([a-zA-Z0-9]{1,})?$/;

        if (e.target.value) {
            document
                .querySelector(".fall")
                .setAttribute("style", " display: block !important");
        }
        if (e.target.value.match(/^[a-zA-Z]{3,}/gm)) {
            document.querySelectorAll(".fall li")[0].style.color = "#00b700";
        } else {
            document.querySelectorAll(".fall li")[0].style.color = "#E15D44";
        }
        if (e.target.value.match(Validator)) {
            e.target.style.borderBottom = "4px solid #00b700";
            this.setState({
                UserName: e.target.value,
                IsUserNameValid: true,
            });
        } else {
            e.target.style.borderBottom = "4px solid #E15D44";
            return false;
        }
    };

    handleEmail = (e) => {
        e.preventDefault();
        const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (e.target.value.match(emailValidator)) {
            e.target.style.borderBottom = "4px solid #00b700";
            this.setState({
                Email: e.target.value,
                IsEmailValid: true,
            });
        } else {
            e.target.style.borderBottom = "4px solid #E15D44";
            return false;
        }
    };

    handlePassWord = (e) => {
        const PassWordValidator = /(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;

        if (e.target.value) {

            document.querySelector(".passClass")
                .setAttribute("style", " display: block !important");
        }
        if (e.target.value.match(/^.{8,}$/gm)) {
            document.querySelectorAll(".passClass li")[0].style.color = "#00b700";
        } else {
            document.querySelectorAll(".passClass li")[0].style.color = "#E15D44";
        }
        if (e.target.value.match(/[0-9]{1,}/gm)) {
            document.querySelectorAll(".passClass li")[1].style.color = "#00b700";
        } else {
            document.querySelectorAll(".passClass li")[1].style.color = "#E15D44";
        }
        if (e.target.value.match(/[A-Z]{1,}/gm)) {
            document.querySelectorAll(".passClass li")[2].style.color = "#00b700";
        } else {
            document.querySelectorAll(".passClass li")[2].style.color = "#E15D44";
        }
        if (e.target.value.match(/[a-z]{1,}/gm)) {
            document.querySelectorAll(".passClass li")[3].style.color = "#00b700";
        } else {
            document.querySelectorAll(".passClass li")[3].style.color = "#E15D44";
        }
        if (e.target.value.match(/[^A-Za-z0-9]{1,}/gm)) {
            document.querySelectorAll(".passClass li")[4].style.color = "#00b700";
        } else {
            document.querySelectorAll(".passClass li")[4].style.color = "#E15D44";
        }
        if (e.target.value.match(PassWordValidator)) {
            e.target.style.borderBottom = "4px solid #00b700";
            this.setState({
                Password: e.target.value,
                IsPassValid: true,
            });
        } else {
            e.target.style.borderBottom = "4px solid #E15D44";
            return false;
        }
    };



    localStorageHandler = () => {
        let obj = {
            UserName: this.state.UserName,
            Password: this.state.Password,
        };

        localStorage.setItem("UserData", JSON.stringify(obj));
    };

    isUserExist = (response) => {
        let arr = [];
        response.map((item) => {
            if (item.email == this.state.Email) {
                arr.push(item.email);
            }
        });

        if (arr.length !== 0) {
            return true;
        }

    }



    handleRegister = (e) => {
        e.preventDefault();
        if (
            this.state.IsEmailValid &&
            this.state.IsPassValid &&
            this.state.IsUserNameValid
        ) {
            axios
                .get("https://5ee248998b27f3001609487e.mockapi.io/EdyodaUsers")
                .then((response) => {
                    this.isUserExist(response.data);
                    if (this.isUserExist(response.data)) {
                        alert("User Exist");
                        this.props.changeLoginStatus()

                    } else {
                        let UserData = {
                            username: this.state.UserName,
                            password: this.state.Password,
                            email: this.state.Email,
                        };

                        axios
                            .post(
                                "https://5ee248998b27f3001609487e.mockapi.io/EdyodaUsers",
                                UserData
                            )
                            .then((response) => {
                                this.localStorageHandler();
                                this.defaultstate();
                                this.props.UserLoggedIn();
                                alert("Registered Successful");
                                this.props.layerChangeStatus()
                                this.props.props.history.push("/");
                            })
                            .catch((err) => {
                                console.log("Request Failed");
                            });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            alert("Enter Valid details");
        }
    };





    render() {
        return (
            <>
                <div onClick={() => {
                    this.props.layerChangeStatus()
                }} className={classes.layerWrapper}>
                </div>

                <div className={`${classes.signUpWrapper}`}>
                    <span onClick={() => {
                        this.props.layerChangeStatus()
                    }} className={classes.cancleButton}>x</span>
                    <div className={classes.loginButtonWrapper}>
                        <div onClick={this.props.changeLoginStatus} className={classes.button}>Login</div>
                        <div className={`${classes.button} ${classes.specialButton}`}>Sign Up</div>
                    </div>
                    <div className={classes.formWrapperDiv}>
                        <form>
                            <p className={classes.inputTitle} >First Name</p>
                            <input className={classes.inputField} type="name" name="firstName" placeholder="First Name" required />
                            <p className={classes.inputTitle}>Username</p>
                            <input className={classes.inputField} ref={this.username} onChange={this.handleUserName} type="name" name="username" placeholder="Enter Username" required />
                            <ul className={`${classes.loginVal}  fall `}>
                                <li>Starts with not less than 3 characters</li>
                                <li className={classes.ConditionLi1}>
                                    Numeric Characters are optional
                                </li>
                            </ul>
                            <p className={classes.inputTitle}>Email address</p>
                            <input className={classes.inputField} ref={this.email} onChange={(e) => this.handleEmail(e)} type="email" placeholder="Enter email" required />
                            <p className={classes.inputTitle}>Create Password</p>
                            <input className={classes.inputField} ref={this.password} onChange={this.handlePassWord} type="password" placeholder="Password" required />
                            <ul className={`${classes.passVal} passClass`}>
                                <li>Not less than 8 characters</li>
                                <li>Contains a digit</li>
                                <li>Contains an uppercase letter</li>
                                <li>Contains a lowercase letter</li>
                                <li>A character not being alphanumeric</li>
                            </ul>
                            <button className={classes.signUp} onClick={this.handleRegister} >Sign Up</button>
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
        layerChangeStatus: () => {
            return dispatch({ type: "layerChangeStatus" })
        },
        changeLoginStatus: () => {
            return dispatch({ type: "changeLoginStatus" })
        },
        UserLoggedIn: () => {
            dispatch({ type: "USER_LOGGEDIN" });
        },

    }
}

export default connect(getData, changeData)(signUp);