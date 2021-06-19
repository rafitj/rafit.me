import React, { Component } from 'react';
import Card from '../../components/Card';

class MainLangCard extends Component {
  render() {
    return (
      <Card color={this.props.color}>
        <img
          src={this.props.img}
          alt={this.props.lang}
          width={this.props.w || 30}
        />
      </Card>
    );
  }
}

export default MainLangCard;
