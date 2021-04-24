import React, { Component } from 'react';
import Projects from './Sections/Projects/Projects';
import Exp from './Sections/Exp/Exp';
import Skills from './Sections/Skills/Skills';
import Nav from './Sections/Nav';
import Footer from './Sections/Footer';
import AOS from 'aos';

class Content extends Component {
    componentDidMount(){
      AOS.init();
    }
    render() {
        return (
          <>
            <Exp />
            <Projects />
            <Skills />
            <Footer/>
            <Nav />
          </>
        );
    }
}

export default Content;
