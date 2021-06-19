import React, { Component } from 'react';
import Card from '../../components/Card';

class MainLangCard extends Component {
  render() {
    return (
      <Card color={this.props.color} onClick={this.props.onSelect}>
        <img
          className={
            this.props.selected === ''
              ? 'popover-selected'
              : 'popover-unselected'
          }
          src={this.props.img}
          alt={this.props.lang}
          width={this.props.w || 30}
        />
      </Card>
    );
  }
}

export default MainLangCard;
