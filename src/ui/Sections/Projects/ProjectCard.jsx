import { Popover } from 'antd';
import React, { Component } from 'react';
// import devpost from '../../../assets/images/other/devpost.svg';
// import github from '../../../assets/images/other/github.svg';
// import hacker from '../../../assets/images/other/hacker_earth.svg';
import '../../../assets/styles/app.css';
import Card from '../../components/Card';
// import { openInNewTab } from '../../utils';

class ProjectCard extends Component {
  render() {
    return (
      <Popover
        placement="bottom"
        style={{width: 'auto'}}
        content={
          <>{this.props.details}
            {/* <Space
              direction="horizontal"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {this.props.devpostUrl && (
                <div onClick={() => openInNewTab(this.props.devpostUrl)}>
                  <img
                    className="proj-link"
                    width={30}
                    src={devpost}
                    alt="devpost"
                  />
                </div>
              )}
              {this.props.hackerUrl && (
                <div onClick={() => openInNewTab(this.props.hackerUrl)}>
                  <img
                    className="proj-link"
                    width={30}
                    src={hacker}
                    alt="hacker"
                  />
                </div>
              )}
              <div onClick={() => openInNewTab(this.props.link)}>
                <img
                  className="proj-link"
                  width={30}
                  src={github}
                  alt="github"
                />
              </div>
            </Space> */}
            </>
        }
        trigger="click"
        visible={this.props.isSelected}
        // onVisibleChange={() => this.props.onSelect(this.props.title)}
      >
        <Card
          className={'project_card'}
          width={10}
          height={20}
          color={this.props.color}
          onClick={this.toggleContent}
        >
          <img
            alt={this.props.title}
            src={this.props.img}
            style={{
              width: 'calc(2rem + 0.9vmax)',
            }}
          />
        </Card>
      </Popover>
    );
  }
}

export default ProjectCard;
