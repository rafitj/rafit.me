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
        width={300}
        height={60}
        color={this.props.color}
        onClick={this.toggleContent}
      >
        {this.state.showDetails ? (
          <Space
            direction="vertical"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '0 5px',
            }}
          >
            <div style={{ textAlign: 'center', fontSize: '95%', lineHeight: 1.5 }}>
              {' '}
              {this.props.details}{' '}
            </div>
            {/* <div className="link" onClick={() => openInNewTab(this.props.link)}>
              Learn More
            </div> */}
          </Space>
        ) : (
          <Space
            direction="horizontal"
            size="large"
            style={{ display: 'flex', alignItems: 'center', padding: '0 5px' }}
          >
            <img
              alt={this.props.company}
              src={this.props.img}
              style={{
                // filter: `drop-shadow( 0px 0px 3px ${this.props.color})`,
                width: this.props.imgW ? this.props.imgW : '3rem',
              }}
            />
            <div style={{ flexDirection: 'column', display: 'flex' }}>
              <div
                style={{
                  fontWeight: 'bold',
                  fontSize: '120%',
                  marginBottom: 2,
                }}
              >
                {this.props.title}
              </div>
              <div style={{ marginBottom: 2, fontSize: '90%' }}>
                {this.props.desc}
              </div>
              <div style={{ opacity: 0.75, fontSize: '80%' }}>
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
