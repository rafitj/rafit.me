import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../../assets/styles/header.css'
class Header extends Component {
    render() {
        return (
          <Container>
             <Row>
            <Col sm ={4}>
                <div className = "header_container">
                    <h2>{this.props.text}</h2>
                </div>
                
            </Col>
           </Row>
          </Container>
        );
    }
}

export default Header;
