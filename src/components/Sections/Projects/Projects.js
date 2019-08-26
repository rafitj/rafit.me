import React, { Component } from 'react';
import { Container, Row } from 'react-grid-system';
import ProjectCard from './ProjectCard';
import Header from '../Header';
import ProjectModal from './ProjectModal';
import framear from '../../../assets/images/projects/FrameAR.svg'
import density from '../../../assets/images/projects/Density.png'
import pseudo from '../../../assets/images/projects/PseudoLogo.svg'
import realm from '../../../assets/images/projects/Realm.svg'
class Projects extends Component {
      state = {
        showModal: false,
        modalData: null
    }
    closeModal=()=>{
        this.setState({showModal:false})
    }
    openModal=(e)=>{
        console.log(e)
        this.setState({showModal:true})
    }
    render() {
        return (
        <section id = "projects">
          <Header text="Projects"/>
          <ProjectModal onClick={this.closeModal} class = "density" show = {this.state.showModal} onHide = {this.closeModal}
                data = {this.state.modalData}/>
          <Container style = {{maxWidth: 'none'}}>
             <Row>
                <ProjectCard img = {realm} title = "Realm" date = "August 2019" extra_classes = "realm"
                            desc = "Virtual, immersive AR and ML enhanced presentation software"
                            link = "https://github.com/rafitj/realm"
                            techData = {["AWS","React","Swift"]}/>
                <ProjectCard img = {density} title = "Density" date = "May 2019" extra_classes = "density"
                            desc = "Population density tracking and analytics via passive wifi-detection"
                            link = "https://github.com/rafitj/density"
                            onClick = {this.openModal}
                            techData = {["Node","Arduino","C++","React"]}/>
                <ProjectCard img = {framear} title = "FrameAR" date = "June 2019" extra_classes = "framear"
                              desc = "Custom version control system and AR visualization for 3D CAD"
                              link = "https://github.com/rafitj/framear" 
                              techData = {["Swift","JS","MongoDB"]}/>
                <ProjectCard img = {pseudo} title = "Pseudo" date = "April 2019" extra_classes = "pseudo"
                            desc = "Micro-freelancing for developers, designers and creators"
                            link = "https://github.com/rafitj/pseudo-project"
                            techData = {["Django","React","AWS"]}/>
           </Row>
          </Container>
          </section>
        );
    }
}

export default Projects;
