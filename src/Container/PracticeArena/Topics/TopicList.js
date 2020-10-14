import classes from './TopicList.module.css'
import React, { Component } from 'react'
import { Link } from "react-router-dom"

class TopicList extends Component {
    render() {

        const mapped =
            <>
                <div className={classes.AssignmentStatusCard}>
                    <div className={classes.AssignmenDetails}>
                        <div className={classes.AssNumName}>
                            <Link href="/courses/PYTHON/1">
                                <span className={classes.AssNum}>1). </span>
                                <span className={classes.AssName}>Operators and Conditional Statements</span>
                            </Link>
                        </div>
                    </div>
                    <div className={`${classes.AssignmentScore} ${classes.error}`}>
                        Pending
                </div>
                </div>
                <hr />
            </>


        return (

            <div className={classes.StudentDashboardCard}>
                {/*PROFILE PART STARTS*/}
                <div className={classes.SdCardProfileContainer}>
                    <img src="https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png" alt="course_img" />
                    <div className={classes.SdCardTagsContainer}>
                        <div className={classes.Heading}>
                           
                                Python
       
                        </div>
                        <div className={classes.Details}>
                        
                                <span className={classes.Value}>0.0%</span>
                                <span className={classes.Tag}>Avg. Score</span>
                      
                        </div>
                    </div>
                </div>
                {/*PROFILE PART ENDS*/}
                {/*Assignment part*/}
                <div className={classes.CardStatus}>
                    {mapped}
                    {mapped}
                    {mapped}
                    {mapped}
                </div>
            </div>

        )
    }
}

export default TopicList
