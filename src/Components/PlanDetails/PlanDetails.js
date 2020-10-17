import React from "react";import classes from './PLanDetails.module.css'import { connect } from 'react-redux'const PlanDetails = (props) => {    let topics = props.sessionPlan.topics    let sessionLink = props.sessionPlan.sessionLink    let password = props.sessionPlan.password    return(        <div className={classes.MainContainer}>            <p className={classes.PlanName}>Topics: </p>            <div className={classes.MoreDetailsOfPlan}>                {                    topics.map((item) => <p className={classes.SubTopics}>                        {`- ${item}`}                    </p> )                }            </div>            <p className={classes.PlanName}>Session Link: </p>            <div className={classes.MoreDetailsOfPlan}>                <p className={classes.SubTopics}>{sessionLink}</p>            </div>            <p className={classes.PlanName}>Meeting Password: </p>            <div className={classes.MoreDetailsOfPlan}>                <p className={classes.SubTopics}>{password}</p>            </div>        </div>    )}const fetchDataFromGlobalStore = (globalStore) => {    return {        ...globalStore.ModuleReducer,    }}export default connect(fetchDataFromGlobalStore)(PlanDetails)