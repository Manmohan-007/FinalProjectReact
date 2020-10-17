import React from 'react';
import classes from './program.module.css';
import ModuleCard from '../../Components/moduleCard/moduleCard'

class program extends React.Component{
    render(){
        const mainData = JSON.parse(window.localStorage.getItem("finalProjectData"))
        let topCardData;
        mainData.classroomCards.map(item=>{
            if(item.id == this.props.match.params.id)  topCardData = item
        })
        const moduleData = mainData.singleCardPage;
        const modules = moduleData.modules.map(item=>{
            return <ModuleCard key={item.id} id={item.id} logo={item.logo} title={item.title} author={item.author} weeks={item.weeks} avatar={item.avatar} detailName={item.detailName}/>
        })
        return(
            <div className={classes.programs}>
                <div className={classes.cardImageWrapper}>
                    <img className={classes.thumbnail} src="https://assessments.edyoda.com/static/images/Only-Image.jpg" alt="" />
                    {
                        topCardData!=undefined?
                        topCardData.notEdyoda === false?
                        <div className={classes.edyProDiv}>
                            <p className={classes.singleEdy}>EDYODA</p>
                            <p className={classes.singlePro}>PROGRAMS</p>
                        </div>
                        :
                        <div>
                            <div className={classes.cardDetailWrapper}>
                                <p className={classes.subject}>{topCardData.cardName}</p>
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
                        :
                        null
                    }
                </div>
                <div className={classes.allWrapper}>
                    <div className={classes.programProgress}>
                        <p className={classes.heading}>Program Progress</p>
                        <div className={classes.scoreWrapper}>
                            <div className={classes.progBox}>
                                <p className={classes.score}>{moduleData.classRank}</p>
                                <p className={classes.field}>Class Rank</p>
                            </div>
                            <div className={classes.progBox}>
                                <p className={classes.score}>{moduleData.avgScore}</p>
                                <p className={classes.field}>Avg Score</p>
                            </div>
                            <div className={classes.progBox}>
                                <p className={classes.score}>{moduleData.shs}</p>
                                <p className={classes.field}>SHS</p>
                            </div>
                        </div>
                    </div>
                    <p className={classes.heading}>Modules</p>
                    <div className={classes.modulesWrapper}>
                        {modules}
                    </div>
                </div>
            </div>
        )
    }
}

export default program