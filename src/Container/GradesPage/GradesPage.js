import React from 'react';
import classes from './GradesPage.module.css';
import { connect } from 'react-redux'

class GradesPage extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div className={classes.mainWrapper}>
                <div className={classes.contentWrapper}>
                <div className={classes.moduleMarksWrapper}>
                    <img className={classes.subjectLogo} src={this.props.data.logo} alt={this.props.data.title} />
                    <div className={classes.detailsWrapper}>
                        <p className={classes.title}>{this.props.data.title}</p>
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

let fetchFromGlobalStore = (globalStore) => {
    return {
        ...globalStore.ModuleReducer
    }
}

export default connect(fetchFromGlobalStore)(GradesPage);