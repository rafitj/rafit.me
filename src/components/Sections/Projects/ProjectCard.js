
import React, { Component } from 'react';
import '../../../assets/styles/projects.css';
import { Col } from 'react-grid-system';
import Tech from './Tech'
class ProjectCard extends Component {
    state = {
        showTech: false
    }
    toggleTech = () =>{
        const newState = !this.state.showTech
        this.setState({showTech: newState})
    }
    render() {
        const classes = "project_card " + this.props.extra_classes
        return (
            <Col sm ={12} md ={12} xl ={12}>
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
                    <a href = {this.props.link}><i className="fab fa-2x fa-github"></i></a>
                </div>
                <div className = "tech">
                    <p onClick = {this.toggleTech} className = { "view_tech " + (this.state.showTech ? "hide_tech" : "")}> View Tech  ></p>
                    <div className =  { "tech_nuggets " + (this.state.showTech ? "" : "hide_nuggets")}>
                        <Tech onClose = {this.toggleTech} data = {this.props.techData}/>
                    </div>
                </div>
                {/* <div onClick = {this.props.onClick} className = "project_view">
                </div> */}
            </div>
            </Col>
        );
    }
}

export default ProjectCard;