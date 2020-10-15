import React, { Component } from 'react'
import classes from "./PracticeArenaCard.module.css"
import { Link } from "react-router-dom"
class PracticeArenaCard extends Component {
    render() {
        const MappedData = <Link to="#">
            <div className={classes.Card}>
                <div className={classes.CardContent} style={{ padding: "0 0 0 10px" }}>
                    <div className={classes.Thumbnail}>
                        <img src="https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png" alt="edyoda_img" />
                    </div>
                </div>
                <div className={classes.CardContent}>
                    <div className={classes.courseName}>
                        Python
</div>
                    <div className={classes.units}>
                        101 Units
</div>
                </div>
            </div>
        </Link>


        return (
            <>
                {MappedData}
            </>
        )
    }
}

export default PracticeArenaCard
