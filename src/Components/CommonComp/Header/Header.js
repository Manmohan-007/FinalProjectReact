import React from 'react';
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends React.Component {

    classUpdate(props) {
        if (props.loginStatus == false) {
            props.updateSignUpStatus()
        }
        else
            props.history.push("/classroom")
    }

    handleUserClick = () => {
        console.log(document.querySelector(".ddown").style.display);
        if (document.querySelector(".ddown").style.display === "block") {
            document.querySelector(".ddown").style.display = "";

        }
        else if (document.querySelector(".ddown").style.display === "") {
            document.querySelector(".ddown").style.display = "block";

        }
    }

    render() {

        return (
            <div className={classes.MainWrapper}>
                <div className={classes.LeftSide}>
                    <div className={classes.LogoWrapper}>
                        <Link className={classes.LogoLink} to="/">
                            <img src="https://assessments.edyoda.com/static/images/logo.png" alt="edyoda-logo" />
                        </Link>
                    </div>
                    <div className={classes.ContentWrapper}><Link to="/" >practice arena</Link> </div>
                    <div className={classes.ContentWrapper} onClick={() => this.classUpdate(this.props)}>classroom</div>
                    <div className={classes.ContentWrapper}><Link to="/" target="_blank" >View Jobs</Link></div>
                    <div className={classes.Hamburger}>
                        <img src="https://assessments.edyoda.com/static/images/burger-svg-icon.svg" alt="icon" onclick="" />
                    </div>
                </div>

                <div className={this.props.loginStatus == true ? classes.RightSideWrapper : classes.displayBlockUser}>
                    <div className={classes.NotificationWrapper}>
                        <div className={classes.IconWrapper}>
                            <i className="far fa-bell"></i>
                            <span className={classes.Badge}>4</span>

                        </div>
                    </div>

                    <div className={classes.DropdownContent}>
                        <Link className={classes.UserName} to="#" onClick={this.handleUserClick} >
                            {this.props.loginStatus ? this.props.userName : null}
                            <i class="fas fa-caret-down"></i>
                            {
                                console.log(this.props.userName)
                            }
                        </Link>
                        <div className={`${classes.DropdownContainer} ddown`} >
                            <Link className={classes.DropdownItem} to="#">Profile</Link>
                            <Link className={classes.DropdownItem} to="#" target="_blank" >Update Job Profile</Link>
                            <div className={classes.DropdownDivider} />
                            <Link className={classes.DropdownItem} onClick={this.props.UserLoggingout} to="#">Log Out </Link>
                            <Link className={classes.DropdownItem} to="#">Change Password</Link>
                        </div>
                    </div>
                </div>

                <div className={this.props.loginStatus == true ? classes.signUpInactive : classes.rightLoginWrapper}>
                    <p onClick={() => this.props.updateLoginStatus()} className={classes.loginButton}>Login</p>
                    <button onClick={() => this.props.updateSignUpStatus()} className={classes.signButton}>Sign up for free</button>
                </div>
            </div>
        )
    }
}

const getData = (globalStore) => {
    return {
        login: globalStore.mainReducer.loginPage,
        signup: globalStore.mainReducer.signupPage,
        loginStatus: globalStore.mainReducer.IsUserLoggedIn,
        userName: globalStore.UserReducer.username
    }
}

const changeData = (dispatch) => {
    return {
        updateSignUpStatus: () => {
            return dispatch({ type: "changeSignupStatus" })
        },
        updateLoginStatus: () => {
            return dispatch({ type: "changeLoginStatus" })
        },
        UserLoggingout: () => {
            dispatch({ type: "USER_LOGGEDOUT" });
        },

    }
}

export default connect(getData, changeData)(Header)