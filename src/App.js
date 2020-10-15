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
import ProgramDetailsPage from './Container/program/program'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <ProgramDetailsPage modulesNo="6" weeks="20" name="RB-020420 - React Developer Program" batchNo="RB020420" />
        <ClassroomPage />
        <GradesPage />

        <PracticeArenaPage />
        <TopicList />
        <Problems />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
