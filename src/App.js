import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage'
import Header from './components/Header'
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
    </Router>
  );
}

export default App;
 