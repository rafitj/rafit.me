import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ExpCard from './ExpCard';
import Header from '../Header';
class Exp extends Component {
    render() {
        return (
        <>
          <Header text = "Experience"/>
          <Container>
             <Row>
            <Col sm ={6}>
                <ExpCard />
            </Col>
            <Col sm ={6}>
                <ExpCard />
            </Col>
            <Col sm ={6}>
                <ExpCard />
            </Col>
            <Col sm ={6}>
                <ExpCard />
            </Col>
           </Row>
          </Container>
          </>
        );
    }
}

export default Exp;
