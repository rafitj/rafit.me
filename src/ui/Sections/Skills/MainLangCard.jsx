import { Space } from 'antd';
import React, { Component } from 'react';
import '../../../assets/styles/skills.css';
import Card from '../../components/Card';

class MainLangCard extends Component {
  render() {
    return (
      <Card color={this.props.color} width={100}>
        <Space direction="vertical" style={{ textAlign: 'center' }}>
          <img
            src={this.props.img}
            alt={this.props.lang}
            width={50}
            style={{
              filter: `drop-shadow( 0px 0px 2px ${this.props.color})`,
            }}
          />
          <div>{this.props.title}</div>
        </Space>
      </Card>
    );
  }
}

export default MainLangCard;
