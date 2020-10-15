import React, { Component } from 'react'
import classes from "./PracticeArenaPage.module.css"
import { Link } from "react-router-dom"
import PracticeArenaCard from '../../../Components/PracticeArenaCards/PracticeArenaCard'
class PracticeArenaPage extends Component {
    render() {
        return (
            <div className={classes.MainWrapper}>
                <div className={classes.MiddleWrapper}>
                    <p className={classes.Heading1}>Practice Arena</p>
                    <p className={classes.Heading2}>All Skills</p>
                    <div className={classes.CardsWrapper}>

                        <PracticeArenaCard />
                    </div>
                </div>

            </div>
        )
    }
}

export default PracticeArenaPage
