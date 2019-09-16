
import React, { Component } from 'react';
import '../../../assets/styles/projects.css';
import '../../../assets/styles/app.css';
import { Col } from 'react-grid-system';
import Tech from './Tech'
import devpost from '../../../assets/images/devpost.svg'
import hacker_earth from '../../../assets/images/hacker_earth.svg'

class ProjectCard extends Component {
    state = {
        showTech: false,
        showDetails: false
    }
    toggleTech = () => {
        this.setState(prevState => ({
            showTech: !prevState.showTech
        }));
    }
    toggleDetails = () => {
        this.setState(prevState => ({
            showDetails: !prevState.showDetails
        }));
    }
    render() {
        const devpostButton = this.props.devpostUrl !== undefined ? (<div onClick={this.toggleDetails} className="project_devpost">
            <a href={this.props.devpostUrl}><img src={devpost} alt="devpost" /></a>
        </div>) : (<></>)
        const hackerButton = this.props.hackerUrl !== undefined ? (<div onClick={this.toggleDetails} className="project_hacker_earth">
            <a href={this.props.hackerUrl}><img src={hacker_earth} alt="hacker_earth" /></a>
        </div>) : (<></>)
        const trophyButton = this.props.trophy !== undefined ? (<div className="project_trophy">
            {this.props.trophy}
        </div>) : (<></>)
        const classes = "project_card  " + this.props.extra_classes + (this.state.showDetails ? " clicked" : "")
        return (
            <Col sm={12} md={12} xl={12}>
                <div data-aos="fade-up" data-aos-duration="500">
                    <div onClick={this.toggleDetails} className={classes} >
                        <img className={this.state.showDetails ? "project_logo_expanded" : "project_logo"} alt={this.props.title} src={this.props.img} />
                        <div className="project_date">
                            {this.props.date}
                        </div>
                        <div className="project_title">
                            {this.props.title}
                        </div>
                        {trophyButton}
                        {hackerButton}
                        {devpostButton}
                        <div onClick={this.toggleDetails} className="project_git">
                            <a href={this.props.link}><i className="fab fa-2x fa-github"></i></a>
                        </div>
                        <div className="project_desc">
                            {(this.props.desc)}
                        </div>
                        <div className={"project_details " + (this.state.showDetails ? "" : "hide_details")}>
                            {this.props.detail}
                        </div>

                        <div className="tech" onClick={this.toggleDetails}>
                            <div className={"tech_nuggets " + (this.state.showTech ? "" : "hide_nuggets") + (this.props.techData.length > 3 && !this.state.showTech ? " four_nugs" : "") + (this.props.techData.length > 4 && !this.state.showTech ? " five_nugs" : "")} >
                                <Tech onClose={this.toggleTech} data={this.props.techData} />
                            </div>
                            <p onClick={this.toggleTech} className={"view_tech " + (this.state.showTech ? "hide_tech" : "")}> View Tech  ></p>
                        </div>

                    </div>
                </div>
            </Col>

        );
    }
}

export default ProjectCard;