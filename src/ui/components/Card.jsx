import React, { Component } from 'react';
import '../../assets/styles/component.css';

class Card extends Component {
  render() {
    return (
      <div
        onClick={!this.props.disabled && this.props.onClick}
        className={`card`}
        style={{
          // width: `calc(${this.props.width}px + 4.75vmax)`,
          // height: `calc(${this.props.height}px + 1.5vmax)`,
          borderColor: this.props.color,
          opacity: this.props.disabled === true ? 0.25 : 1,
          cursor: this.props.disabled === true ? 'not-allowed' : 'pointer',
          ...this.props.styles,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Card;
