import React, { Component } from 'react';
import Projects from './Sections/Projects/Projects';
import Home from './Sections/Home/Home';
import Exp from './Sections/Exp/Exp';
import Skills from './Sections/Skills/Skills';
import Nav from './Sections/Nav';
import AOS from 'aos';

class Content extends Component {
    componentDidMount(){
      AOS.init();
    }
    render() {
        return (
          <>
            <Home />
            <Projects />
            <Exp />
            <Skills />
            <Nav />
          </>
        );
    }
}

export default Content;
