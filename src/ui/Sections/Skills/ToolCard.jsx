import React, { Component } from 'react';
import Card from '../../components/Card';

class ToolCard extends Component {
  render() {
    return (
      <Card color={this.props.color} height={30} width={45}>
        <img src={this.props.img} alt={this.props.lang} height={30} />
      </Card>
    );
  }
}

export default ToolCard;
