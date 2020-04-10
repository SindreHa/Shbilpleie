import React from 'react';
import './App.css';
import Homepage from './components/Homepage'
import Packs from './components/Packs'
import Faq from './components/Faq'
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
        {/* <Route 
          exact path="/faq" 
          render={props => 
            <Faq/>
          } 
        /> */}
      <Footer/>
    </Router>
  );
}

export default App;
 