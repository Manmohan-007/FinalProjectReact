import classes from './TopicList.module.css'
import React, { Component } from 'react'
import { Link } from "react-router-dom"

class TopicList extends Component {
    render() {
        const CardData = JSON.parse(localStorage.getItem("finalProjectData")).modulesTopics;
        console.log(CardData);
        const MappedData = CardData.map(item => {
            return (
            <>
                <div className={classes.AssignmentStatusCard}>
                    <div className={classes.AssignmenDetails}>
                        <div className={classes.AssNumName}>
                            <Link to="/topics/problems">
                                <span className={classes.AssNum}>{item.id}). </span>
                                <span className={classes.AssName}>{item.title}</span>
                            </Link>
                        </div>
                    </div>
                    <div className={`${item.status == "Pending" ? `${classes.error}` : null}  ${classes.AssignmentScore}`  }>
                        {item.status}
                    </div>
                </div>
                <hr />
            </>
          )
        })
        


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
                    {MappedData}
                </div>
            </div>

        )
    }
}

export default TopicList
