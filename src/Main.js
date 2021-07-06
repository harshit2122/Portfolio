import React from 'react';
import './App.css';
import Navbar from './components/navbarsection/navbar';
import LeftSection from './components/leftsection/leftsection';
import Navigation from './components/navigationsection/navigation';
import Overview from './components/overviewsection/overview';
import Project from './components/projectsection/project';
import Experience from './components/experiencesection/experience';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Mains() {
  return (
    <Router>
     <Navbar />
     <LeftSection />
      <Navigation />
      <Switch>
      <Route exact path="/"> <Overview/> </Route>
      <Route path="/projects"> <Project /></Route>
      <Route path="/experience"><Experience /></Route>
      </Switch>
      </Router>
  );
}

export default Mains;
