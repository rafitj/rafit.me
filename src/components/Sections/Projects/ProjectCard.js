
import React, { Component } from 'react';
import '../../../assets/styles/projects.css';
import { Col } from 'react-grid-system';

class ProjectCard extends Component {
    render() {
        const classes = "project_card " + this.props.extra_classes
        return (
            <Col sm ={12} md ={6}>
            <div className = {classes} data-aos="fade-up" data-aos-duration = "500">
                <div className = "project_logo">
                    <img alt = {this.props.title} src = {this.props.img} />
                </div>
                <div className = "project_date">
                {this.props.date}
                </div>
                <div className = "project_title">
                {this.props.title}
                </div>
                <div className = "project_desc">
                {this.props.desc}
                </div>
                <div className = "project_git">
                    <a href = {this.props.link}><i class="fab fa-2x fa-github"></i></a>
                </div>
                <div className = "project_view">
                </div>
            </div>
            </Col>
        );
    }
}

export default ProjectCard;