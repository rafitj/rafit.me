import { Space } from 'antd';
import React, { Component } from 'react';
import '../../../assets/styles/skills.css';
import Card from '../../components/Card';

class LangCard extends Component {
  render() {
    return (
      <Card color={this.props.color} height={15} width={105}>
        <Space direction="horizontal" style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
          <div style={{display: 'flex'}}>
        <img
          src={this.props.img}
          alt={this.props.lang}
          height={30}
        />
        </div>
        <div>
        {this.props.title}
        </div>
        </Space>
      </Card>
    );
  }
}

export default LangCard;
