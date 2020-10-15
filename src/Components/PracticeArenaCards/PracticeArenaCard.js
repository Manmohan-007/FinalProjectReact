import React, { Component } from 'react'
import classes from "./PracticeArenaCard.module.css"
import { Link } from "react-router-dom"
class PracticeArenaCard extends Component {


    render() {
        const CardData = JSON.parse(localStorage.getItem("finalProjectData")).arenaPage;
        console.log(CardData);

        const MappedData = CardData.map(item => {
            return (
                <Link to="/topics">
                    <div className={classes.Card}>
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

export default PracticeArenaCard
