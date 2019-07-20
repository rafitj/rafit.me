import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ProjectCard from './ProjectCard';
import Header from '../Header';
import framear from '../../../assets/images/projects/FrameAR.svg'
import density from '../../../assets/images/projects/Density.png'

class Projects extends Component {
    render() {
        return (
        <section id = "projects">
          <Header text="Projects"/>
          <Container>
             <Row>
            <Col sm ={6}>
                <ProjectCard img = {density} title = "Density" date = "May 2019" extra_classes = "density"/>
            </Col>
            <Col sm ={6}>
                <ProjectCard img = {framear} title = "FrameAR" date = "June 2019" extra_classes = "framear"/>
            </Col>
            <Col sm ={6}>
                <ProjectCard />
            </Col>
            <Col sm ={6}>
                <ProjectCard />
            </Col>
           </Row>
          </Container>
          </section>
        );
    }
}

export default Projects;
