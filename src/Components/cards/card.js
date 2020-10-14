import React from 'react';
import classes from './card.module.css';
 
class card extends React.Component{
    render(){
        return(
            <div className={classes.card}>
                <div className={classes.cardImageWrapper}>
                    <img className={classes.thumbnail} src={this.props.notEdyoda=="false"?"https://assessments.edyoda.com/uploads/static/images/RB020420/edyoda_programs.png" :"https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg"} alt="" />
                    {
                        this.props.notEdyoda === "false"?null
                        :
                        <div>
                            <div className={classes.cardLevelWrapper}>
                                <p className={classes.levelName}>Beginner</p>
                            </div>
                            <div className={classes.cardDetailWrapper}>
                                <p className={classes.subject}>{this.props.name}</p>
                                <p className={classes.batch}>{this.props.batchNo}</p>
                            </div>
                            <p className={classes.edyoda}>EDYODA</p>
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
                <div className={classes.descWrapper}>
                <p className={classes.title}>{this.props.batchNo} - {this.props.title}</p>
                    <p className={classes.units}>9 Units</p>
                </div>
            </div>
        )
    }
}

export default card;