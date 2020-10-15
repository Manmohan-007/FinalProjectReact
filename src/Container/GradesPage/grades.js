import React from 'react';
import classes from './grades.module.css';
import VideoPlayer from '../../Components/VideoPlayer/video'

class grades extends React.Component{
    render(){
        return(
            <div className={classes.mainWrapper}>
                <div className={classes.contentWrapper}>
                <div className={classes.moduleMarksWrapper}>
                    <img className={classes.subjectLogo} src="https://assessments.edyoda.com/uploads/static/images/module_icon/aws_4QRD91l.png" alt="AWS-LOGO" />
                    <div className={classes.detailsWrapper}>
                        <p className={classes.title}>Intro to AWS</p>
                        <div className={classes.marksWrapper}>
                            <div className={classes.gradesDiv}>
                                <p className={classes.marks}>1</p>
                                <p className={classes.mSub}>Class Rank</p>
                            </div>
                            <div className={classes.gradesDiv}>
                                <p className={classes.marks}>%</p>
                                <p className={classes.mSub}>Avg. Score</p>
                            </div>
                            <div className={classes.gradesDiv}>
                                <p className={classes.marks}>50.0</p>
                                <p className={classes.mSub}>SHS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={classes.topicText}>No Topics Available</p>
                </div>
            </div>
        )
    }
}


export default grades;