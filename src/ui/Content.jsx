import React, { Component } from 'react';
import Exp from './Sections/Exp/Exp';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skills';

class Content extends Component {
  render() {
    return (
      <div style={{height: this.props.isVisible ? this.props.height : 0, overflow: 'hidden'}}>
        <div id="content-container">
          <Exp/>
          <Projects/>
          <Skills/>
        </div>
      </div>
    );
  }
}

export default Content;
