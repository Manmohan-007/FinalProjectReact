import React from "react";import classes from './ModulePlan.module.css'import { connect } from 'react-redux'const ModulePlan = (props) => {    let weeks = []    const totalWeeks = () => {        for(let i=1; i<= props.moduleWeeks; i++) {            weeks.push(i)        }    }    totalWeeks()    return (        <div className={classes.MainContainer}>            <h2 className={classes.ModuleTitle}>                Module Plan            </h2>            <div className={classes.ModulePlan}>                {                    weeks.map((item) =>                        <p className={classes.PlanItems}>                            {`Week - ${item}`}                        </p>                    )                }            </div>        </div>    )}const fetchDataFromGlobalStore = (globalStore) => {    return {        ...globalStore.ModuleReducer    }}export default connect(fetchDataFromGlobalStore)(ModulePlan)