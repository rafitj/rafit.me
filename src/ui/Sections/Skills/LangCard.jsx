import { Space } from 'antd';
import React, { Component } from 'react';
import '../../../assets/styles/skills.css';
import Card from '../../components/Card';

class LangCard extends Component {
  render() {
    return (
      <Card color={this.props.color} height={20} width={30}>
        <Space
          direction="horizontal"
          style={{
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex' }}>
            <img
              src={this.props.img}
              alt={this.props.lang}
              height={25}
              style={
                {
                  // filter: `drop-shadow( 0px 0px 2px ${this.props.color})`,
                }
              }
            />
          </div>
          {/* <div style={{ fontSize: '90%' }}>{this.props.title}</div> */}
        </Space>
      </Card>
    );
  }
}

export default LangCard;
