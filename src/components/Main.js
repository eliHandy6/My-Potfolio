import React from 'react';
import { Route,Switch } from 'react-router-dom';
import LandingPage from "./landingpage";
import Projects from "./projects"
import Resume from "./resume"
import Contacts from "./contacts"
import About from "./aboutme"



const Main =()=>(
    <Switch>
        <Route exact path = "/" component={LandingPage}/>
        <Route exact path = "/projects" component={Projects}/>
        <Route exact path = "/resume" component={Resume}/>
        <Route exact path = "/contacts" component={Contacts}/>
        <Route exact path = "/about" component={About}/>
        

    </Switch>
)

export default Main;