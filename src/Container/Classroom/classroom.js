import React from 'react';
import classes from './classroom.module.css';
import Card from '../../Components/cards/card'
 
class classRoom extends React.Component{
    render(){
        return(
            <div className={classes.mainWrapper}>
                <div className={classes.classRoomPage}>
                    <h2 className={classes.heading}>Classroom</h2>
                    <p className={classes.text}>Your Enrolled Courses</p>
                    <div className={classes.cardsContainer}>
                        <Card key='1' id='1' notEdyoda="false" title='PY - 150520 Python Developer' units="30" />
                        <Card key ='2' id='2' notEdyoda='true' name='Data Structures & Algo' batchNo='RB-020420' modulesNo='6' weeks='20' title='React Developer Program' units='9' />
                    </div>
                </div>
            </div>
        )
    }
}

export default classRoom;