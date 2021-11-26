import { Popover } from 'antd';
import React, { Component } from 'react';
import Card from '../../components/Card';

class ExpCard extends Component {
  render() {
    return (
      <Popover
        placement="bottom"
        onClick={() => this.props.onSelect(this.props.title)}
        content={
          <div
            style={{
              color: '#c3c3c3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#333333',
              borderRadius: 5,
              padding: '3.5px 7px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              opacity: this.props.selected ? 1 : 0,
            }}
          >
            <div className="small-2">{this.props.title}</div>
            <div className="small-3">(SWE Intern)</div>
          </div>
        }
        trigger="click"
        destroyTooltipOnHide={true}
        visible={this.props.selected}
      >
        <Card color={this.props.color} disabled={this.props.disabled}>
          <img
            alt={this.props.company}
            src={this.props.img}
            style={{
              width: this.props.imgW
                ? `calc(${this.props.imgW} + 0.4vmax)`
                : 'calc(1.5rem + 0.4vmax)',
            }}
            
          />
          {/* {this.props.title} */}
        </Card>
      </Popover>
    );
  }
}

export default ExpCard;
