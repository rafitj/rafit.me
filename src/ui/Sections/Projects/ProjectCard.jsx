import { Space } from 'antd';
import React, { Component } from 'react';
import devpost from '../../../assets/images/other/devpost.svg';
import github from '../../../assets/images/other/github.svg';
import hacker from '../../../assets/images/other/hacker_earth.svg';
import '../../../assets/styles/app.css';
import '../../../assets/styles/projects.css';
import Card from '../../components/Card';
import { openInNewTab } from '../../utils';

class ProjectCard extends Component {
  state = {
    showDetails: false,
  };
  toggleContent = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };
  render() {
    const classes = 'project_card  ' + this.props.extra_classes;
    return (
      <Card
        className={classes}
        width={225}
        height={55}
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
            <div style={{ textAlign: 'center' }}> {this.props.details} </div>
            <Space
              direction="horizontal"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {this.props.devpostUrl && (
                <div onClick={() => openInNewTab(this.props.devpostUrl)}>
                  <img className="proj-link" width={30} src={devpost} alt="devpost" />
                </div>
              )}
              {this.props.hackerUrl && (
                <div onClick={() => openInNewTab(this.props.hackerUrl)}>
                  <img className="proj-link" width={30} src={hacker} alt="hacker" />
                </div>
              )}
              <div onClick={() => openInNewTab(this.props.link)}>
                <img className="proj-link" width={30} src={github} alt="github" />
              </div>
            </Space>
          </Space>
        ) : (
          <Space
            direction="horizontal"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              alt={this.props.title}
              src={this.props.img}
              style={{
                // filter: `drop-shadow( 0px 0px 2px ${this.props.color})`,
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
              <div style={{ marginBottom: 1, fontSize: '80%' }}>
                {this.props.desc}
              </div>
            </div>
          </Space>
        )}
      </Card>
    );
  }
}

export default ProjectCard;
