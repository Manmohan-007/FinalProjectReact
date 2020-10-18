import React, { Component } from 'react'
import { Link } from "react-router-dom"
import classes from "./Problems.module.css"
class Problems extends Component {
    render() {
        const mainData = JSON.parse(localStorage.getItem("finalProjectData"))
        const CardData = mainData.problems;
        let titleUpdateData ;
        mainData.arenaPage.map(item=>{
            if(item.id == this.props.match.params.proId){
                titleUpdateData = item
            }
        })

        const MappedData = CardData.map(item => {
            return (
                <Link to="/">
                    <div className={`${classes.Topic}  ${item.level == "Easy" ? `${classes.EasyBorder}` : null} ${item.level == "Medium" ? `${classes.MediumBorder}` : null} ${item.status == "Hard" ? `${classes.HardBorder}` : null}`} >
                        <span className={`${item.level == "Easy" ? `${classes.Easy}` : null} ${item.level == "Medium" ? `${classes.Medium}` : null} ${item.status == "Hard" ? `${classes.Hard}` : null}`} >
                            Problem {item.id}
                        </span>
                        <div className={classes.ProblemDetails}>
                            <span className={classes.ProblemTitle}>
                                <div>{item.title}</div>
                                <div>Level : {item.level}, Max Score : {item.MaxScore}</div>
                            </span>
                            <span className={classes.ProblemDifficulty}>
                                <div className={classes.Status}>{item.status}</div>
                            </span>
                        </div>
                    </div>
                </Link>

            )
        })



        return (
            <div className={classes.Container}>
                {window.scrollTo(0,0)}
                {/* If user is coming form module's weekly curriculum then header will have weeks and days extra*/}
                <Link className={classes.Header} to="#">{titleUpdateData.title} &gt; </Link>
                <Link className={classes.Header} to="/courses/PYTHON/1/">{this.props.match.params.title}  &gt;</Link>
                <div>

                    <h2>Problems</h2>

                </div>
                {MappedData}




            </div>

        )
    }
}

export default Problems
