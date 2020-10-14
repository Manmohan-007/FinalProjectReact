import React from 'react';
import classes from './program.module.css';
import ModuleCard from '../../Components/moduleCard/moduleCard'

class program extends React.Component{
    render(){
        return(
            <div className={classes.programs}>
                <div className={classes.cardImageWrapper}>
                    <img className={classes.thumbnail} src="https://assessments.edyoda.com/static/images/Only-Image.jpg" alt="" />
                    {
                        <div>
                            <div className={classes.cardDetailWrapper}>
                                <p className={classes.subject}>{this.props.name}</p>
                                <p className={classes.batch}>{this.props.batchNo}</p>
                            </div>
                            <div className={classes.wrapperDiv}>
                                <img className={classes.iconImage} src="https://static.thenounproject.com/png/1725298-200.png" alt=""/>
                                <div className={classes.moduleDiv}>
                                    <p className={classes.number}>{this.props.modulesNo}</p>
                                    <p className={classes.name}>modules</p>
                                </div>
                                <img className={classes.iconImage} src="https://cdn0.iconfinder.com/data/icons/time-date/24/clock-9pm-512.png" alt=""/>
                                <div className={classes.weekDiv}>
                                    <p className={classes.number}>{this.props.weeks}</p>
                                    <p className={classes.name}>weeks</p>
                                </div>
                            </div>

                        </div>
                    }
                </div>
                <div className={classes.allWrapper}>
                    <div className={classes.programProgress}>
                        <p className={classes.heading}>Program Progress</p>
                        <div className={classes.scoreWrapper}>
                            <div className={classes.progBox}>
                                <p className={classes.score}>1</p>
                                <p className={classes.field}>Class Rank</p>
                            </div>
                            <div className={classes.progBox}>
                                <p className={classes.score}>100.0%</p>
                                <p className={classes.field}>Avg Score</p>
                            </div>
                            <div className={classes.progBox}>
                                <p className={classes.score}>97.32</p>
                                <p className={classes.field}>SHS</p>
                            </div>
                        </div>
                    </div>
                    <p className={classes.heading}>Modules</p>
                    <div className={classes.modulesWrapper}>
                        <ModuleCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default program