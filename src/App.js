import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./CommonStyle.css"
import Header from "./Components/CommonComp/Header"
import Footer from "./Components/CommonComp/footer"
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
