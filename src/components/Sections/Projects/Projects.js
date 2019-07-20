import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ProjectCard from './ProjectCard';
import Header from '../Header';
class Projects extends Component {
    render() {
        return (
        <>
          <Header text="Projects"/>
          <Container>
             <Row>
            <Col sm ={6}>
                <ProjectCard title = "Density" date = "May 2019" extra_classes = "density"/>
            </Col>
            <Col sm ={6}>
                <ProjectCard title = "FrameAR" date = "June 2019" extra_classes = "framear"/>
            </Col>
            <Col sm ={6}>
                <ProjectCard />
            </Col>
            <Col sm ={6}>
                <ProjectCard />
            </Col>
           </Row>
          </Container>
          </>
        );
    }
}

export default Projects;
