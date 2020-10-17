import React, { Component } from 'react'
import classes from "./PracticeArenaPage.module.css"
import { Link } from "react-router-dom"
import PracticeArenaCard from '../../../Components/PracticeArenaCards/PracticeArenaCard';
import SignUp from '../../../Components/SignUpLogin/signUp';
import Login from '../../../Components/SignUpLogin/login';
import { connect } from 'react-redux';

class PracticeArenaPage extends Component {

    render() {
        return (
            <>
                {window.scrollTo(0, 0)}
                <div className={classes.MainWrapper}>
                    <div className={classes.MiddleWrapper}>
                        <p className={classes.Heading1}>Practice Arena</p>
                        <p className={classes.Heading2}>All Skills</p>
                        <div className={classes.CardsWrapper}>
                            <PracticeArenaCard loginStatus={this.props.loginStatus} />
                        </div>
                    </div>
                </div>
                <div className={this.props.signup ? classes.alterSignupActive : classes.signupActive}>
                    <SignUp />
                </div>
                <div className={this.props.login ? classes.alterLoginActive : classes.loginActive}>
                    <Login />
                </div>
            </>
        )
    }
}


const getData = (globalStore) => {
    return {
        login: globalStore.mainReducer.loginPage,
        signup: globalStore.mainReducer.signupPage,
        loginStatus: globalStore.mainReducer.IsUserLoggedIn
    }
}

const changeData = (dispatch) => {
    return {
        updateSignUpStatus: () => {
            return dispatch({ type: "changeSignupStatus", value: "none" })
        }
    }
}

export default connect(getData, changeData)(PracticeArenaPage)
