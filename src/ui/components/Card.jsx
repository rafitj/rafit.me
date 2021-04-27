import React, { Component } from 'react';
import '../../assets/styles/component.css';

class Card extends Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={`card`}
        style={{
          width: this.props.width,
          height: this.props.height,
          borderColor: this.props.color,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Card;
