import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from "./components/nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/home";




function App() {
  return (
    <div className="App">
    

      <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/" component={Home} exact={true} />


      </Switch>


      </BrowserRouter>


    </div>
  );
}

export default App;
