import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import LangCard from './LangCard';
import ToolCard from './ToolCard';
import Header from '../Header';
class Skills extends Component {
    render() {
        return (
        <>
          <Header text="Skills"/>
          <Container>
             <Row>
            <Col sm ={4}>
                <LangCard />
            </Col>
            <Col sm ={4}>
                <LangCard />
            </Col>
            <Col sm ={4}>
                <LangCard />
            </Col>
            <Col sm ={4}>
                <LangCard />
            </Col>
           </Row>
          </Container>
          <Container>
             <Row>
            <Col sm ={2}>
                <ToolCard />
            </Col>
            <Col sm ={2}>
                <ToolCard />
            </Col>
            <Col sm ={2}>
                <ToolCard />
            </Col>
            <Col sm ={2}>
                <ToolCard />
            </Col>
           </Row>
          </Container>
          </>
        );
    }
}

export default Skills;
