import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage'
import Packs from './components/Packs'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
        <Route 
          exact path="/" 
          render={props => 
            <Homepage/>
          } 
        />
        <Route 
          exact path="/pakker" 
          render={props => 
            <Packs/>
          } 
        />
      <Footer/>
    </Router>
  );
}

export default App;
 