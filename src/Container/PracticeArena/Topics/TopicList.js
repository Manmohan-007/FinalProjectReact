import classes from './TopicList.module.css'
import React, { Component } from 'react'
import { Link } from "react-router-dom"

class TopicList extends Component {
    render() {
        const mainData = JSON.parse(localStorage.getItem("finalProjectData"))
        const CardData = mainData.modulesTopics;
        let updateTopics ;
        mainData.arenaPage.map(item=>{
            if(item.id === this.props.match.params.id){
                updateTopics = item
            }
        })
        const MappedData = CardData.map(item =>{
            return (
            <>
                <div className={classes.AssignmentStatusCard}>
                    <div className={classes.AssignmentDetails}>
                        <div className={classes.AssNumName}>
                            <Link to={`/topic/problems/${this.props.match.params.id}/${item.title}`}>
                                <span className={classes.AssName}>{item.id}). </span>
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
                {window.scrollTo(0,0)}
                {/*PROFILE PART STARTS*/}
                <div className={classes.SdCardProfileContainer}>
                    <img src={updateTopics.logo} alt="course_img" />
                    <div className={classes.SdCardTagsContainer}>
                        <div className={classes.Heading}>
                                {updateTopics.title}
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
