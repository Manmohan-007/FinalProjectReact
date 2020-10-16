import React from "react";
import classes from './Modules.module.css'
import { Dropdown } from "../../Assests/Icons";
import {Link} from 'react-router-dom';

class Modules extends React.Component{

    state = {
        active: false
    }

    updateActiveView = (object) => {
        this.setState({active: !this.state.active})
    }

    render() {
        return(
            <div className={classes.MainContainer}>
                <div onClick={(e) => {
                    this.updateActiveView(e)
                }} className={classes.MainTitleContainer}>
                    <div className={classes.ModuleTitle}>Day - 1 | Intro to Cloud</div>
                    <div className={`${classes.DropdownContainer} ${this.state.active ? classes.ActiveDrop : null}`}>{ Dropdown }</div>
                </div>
                <div className={`${classes.ModuleContents} ${this.state.active ? classes.Active : null}`}>
                    <p className={classes.MoreAboutModules}>Session Plan</p>
                    <Link to="/classroom/module/session_video/280005564"><p className={classes.MoreAboutModules}>Session Recording</p></Link> 
                </div>
            </div>
        )
    }
}

export default Modules