import React from 'react';
import classes from './classroom.module.css';
import Card from '../../Components/cards/card'
 
class classRoom extends React.Component{
    render(){
        const data = JSON.parse(window.localStorage.getItem("finalProjectData")).classroomCards;
        const AllCards = data.map(item=>{
            return item.notEdyoda == "false"?
            <Card key={item.id} id={item.id} notEdyoda={item.notEdyoda} title={item.title} units={item.units} />
            :
            <Card key ={item.id} id={item.id} notEdyoda={item.notEdyoda} name={item.cardName} batchNo={item.batchNo} modulesNo={item.modulesNo} weeks={item.weeks} title={item.title} units={item.units} />

        })
        return(
            <div className={classes.mainWrapper}>
                {window.scrollTo(0,0)}
                <div className={classes.classRoomPage}>
                    <h2 className={classes.heading}>Classroom</h2>
                    <p className={classes.text}>Your Enrolled Courses</p>
                    <div className={classes.cardsContainer}>
                        {AllCards}
                    </div>
                </div>
            </div>
        )
    }
}

export default classRoom;