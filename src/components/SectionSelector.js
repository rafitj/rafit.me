import React, {Component, Fragment} from 'react';
import '../assets/styles/section_selector.css';
import SectionContext from '../contexts/SectionContext';

class SectionSelector extends Component {
  static contextType = SectionContext;
  onChange = e => {
    this.context.onSectionChange(e.target.id)
  }
  getClass = (color) => {
    return 'circle ' + color + ((color===this.context.section) ?'-active':'');
  }
  render(){
    return (
      <Fragment>
        <div className = "footer">
          <div className = "footer-container">
            <div onClick = {this.onChange} id = "brown" className = {this.getClass("brown")}></div>
            <div onClick = {this.onChange} id = "red" className = {this.getClass("red")} ></div>
            <div onClick = {this.onChange} id = "yellow" className = {this.getClass("yellow")}></div>
            <div onClick = {this.onChange} id = "blue" className = {this.getClass("blue")}></div>
            <div onClick = {this.onChange} id = "purple" className = {this.getClass("purple")}></div>
            <div onClick = {this.onChange} id = "green" className = {this.getClass("green")}></div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SectionSelector;
