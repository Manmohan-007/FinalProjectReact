import React from 'react';
import classes from './moduleCard.module.css'

class moduleCard extends React.Component{
    render(){
        return(
            <div className={classes.cardWrapper}>
                <div className={classes.detailWrapper}>
                    <img className={classes.moduleImage} src="https://assessments.edyoda.com/uploads/static/images/module_icon/aws_4QRD91l.png" alt="" />
                    <p className={classes.title}>Intro To AWS</p>
                </div>
                <div className={classes.authorWrapper}>
                    <img className={classes.authorLogo} src="https://assessments.edyoda.com/uploads/static/images/profile_images/rsz_harshith.png" alt="" />
                    <p className={classes.author}>Harshith</p>
                </div>
                <p className={classes.week}>1 WEEK</p>
            </div>
        )
    }
}

export default moduleCard