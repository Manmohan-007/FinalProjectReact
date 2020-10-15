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
import Hoc from './Components/Hoc/hoc';
import axios from 'axios';

class App extends React.Component {


  componentDidMount(){
    axios.get("https://5eeba96c5e298b0016b69331.mockapi.io/TODOCards")
    .then(response=>{
      console.log((response.data[0]["finalApi"]))
      window.localStorage.setItem("finalProjectData",JSON.stringify(response.data[0]["finalApi"]))
    })
    .catch(err=>{
      console.log(err)
    })
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">

          <Header />
          <Hoc data={window.localStorage.getItem("finalProjectData")}>
            <PracticeArenaPage />
            <TopicList />
            <Problems />
            <ClassroomPage />
            <ProgramDetailsPage modulesNo="6" weeks="20" name="RB-020420 - React Developer Program" batchNo="RB020420"/>
            <GradesPage />
          </Hoc>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
