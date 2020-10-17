import React from 'react';
import './App.css';
import Header from "./Components/CommonComp/Header/Header"
import Footer from "./Components/CommonComp/Footer/Footer"
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import PracticeArenaPage from "./Container/PracticeArena/HomePage/PracticeArenaPage"
import TopicList from './Container/PracticeArena/Topics/TopicList';
import Problems from './Container/PracticeArena/Problems/Problems';
import ClassroomPage from './Container/Classroom/classroom';
import GradesPage from './Container/GradesPage/grades';
import ProgramDetailsPage from './Container/program/program';
import UnitsPage from "./Container/UnitsPage/UnitsPage";
import SessionPlan from "./Container/SessionPlan/SessionPlan";
import Hoc from './Components/Hoc/hoc';
import axios from 'axios';
import VideoPlayer from './Components/VideoPlayer/video';
import {connect} from 'react-redux';


class App extends React.Component {

  state = {
    isPresent: false,
    loginStatus: this.checkLoginStatus()
  }

  checkLoginStatus(){
    if(window.localStorage.getItem("FinalLoginStatus") == null){
      window.localStorage.setItem("FinalLoginStatus", false)
      return "false"
    }
    else {
      return window.localStorage.getItem("FinalLoginStatus")
    }
  }

  componentDidMount() {
    if (this.state.isPresent === false) {
      axios.get("https://5eeba96c5e298b0016b69331.mockapi.io/TODOCards")
        .then(response => {
          window.localStorage.setItem("finalProjectData", JSON.stringify(response.data[0]["finalApi"]))
          console.log("In Mount setting state")
          this.setState({ isPresent: true })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  render() {
    return (
      <>
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Header}></Route>
          <Hoc data={window.localStorage.getItem("finalProjectData")}>
            <Switch>
                <Route exact path="/" component={PracticeArenaPage}/>
                <Route exact path="/topics/:id" component={TopicList} />
                <Route exact path="/topics/probs" component={Problems} />
                <Route exact path="/classroom" component={ClassroomPage} />
                <Route exact path="/classroom/modules/:id" render={(responseProps) => {
                  return <ProgramDetailsPage modulesNo="6" weeks="20" name="RB-020420 - React Developer Program" batchNo="RB020420" {...responseProps} />
                }} />
                <Route exact path="/classroom/module/grades" component={GradesPage} />
                <Route exact path={"/classroom/module/units"} component={UnitsPage} />
                <Route exact path={"/classroom/module/session_plan"} component={SessionPlan} />
                <Route exact path={"/classroom/module/session_video/:vimeoId"} component={VideoPlayer}/>
            </Switch>
          </Hoc>
          <Footer />
        </div>
      </BrowserRouter>
      </>
    );
  }
}


const getData = (globalStore)=>{
  return{
    login: globalStore.loginPage,
    signup: globalStore.signupPage
  }
}

export default connect(getData)(App);
