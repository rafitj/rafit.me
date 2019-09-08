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
        modalData: null,
        loadAll: false
    }
    closeModal=()=>{
        this.setState({showModal:false})
    }
    openModal=(e)=>{
        console.log(e)
        this.setState({showModal:true})
    }
    toggleAll=()=>{
        const prev = this.state.loadAll
        this.setState({loadAll:!prev})
    }
    render() {
        if (this.state.loadAll){
            var rest = (
                <>
                    <ProjectCard img = {realm} title = "Gaze" date = "August 2019" extra_classes = "realm"
                                                desc = "Gaze tracking detection and analytics"
                                                link = "https://github.com/rafitj/gaze"
                                                techData = {["Python","Cassandra","Flask"]}/>
                    <ProjectCard img = {realm} title = "Echo" date = "October 2018" extra_classes = "realm"
                        desc = "Gesture controlled laptop"
                        link = "https://github.com/rafitj/echo"
                        techData = {["Python","C++"]}/>
                </>
            );
        } else {
            rest = (<></>)
        }
        
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
                            techData = {["AWS","React","Swift"]}
                            detail = "Our inspiration stemmed from our fascination in the growing fields of AR and virtual worlds, from full-body tracking to 3D-visualization. We were interested in realizing ideas in this space, specifically with sensor detecting movements and seamlessly integrating 3D gestures. We felt that the prime way we could display our interest in this technology and the potential was to communicate using it. This is what led us to create Realm, a technology that allows users to create dynamic, collaborative, presentations with voice commands, image searches and complete body-tracking for the most customizable and interactive presentations. We envision an increased ease in dynamic presentations and limitless collaborative work spaces with improvements to technology like Realm."
                            />
                <ProjectCard img = {density} title = "Density" date = "May 2019" extra_classes = "density"
                            desc = "Population density tracking and analytics via passive wifi-detection"
                            link = "https://github.com/rafitj/density"
                            onClick = {this.openModal}
                            techData = {["Node","Arduino","C++","React"]}
                            detail = "In a world with such a prominent integration of technology, we continue to struggle in the task of gathering quantitative data on human behaviour. With density, we provide a software solution to modelling human movement and density patterns through data collected through smartphone locations. This technology provides an innovate solution to many global issues such as emergency service response times, inventory systems and improves accessibility.
                                    \n In essence, our project can anonymously collect data from the billions of wifi frames that are broadcast by smart devices every day, and apply them to generate location data around a localized area. This localized area consists of boundaries we define, and can be to any scale we want. E.g. A small room or an entire football field. The only difference is the number of collectors. For about every 25 sq. ft, we need about 4 ESP8266 microcontrollers, which are basically Arduinos with built in 2.4Ghz wifi support, and are also ridiculously cheap (about 1$ a piece!). With this robust collection framework in place, we also form a mesh network between the ESP8266s to transmit data seamlessly without having to resort to external means (all transported on a WPA2 network with AES encryption)."
                            />
                <ProjectCard img = {framear} title = "FrameAR" date = "June 2019" extra_classes = "framear"
                              desc = "Custom version control system and AR visualization for 3D CAD"
                              link = "https://github.com/rafitj/framear" 
                              techData = {["Swift","JS","MongoDB"]}
                                detail = "Despite there being 40 million Sketckup, Maya and 3D software users in an industry worth over $56 billion, mechanical engineers, architects, designers, etc, lack a way to instantly display and receive live edits on their 3D renderings or experience the full power of version control that us software engineers are so familiar with. FrameAR is a multi-platform application that fills this gap through the creation of a version control system where users can track live commits in slack and instantly view edits and their models in augmented reality with the full power of branches, comparisons and merging from the VCS. FrameAR looks to provide creative teams new and dynamic means of collaboration to interact with the newest, greatest technologies." 
                              />
                <ProjectCard img = {pseudo} title = "Pseudo" date = "April 2019" extra_classes = "pseudo"
                            desc = "Micro-freelancing for developers, designers and creators"
                            link = "https://github.com/rafitj/pseudo-project"
                            techData = {["Django","React","AWS"]}/>
                {rest}
                <div data-aos = "fade" onClick = {this.toggleAll} className = "load_more">
                    {this.state.loadAll ? "See Less" : "Load More"} <br/>
                </div>
           </Row>
          </Container>
          </section>
        );
    }
}

export default Projects;
