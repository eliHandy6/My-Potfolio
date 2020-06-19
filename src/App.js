import React, { Component } from 'react';
import {Layout,Header,Drawer,Navigation,Content} from "react-mdl"

import './App.css';
import Main from './components/Main';
import { Link } from 'react-router-dom';


class App extends Component {
  render(){

  return (   
<div className="demo-big-content">
    <Layout>
        <Header className="header-color"title="Zack Ogoma Portfolio" scroll>
            <Navigation>

                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contacts</Link>
                
                    
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contacts</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
            
            
        </Content>
    </Layout>
</div>

  );
}
}
export default App;
