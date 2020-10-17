import React, { Component } from 'react';
import classes from "./PracticeArenaCard.module.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class PracticeArenaCard extends Component {

    cardsOnClick(props) {
        if (props.loginStatus == false) {
            props.updateSignUpStatus()
        }
    }

    render() {
        const CardData = JSON.parse(localStorage.getItem("finalProjectData")).arenaPage;
        const MappedData = CardData.map(item => {
            return (
                <Link to={this.props.loginStatus == true ? `/topics/${item.id}` : '/'}>
                    <div onClick={() => this.cardsOnClick(this.props)} className={classes.Card}>
                        <div className={classes.CardContent} style={{ padding: "0 0 0 10px" }}>
                            <div className={classes.Thumbnail}>
                                <img src={item.logo} alt="edyoda_img" />
                            </div>
                        </div>
                        <div className={classes.CardContent}>
                            <div className={classes.courseName}>
                                {item.title}
                            </div>
                            <div className={classes.units}>
                                {item.units}
                            </div>
                        </div>
                    </div>
                </Link>

            )
        })

        return (
            <>
                {MappedData}
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
            return dispatch({ type: "changeSignupStatus" })
        }
    }
}


export default connect(getData, changeData)(PracticeArenaCard)
