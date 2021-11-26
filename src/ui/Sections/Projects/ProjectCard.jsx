import { Popover } from 'antd';
import React, { Component } from 'react';
import devpost from '../../../assets/images/other/devpost.svg';
import github from '../../../assets/images/other/github.svg';
import hacker from '../../../assets/images/other/hacker_earth.svg';
import '../../../assets/styles/app.css';
import Card from '../../components/Card';
import { openInNewTab } from '../../utils';

class ProjectCard extends Component {
  render() {
    return (
      <Popover
        placement="bottom"
        onClick={() => this.props.onSelect(this.props.title)}
        content={
          <div
            style={{
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
            {this.props.devpostUrl && (
              <img
                onClick={() => openInNewTab(this.props.devpostUrl)}
                className="proj-link"
                src={devpost}
                alt="devpost"
              />
            )}
            {this.props.hackerUrl && (
              <img
                onClick={() => openInNewTab(this.props.hackerUrl)}
                className="proj-link"
                src={hacker}
                alt="hacker"
              />
            )}
            <img
              onClick={() => openInNewTab(this.props.link)}
              className="proj-link"
              src={github}
              alt="github"
            />
          </div>
        }
        trigger="click"
        destroyTooltipOnHide={true}
        visible={this.props.selected}
        // onVisibleChange={}
      >
        <Card color={this.props.color}>
          <img
            alt={this.props.title}
            src={this.props.img}
            className={
              this.props.selected || this.props.noneSelected
                ? 'popover-selected'
                : 'popover-unselected'
            }
            style={{
              width: 'calc(2rem + 0.9vw)',
            }}
          />
        </Card>
      </Popover>
    );
  }
}

export default ProjectCard;
