import React, { Component } from 'react';
import Card from '../../components/Card';

class ExpCard extends Component {
  render() {
    return (
      <Card color={this.props.color} disabled={this.props.disabled}>
        <img
          alt={this.props.company}
          src={this.props.img}
          style={{
            width: this.props.imgW
              ? `calc(${this.props.imgW} + 0.2vmax)`
              : 'calc(2rem + 0.2vmax)',
          }}
        />
      </Card>
    );
  }
}

export default ExpCard;
