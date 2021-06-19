import React, { Component } from 'react';
import Exp from './sections/Exp/Exp';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

class Content extends Component {
  state = {
    selected: '',
  };
  onSelect = (t) => {
    if (t === this.state.selected) {
      this.setState({ selected: '' });
    } else {
      this.setState({ selected: t });
    }
  };
  render() {
    return (
      <div
        style={{
          maxHeight: this.props.isVisible ? this.props.height + 75 : 0,
          overflow: 'hidden',
        }}
      >
        <div id="content-container">
          <Exp selected={this.state.selected} onSelect={this.onSelect} />
          <Projects selected={this.state.selected} onSelect={this.onSelect} />
          <Skills selected={this.state.selected} onSelect={this.onSelect} />
        </div>
      </div>
    );
  }
}

export default Content;
