import React, { Component } from 'react'
import { Link } from "react-router-dom"
import classes from "./Problems.module.css"
class Problems extends Component {
    render() {
        return (
            <div className={classes.Container}>
                {/* If user is coming form module's weekly curriculum then header will have weeks and days extra*/}
                <Link className={classes.Header} to="#">Python &gt; </Link>
                <Link className={classes.Header} to="/courses/PYTHON/1/">Operators and Conditional Statements  &gt;</Link>
                <div className={classes.Title}>

                    <h2>Problems</h2>

                </div>
                <Link to="/">
                    <div className={`${classes.Topic} ${classes.EasyBorder}`} >
                        <span className={classes.Easy}>
                            Problem 1
                </span>
                        <div className={classes.ProblemDetails}>
                            <span className={classes.ProblemTitle}>
                                <div>Find area and check it is square or not</div>
                                <div>Level : Easy, Max Score : 15</div>
                            </span>
                            <span className={classes.ProblemDifficulty}>
                                <div className={classes.Status}>Solve Problem</div>
                            </span>
                        </div>
                    </div>
                </Link>

                <Link to="#">
                    <div className={`${classes.Topic} ${classes.MediumBorder}`} style={{ border: '2px solid #8455FC' }}>
                        <span className={classes.Medium}>
                            Problem 10
                </span>
                        <div className={classes.ProblemDetails}>
                            <span className={classes.ProblemTitle}>
                                <div>Find obese class based on BMI</div>
                                <div>Level : Medium, Max Score : 15</div>
                            </span>
                            <span className={classes.ProblemDifficulty}>
                                <div className={classes.Status}>Solve Problem</div>
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to="#">
                    <div className={`${classes.Topic} ${classes.MediumBorder}`} style={{ border: '2px solid #8455FC' }}>
                        <span className={classes.Medium}>
                            Problem 10
                </span>
                        <div className={classes.ProblemDetails}>
                            <span className={classes.ProblemTitle}>
                                <div>Find obese class based on BMI</div>
                                <div>Level : Medium, Max Score : 15</div>
                            </span>
                            <span className={classes.ProblemDifficulty}>
                                <div className={classes.Status}>Solve Problem</div>
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to="#">
                    <div className={`${classes.Topic} ${classes.MediumBorder}`} style={{ border: '2px solid #8455FC' }}>
                        <span className={classes.Medium}>
                            Problem 10
                </span>
                        <div className={classes.ProblemDetails}>
                            <span className={classes.ProblemTitle}>
                                <div>Find obese class based on BMI</div>
                                <div>Level : Medium, Max Score : 15</div>
                            </span>
                            <span className={classes.ProblemDifficulty}>
                                <div className={classes.Status}>Solve Problem</div>
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to="#">
                    <div className={`${classes.Topic} ${classes.MediumBorder}`} style={{ border: '2px solid #8455FC' }}>
                        <span className={classes.Medium}>
                            Problem 10
                </span>
                        <div className={classes.ProblemDetails}>
                            <span className={classes.ProblemTitle}>
                                <div>Find obese class based on BMI</div>
                                <div>Level : Medium, Max Score : 15</div>
                            </span>
                            <span className={classes.ProblemDifficulty}>
                                <div className={classes.Status}>Solve Problem</div>
                            </span>
                        </div>
                    </div>
                </Link>


            </div>

        )
    }
}

export default Problems
