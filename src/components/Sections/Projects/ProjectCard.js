
import React, { Component } from 'react';
import '../../../assets/styles/projects.css';
import { Col } from 'react-grid-system';
import Tech from './Tech'
class ProjectCard extends Component {
    state = {
        showTech: false,
        showDetails: false
    }
    toggleTech = () =>{
        this.setState(prevState => ({
            showTech: !prevState.showTech
          }));
    }
    toggleDetails = () =>{
        this.setState(prevState => ({
            showDetails: !prevState.showDetails
          }));
    }
    render() {
        const classes = "project_card " + this.props.extra_classes
        return (
            <Col sm ={12} md ={12} xl ={12}>
            <div onClick = {this.toggleDetails} className = {classes} data-aos="fade-up" data-aos-duration = "500">
                <div className = {this.state.showDetails ? "project_logo_expanded" : "project_logo"}>
                    <img alt = {this.props.title} src = {this.props.img} />
                </div>
                <div className = "project_date">
                {this.props.date}
                </div>
                <div className = "project_title">
                {this.props.title}
                </div>
                <div className = "project_git">
                    <a href = {this.props.link}><i className="fab fa-2x fa-github"></i></a>
                </div>
                <div className = "project_desc">
                {this.props.desc}
                </div>
                <div className = {"project_details " + (this.state.showDetails ? "" : "hide_details")}>
                    {this.props.detail}
                </div>

                <div className = "tech" onClick = {this.toggleDetails}>
                    <div className =  { "tech_nuggets " + (this.state.showTech ? "" : "hide_nuggets") + (this.props.techData.length > 3 && !this.state.showTech ? " four_nugs" : "")}>
                        <Tech onClose = {this.toggleTech} data = {this.props.techData}/>
                    </div>
                    <p onClick = {this.toggleTech} className = { "view_tech " + (this.state.showTech ? "hide_tech" : "")}> View Tech  ></p>
                </div>
                
            </div>
            </Col>
        );
    }
}

export default ProjectCard;