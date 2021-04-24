import React, { Component } from 'react';
import devpost from '../../../assets/images/devpost.svg';
import hacker_earth from '../../../assets/images/hacker_earth.svg';
import '../../../assets/styles/app.css';
import '../../../assets/styles/projects.css';

class ProjectCard extends Component {
  state = {};

  render() {
    const devpostButton =
      this.props.devpostUrl !== undefined ? (
        <div className="project_devpost">
          <a href={this.props.devpostUrl}>
            <img src={devpost} alt="devpost" />
          </a>
        </div>
      ) : (
        <></>
      );
    const hackerButton =
      this.props.hackerUrl !== undefined ? (
        <div className="project_hacker_earth">
          <a href={this.props.hackerUrl}>
            <img src={hacker_earth} alt="hacker_earth" />
          </a>
        </div>
      ) : (
        <></>
      );
    const trophyButton =
      this.props.trophy !== undefined ? (
        <div className="project_trophy">{this.props.trophy}</div>
      ) : (
        <></>
      );
    const classes = 'project_card  ' + this.props.extra_classes;
    return (
      <div className={classes}>
        <img
          className="project_logo"
          alt={this.props.title}
          src={this.props.img}
        />
      </div>
    );
  }
}

export default ProjectCard;
