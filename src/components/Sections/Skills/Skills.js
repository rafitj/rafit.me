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
                <LangCard lang = "Python" extra_classes = "python" />
            </Col>
            <Col sm ={4}>
                <LangCard lang = "Javascript" extra_classes = "js" />
            </Col>
            <Col sm ={4}>
            <LangCard lang = "C++" extra_classes = "cplus" />
            </Col>
            <Col sm ={4}>
            <LangCard lang = "C" extra_classes = "c" />
            </Col>
            <Col sm ={4}>
                <LangCard lang = "SQL" extra_classes = "sql" />
            </Col>
            <Col sm ={4}>
                <LangCard lang = "HTML/CSS" extra_classes = "html" />
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
