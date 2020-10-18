import React from 'react';
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends React.Component {




    overlay = React.createRef();
    classUpdate(props) {
        if (props.loginStatus == false) {
            props.updateSignUpStatus()
        }
        else
            props.history.push("/classroom")
    }

    handleUserClick = () => {


        if (document.querySelector(".ddown").style.display === "block") {
            document.querySelector(".ddown").style.display = "";
        }
        else if (document.querySelector(".ddown").style.display === "" || document.querySelector(".ddown").style.display === undefined) {
            document.querySelector(".ddown").style.display = "block";
        }
    }
    handleUserClickRes = () => {

        console.log(document.querySelector(".Userddown").style.display);
        if (document.querySelector(".Userddown").style.display === "flex") {
            document.querySelector(".Userddown").style.display = "";
        }
        else if (document.querySelector(".Userddown").style.display === "" || document.querySelector(".Userddown").style.display === undefined) {
            document.querySelector(".Userddown").style.display = "flex";
        }
    }

    handleUserName = () => {

        if (JSON.parse(localStorage.getItem("UserData")) !== "" || JSON.parse(localStorage.getItem("UserData")) !== undefined || JSON.parse(localStorage.getItem("UserData")) !== null) {
            return (JSON.parse(localStorage.getItem("UserData")).UserName)
        }
        else {
            return ("User")
        }
    }
    handleHamburgerClick = () => {

        if (document.querySelector(".LeftSideHam").style.display === "flex") {
            document.querySelector(".LeftSideHam").style.display = "";
            this.overlay.current.style.display = "none"
            document.querySelector(".Userddown").style.display = "";
        }
        else if (document.querySelector(".LeftSideHam").style.display === "" || document.querySelector(".Userddown").style.display === undefined) {
            document.querySelector(".LeftSideHam").style.display = "flex";
            this.overlay.current.style.display = "block"
        }
    }


    render() {
        console.log(this.overlay.current)

        return (
            <>
                <div ref={this.overlay} className={`${classes.overlay} overlay`}></div>
                <div className={classes.MainWrapper}>
                    <div className={classes.LogoWrapper}>
                        <Link className={classes.LogoLink} to="/">
                            <img src="https://assessments.edyoda.com/static/images/logo.png" alt="edyoda-logo" />
                        </Link>
                    </div>
                    <div className={`${classes.LeftSide} LeftSideHam`}>
                        <div className={classes.ContentWrapper}><Link to="/" >practice arena</Link> </div>
                        <div className={classes.ContentWrapper} onClick={() => this.classUpdate(this.props)}>classroom</div>
                        <div className={classes.ContentWrapper}><a href="https://recruitcrm.io/jobs/EdYoda_jobs" target="_blank" >View Jobs</a></div>
                        <div className={this.props.loginStatus == true ? classes.RightSideWrapper1 : classes.displayBlockUser}>
                            <div className={classes.DropdownContentRes} >
                                <Link className={`${classes.UserNameRes} UserRes`} to="#" onClick={this.handleUserClickRes} >
                                    {
                                        `${this.handleUserName()}`
                                    }
                                    <i class="fas fa-caret-down"></i>
                                    {
                                        console.log(this.props.userName)
                                    }
                                </Link>
                                <div className={`Userddown ${classes.DropdownContainerRes} `} >
                                    <Link className={classes.DropdownItemRes} to="#">Profile</Link>
                                    <Link className={classes.DropdownItemRes} to="#" target="_blank" >Update Job Profile</Link>
                                    <div className={classes.DropdownDividerRes} />
                                    <Link className={classes.DropdownItemRes} onClick={this.props.UserLoggingout} to="#">Log Out </Link>
                                    <Link className={classes.DropdownItemRes} to="#">Change Password</Link>
                                </div>
                            </div>
                        </div>
                        <div className={this.props.loginStatus == true ? classes.signUpInactive : classes.rightLoginWrapper}>
                            <p onClick={() => this.props.updateLoginStatus()} className={classes.loginButtonRes}>Login</p>
                            <button onClick={() => this.props.updateSignUpStatus()} className={classes.signButtonRes}>Sign up for free</button>
                        </div>

                    </div>
                    <div onClick={() => this.handleHamburgerClick()}
                        className={`${this.props.loginStatus == true ? classes.Hamburger : classes.signUpInactive}`}>
                        <img
                            src="https://assessments.edyoda.com/static/images/burger-svg-icon.svg"
                            alt="icon"
                        />
                    </div>




                    <div className={this.props.loginStatus == true ? classes.RightSideWrapper : classes.displayBlockUser}>
                        <div className={classes.NotificationWrapper}>
                            <div className={classes.IconWrapper}>
                                <i className="far fa-bell"></i>
                                <span className={classes.Badge}>4</span>

                            </div>
                        </div>

                        <div className={classes.DropdownContent} >
                            <Link className={classes.UserName} to="#" onClick={this.handleUserClick} >
                                {
                                    `${this.handleUserName()}`
                                }
                                <i class="fas fa-caret-down"></i>


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
            </>
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