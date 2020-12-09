import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../NavBar/Home';
import About from '../NavBar/About';
import Contact from '../NavBar/Contact';
import Skills from '../NavBar/Skills';
import Projects from '../NavBar/Projects'

class PortfolioRoutes extends Component{
    render(){
        return(
            <Router>
            <div>
              <ul>
                <nav className='navbar'>
                    <div className='nav-home'>
                    <li><Link to='/'>Home</Link></li>
                    </div>
                   <div className='nav-links'>
                   <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Skills'>Skills</Link></li>
                    <li><Link to='/Projects'>Projects</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                   </div>
                    
                </nav>
                </ul>
                <Switch>
                    <Route exact path='/'>{Home}</Route>
                    <Route path='/About'>{About}</Route>
                    <Route path='/Skills'>{Skills}</Route>
                    <Route path='/Projects'>{Projects}</Route>
                    <Route path='/Contact'>{Contact}</Route>
                </Switch>
            </div>
            </Router>
        )
    }
} 

export default PortfolioRoutes;