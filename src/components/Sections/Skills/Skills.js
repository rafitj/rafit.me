import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import LangCard from './LangCard';
import ToolCard from './ToolCard';
import Header from '../Header';
import Python from '../../../assets/images/langs/Python.svg';
import JS from '../../../assets/images/langs/JS.svg';
import CPlus from '../../../assets/images/langs/CPlus.svg';
import C from '../../../assets/images/langs/C.svg';
import Swift from '../../../assets/images/langs/Swift.svg';
import SQL from '../../../assets/images/langs/SQL.svg';
import HTML from '../../../assets/images/langs/HTML+CSS.svg';

class Skills extends Component {
    render() {
        return (
        <section id = "skills">
          <Header text="Skills"/>
          <Container>
             <Row>
            <Col sm ={3}>
                <LangCard img = {Python} lang = "Python" extra_classes = "python" />
            </Col>
            <Col sm ={3}>
                <LangCard img = {JS}  lang = "Javascript" extra_classes = "js" />
            </Col>
            <Col sm ={3}>
                <LangCard img = {Swift} lang = "Swift" extra_classes = "swift" />
            </Col>
            <Col sm ={3}>
            <LangCard img = {CPlus} lang = "C++" extra_classes = "cplus" />
            </Col>
            <Col sm ={3}>
            <LangCard img = {C} lang = "C" extra_classes = "c" />
            </Col>
            <Col sm ={3}>
                <LangCard img = {SQL} lang = "SQL" extra_classes = "sql" />
            </Col>
            <Col sm ={3}>
                <LangCard img = {HTML} lang = "HTML/CSS" extra_classes = "html" />
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
          </section>
        );
    }
}

export default Skills;
