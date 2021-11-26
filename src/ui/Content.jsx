import React, { Component } from 'react';
import Exp from './sections/Exp/Exp';
import Projects from './sections/Projects/Projects';

class Content extends Component {
  state = {
    selected: '',
  };
  cards = document.getElementsByClassName('card');
  onSelect = (t) => {
    if (t === this.state.selected) {
      this.setState({ selected: '' });
    } else {
      this.setState({ selected: t });
    }
  };
  componentDidMount() {
    window.addEventListener('click', (e) => {
      const outside = Array.from(this.cards).every(
        (card) => !card.contains(e.target)
      );
      if (outside) {
        this.setState({ selected: '' });
      }
    });
  }
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
          {/* <Skills selected={this.state.selected} onSelect={this.onSelect} /> */}
        </div>
      </div>
    );
  }
}

export default Content;
