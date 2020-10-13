import React, { Component } from 'react'
import classes from "./PracticeArenaPage.module.css"
import { Link } from "react-router-dom"
class PracticeArenaPage extends Component {
    render() {
        return (
            <div className={classes.MainWrapper}>
                <div className={classes.MiddleWrapper}>
                    <p className={classes.Heading1}>Practice Arena</p>
                    <p className={classes.Heading2}>All Skills</p>
                    <div className={classes.CardsWrapper}>


                        <Link to="#">
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


                        <Link to="/dashboard/PYTHON/manmohan80gupta">
                            <div className={classes.Card}>
                                <div className={classes.CardContent}>
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


                        <Link to="/dashboard/PYTHON/manmohan80gupta">
                            <div className={classes.Card}>
                                <div className={classes.CardContent}>
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

                        <Link to="/dashboard/PYTHON/manmohan80gupta">
                            <div className={classes.Card}>
                                <div className={classes.CardContent}>
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
                        <Link to="/dashboard/PYTHON/manmohan80gupta">
                            <div className={classes.Card}>
                                <div className={classes.CardContent}>
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







                    </div>
                </div>

            </div>
        )
    }
}

export default PracticeArenaPage
