
import React, { Component } from 'react';
import '../../../assets/styles/projects.css';
import '../../../assets/styles/app.css';
import { Col } from 'react-grid-system';
import Tech from './Tech'
import devpost from '../../../assets/images/devpost.svg'
import hacker_earth from '../../../assets/images/hacker_earth.svg'

class ProjectCard extends Component {
    state = {
    }
  
    render() {
        const devpostButton = this.props.devpostUrl !== undefined ? (<div className="project_devpost">
            <a href={this.props.devpostUrl}><img src={devpost} alt="devpost" /></a>
        </div>) : (<></>)
        const hackerButton = this.props.hackerUrl !== undefined ? (<div className="project_hacker_earth">
            <a href={this.props.hackerUrl}><img src={hacker_earth} alt="hacker_earth" /></a>
        </div>) : (<></>)
        const trophyButton = this.props.trophy !== undefined ? (<div className="project_trophy">
            {this.props.trophy}
        </div>) : (<></>)
        const classes = "project_card  " + this.props.extra_classes 
        return (
            <div className={classes} data-aos="fade-up" data-aos-duration="500">
                <img className="project_logo" alt={this.props.title} src={this.props.img} />
            </div>
        );
    }
}

export default ProjectCard;