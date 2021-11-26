import React, { Component } from 'react';
import '../../assets/styles/component.css';

class Card extends Component {
  render() {
    return (
      <div
        onClick={!this.props.disabled && this.props.onClick}
        className={`card`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Card;
