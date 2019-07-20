
import React, { Component } from 'react';
import '../../../assets/styles/projects.css'
class ProjectCard extends Component {
    render() {
        const classes = "project_card " + this.props.extra_classes
        return (
            <div className = {classes} data-aos="fade-up" data-aos-duration = "500">
                <div className = "project_logo">
                </div>
                <div className = "project_date">
                {this.props.date}
                </div>
                <div className = "project_title">
                {this.props.title}
                </div>
                <div className = "project_desc">
                Lorem ipsum
                </div>
                <div className = "project_git">
                </div>
                <div className = "project_view">
                </div>
            </div>
        );
    }
}

export default ProjectCard;