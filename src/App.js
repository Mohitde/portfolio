import React from "react";
import Navigation from "./component/navigation/Navigation";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Intro from "./component/intro/Intro";
import {Route,Switch} from 'react-router-dom';
import Contact from "./component/contact/Contact";
import Project from "./component/projects/Project";
import About from "./component/About/About";
import './App.css';
const App =()=>{
  return(
    <>
    <Navigation/>
   <Switch>
     <Route exact path='/'><Intro/></Route>
     <Route exact path='/about'><About/></Route>
     <Route exact path='/projects'><Project/></Route>
     <Route exact path='/contact'><Contact/></Route>
   </Switch>
   </>
  );
}

export default App;