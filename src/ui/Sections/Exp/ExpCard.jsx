import { Space } from 'antd';
import React, { Component } from 'react';
import '../../../assets/styles/experience.css';
import Card from '../../components/Card';

class ExpCard extends Component {
  state = {
    showDetails: false,
  };
  toggleContent = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };
  render() {
    return (
      <Card
        width={225}
        height={45}
        color={this.props.color}
        onClick={this.toggleContent}
        disabled={this.props.disabled}
        // styles={{flex: '0 21%'}}
      >
        {this.state.showDetails ? (
          <Space
            direction="vertical"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '0 15px',
            }}
          >
            <div
              style={{ textAlign: 'center', fontSize: '75%', lineHeight: 1.5 }}
              className="details"
            >
              {this.props.details}{' '}
            </div>
            {/* <div className="link" onClick={() => openInNewTab(this.props.link)}>
              Learn More
            </div> */}
          </Space>
        ) : (
          <Space
            direction="horizontal"
            size="middle"
            style={{ display: 'flex', alignItems: 'center', padding: '0 5px' }}
          >
            <div style={{ height: '100%', display: 'flex' }}>
              <img
                alt={this.props.company}
                src={this.props.img}
                style={{
                  // filter: `drop-shadow( 0px 0px 3px ${this.props.color})`,
                  width: this.props.imgW ? `calc(${this.props.imgW } + 0.5vmax)`: 'calc(2rem + 0.5vmax)',
                }}
              />
            </div>
            <div style={{ flexDirection: 'column', display: 'flex' }}>
              <div
                style={{
                  fontWeight: 'bold',
                  fontSize: 'calc(100% + 0.3vmax)',
                  marginBottom: 2,
                }}
              >
                {this.props.title}
              </div>
              {/* <div style={{ marginBottom: 2, fontSize: '90%' }}>
                {this.props.desc}
              </div> */}
              <div
                style={{ opacity: 0.75, fontSize: 'calc(80% + 0.3vmax)' }}
                className="details"
              >
                {this.props.date}
              </div>
            </div>
          </Space>
        )}
      </Card>
    );
  }
}

export default ExpCard;
