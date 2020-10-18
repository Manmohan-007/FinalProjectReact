import React from 'react';
import classes from './moduleCard.module.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

class moduleCard extends React.Component{

    handleGlobalStateUpdate = () => {
        this.props.updateSubModule(this.props.detailName)
        this.props.updateModuleData(this.props)
        this.props.updateModuleWeeks(this.props.weeks)

        let planData = JSON.parse(window.localStorage.getItem('finalProjectData'))

        let sessionPlan = planData.sessionPlan[`${this.props.detailName}`]

        let modulesDayPageData = planData.modulesDayPage

        this.props.updatePlanData(modulesDayPageData[`${this.props.detailName}`])
        this.props.updateSessionPLanDetails(sessionPlan)
    }

    render(){

        return(
            <Link to="/classroom/module/curriculum/units">
                <div onClick={() => this.handleGlobalStateUpdate()}  className={classes.cardWrapper}>
                    <div className={classes.detailWrapper}>
                        <img className={classes.moduleImage} src={this.props.logo} alt="" />
                        {/*EdYoda Logo Link: https://avatars2.githubusercontent.com/u/22793100?s=400&v=4*/}
                        <p className={classes.title}>{this.props.title}</p>
                    </div>
                    <div className={classes.authorWrapper}>
                        <img className={classes.authorLogo} src={this.props.avatar} alt="" />
                        <p className={classes.author}>{this.props.author}</p>
                    </div>
                    <p className={classes.week}>{this.props.weeks} WEEKS</p>
                </div>
            </Link>
        )
    }
}

const updateSubModule = (dispatch) => {
    return {
        updateSubModule: (data) => dispatch({type: 'ACTIVE_SUB_MODULE', data: data}),
        updateModuleData: (data) => dispatch({type: 'UPDATE_ACTIVE_DATA', data: data}),
        updatePlanData: (data) => dispatch({type: 'DAILY_DATA', data: data}),
        updateSessionPLanDetails: (data) => dispatch({type: 'SESSION_PLAN', data: data}),
        updateModuleWeeks: (data) => dispatch({type: 'MODULE_WEEKS', data: data})
    }
}

export default connect('',updateSubModule)(moduleCard)