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
// https://player.vimeo.com/video/
class App extends React.Component {

  state = {
    isPresent: false
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
      <BrowserRouter>

        <div className="App">
          <Header />
          <Switch>
            <Hoc data={window.localStorage.getItem("finalProjectData")}>
              <Route exact path="/" component={PracticeArenaPage} />
              <Route exact path="/topics" component={TopicList} />
              <Route exact path="/topics/problems" component={Problems} />
              <Route exact path="/classroom" component={ClassroomPage} />
              <Route exact path="/classroom/modules/:id" render={(responseProps) => {
                return <ProgramDetailsPage modulesNo="6" weeks="20" name="RB-020420 - React Developer Program" batchNo="RB020420" {...responseProps} />
              }} />
              <Route exact path="/classroom/module/grades" component={GradesPage} />
              <Route exact path={"/classroom/module/units"} component={UnitsPage} />
              <Route exact path={"/classroom/module/session_plan"} component={SessionPlan} />
            </Hoc>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
