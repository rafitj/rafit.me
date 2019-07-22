import React, { Component } from 'react';
import { Container, Row } from 'react-grid-system';
import ProjectCard from './ProjectCard';
import Header from '../Header';
import ProjectModal from './ProjectModal';
import framear from '../../../assets/images/projects/FrameAR.svg'
import density from '../../../assets/images/projects/Density.png'
import pseudo from '../../../assets/images/projects/PseudoLogo.svg'
class Projects extends Component {
      state = {
        showModal: false,
    }
    onHide=()=>{
        this.setState({showModal:false})
    }
    openEmail=()=>{
        this.setState({showModal:true})
    }
    render() {
        return (
        <section id = "projects">
          <Header text="Projects"/>
          {/* <ProjectModal onClick={this.onHide} class = "density" show = {this.state.showModal} onHide = {this.onHide}
                header = "Email is the best way to reach me!" text = "rafit.jamil@gmail.com"/> */}
          <Container>
             <Row>
                <ProjectCard img = {density} title = "Density" date = "May 2019" extra_classes = "density"
                            desc = "Population density tracking and analytics via passive wifi-detection"
                            link = "https://github.com/rafitj/density"/>
                <ProjectCard img = {framear} title = "FrameAR" date = "June 2019" extra_classes = "framear"
                              desc = "Custom version control system and AR visualization for 3D CAD"
                              link = "https://github.com/rafitj/framear"/>
                <ProjectCard img = {pseudo} title = "Pseudo" date = "April 2019" extra_classes = "pseudo"
                            desc = "Micro-freelancing for developers, designers and creators"
                            link = "https://github.com/rafitj/pseudo-project"/>
           </Row>
          </Container>
          </section>
        );
    }
}

export default Projects;
