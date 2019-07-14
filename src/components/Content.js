import React, { Component, Fragment } from 'react';
import Home from './Sections/Home';
import Projects from './Sections/Projects/Projects';
import Exp from './Sections/Exp/Exp';
import Skills from './Sections/Skills/Skills';
import Nav from './Sections/Nav';

class Content extends Component {
    render() {
        return (
          <>
            <Projects />
            <Exp />
            <Skills />
            <Nav />
          </>
        );
    }
}

export default Content;
