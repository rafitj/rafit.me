import React, { Component } from 'react';
import '../../../assets/styles/skills.css';
import Card from '../../components/Card';

class MainLangCard extends Component {
  render() {
    return (
      <Card color={this.props.color} width={45} height={30}>
        {/* <Space direction="vertical" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}> */}
        <img
          src={this.props.img}
          alt={this.props.lang}
          width={30}
          style={
            {
              // filter: `drop-shadow( 0px 0px 2px ${this.props.color})`,
            }
          }
        />
        {/* <div>{this.props.title}</div> */}
        {/* </Space> */}
      </Card>
    );
  }
}

export default MainLangCard;
