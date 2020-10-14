import React from 'react';
import './App.css';
import Header from "./Components/CommonComp/Header/Header"
import Footer from "./Components/CommonComp/Footer/Footer"
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import PracticeArenaPage from "./Container/PracticeArena/HomePage/PracticeArenaPage"
import TopicList from './Container/PracticeArena/Topics/TopicList';
import Problems from './Container/PracticeArena/Problems/Problems';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        {/* <Switch>      
         <PracticeArenaPage />
        </Switch>     */}
        {/* <TopicList /> */}
        <Problems />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
