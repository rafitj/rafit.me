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
                <ProjectCard />
            </Col>
            <Col sm ={6}>
                <ProjectCard />
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
