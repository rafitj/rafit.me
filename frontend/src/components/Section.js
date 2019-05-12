import React, {Component, Fragment} from 'react';
import SectionContext from '../contexts/SectionContext';
import Contact from './sections/Contact/Contact';
import Bio from './sections/Bio/Bio';
import Experience from './sections/Experience/Experience';
import Passions from './sections/Passions/Passions';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

class SectionSelector extends Component {
  static contextType = SectionContext;

  renderSection(){
    if (this.context.section === "red"){
      return <Passions/>;
    }
    else if (this.context.section === "brown"){
      return <Bio/>;
    }
    else if (this.context.section === "yellow"){
      return <Experience/>;
    }
    else if (this.context.section === "blue"){
      return <Skills/>;
    }
    else if (this.context.section === "purple"){
      return <Projects/>;
    }
    else if (this.context.section === "green"){
      return <Contact/>;
    }
    else{
      return <div></div>;
    }
  }

  render(){
    console.log(this.context);
    return (
      <Fragment>
        {this.renderSection()}
      </Fragment>
    );
  }
}

export default SectionSelector;
