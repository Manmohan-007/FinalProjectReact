import React from 'react';
import classes from './moduleCard.module.css';
import {Link} from 'react-router-dom';

class moduleCard extends React.Component{
    render(){
        return(
            <Link to="">
                <div className={classes.cardWrapper}>
                    <div className={classes.detailWrapper}>
                        <img className={classes.moduleImage} src={this.props.logo} alt="" />
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

export default moduleCard