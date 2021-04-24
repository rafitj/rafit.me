import React, { Component } from 'react';
import '../../../assets/styles/projects.css';
import TechNugget from './TechNugget';

class Tech extends Component {
  render() {
    const techNuggets = this.props.data.map((i) => (
      <TechNugget key={i} tech={i} />
    ));
    return (
      <div className="tech_nuggets_set" onClick={this.props.onClose}>
        {techNuggets}
        <div className="close_tech">&lt;</div>
      </div>
    );
  }
}

export default Tech;
