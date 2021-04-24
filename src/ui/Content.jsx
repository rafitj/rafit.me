import AOS from 'aos';
import React, { Component } from 'react';
import Exp from './Sections/Exp/Exp';
import Footer from './Sections/Footer';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skills';

class Content extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <>
        <Exp />
        <Projects />
        <Skills />
        <Footer />
      </>
    );
  }
}

export default Content;
