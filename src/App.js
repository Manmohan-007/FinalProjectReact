import React from 'react';
import './App.css';
import Header from "./Components/CommonComp/Header/Header"
import Footer from "./Components/CommonComp/Footer/Footer"
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import PracticeArenaPage from "./Container/PracticeArena/HomePage/PracticeArenaPage"
import TopicList from './Container/PracticeArena/Topics/TopicList';
import Problems from './Container/PracticeArena/Problems/Problems';
import ClassroomPage from './Container/Classroom/classroom';
import UnitsPage from "./Container/UnitsPage/UnitsPage";
import ProgramDetailsPage from './Container/program/program';
import GradesPage from "./Container/GradesPage/GradesPage";
import SessionPlan from "./Container/SessionPlan/SessionPlan";
import Hoc from './Components/Hoc/hoc';
import Curriculum from "./Container/Curriculum/Curriculum";

import axios from 'axios';
import VideoPlayer
    from "./Container/VideoPlayer/VideoPlayer";

// https://player.vimeo.com/video/

class App extends React.Component {
  
  state={
    isPresent: false,
      activeSubModule: 'units'
  }
  componentDidMount(){
    if(this.state.isPresent === false){
      axios.get("https://5eeba96c5e298b0016b69331.mockapi.io/TODOCards")
      .then(response=>{
        window.localStorage.setItem("finalProjectData",JSON.stringify(response.data[0]["finalApi"]))
        console.log("In Mount setting state")
        this.setState({isPresent: true})
      })
      .catch(err=>{
        console.log(err)
      })
    }
    let pd = JSON.parse(localStorage.getItem("finalProjectData"))
      console.log(pd)
  }

  render(){
    return (
      <BrowserRouter>

        <div className="App">
        <Route path={"/"} component={Header} />
        <Switch>
          <Hoc data={window.localStorage.getItem("finalProjectData")}>
              <Route exact path="/" component={PracticeArenaPage}/>
              <Route exact path="/topics" component={TopicList}/>
              <Route exact path="/topics/problems" component={Problems}/>
              <Route exact path="/classroom" component={ClassroomPage} />
              <Route exact path="/classroom/modules/:id" render={(responseProps)=>{
                return <ProgramDetailsPage modulesNo="6" weeks="20" name="RB-020420 - React Developer Program" batchNo="RB020420" {...responseProps}/>
              }}/>
              <Route exact path={"/classroom/module/curriculum/:id"} render={(props) => <Curriculum {...props}/>} />
              <Route exact path={"/classroom/module/curriculum/units"} component={UnitsPage} />
              <Route exact path={"/classroom/module/curriculum/grades"} component={GradesPage} />
              <Route exact path={"/classroom/module/session_plan"} component={SessionPlan} />
              <Route exact path={"/classroom/module/video/:videoId"} component={VideoPlayer}/>
          </Hoc>
        </Switch>
        <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
