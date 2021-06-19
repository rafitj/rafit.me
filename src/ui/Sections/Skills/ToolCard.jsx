import { Space } from 'antd';
import React, { Component } from 'react';
import Card from '../../components/Card';

class ToolCard extends Component {
  render() {
    return (
      <Card color={this.props.color} height={30} width={45}>
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
              height={30}
              style={
                {
                  // filter: `drop-shadow( 0px 0px 2px ${this.props.color})`,
                }
              }
            />
          </div>
        </Space>
      </Card>
    );
  }
}

export default ToolCard;
