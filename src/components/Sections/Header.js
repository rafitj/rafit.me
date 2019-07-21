import React, { Component } from 'react';
import { Container, Row } from 'react-grid-system';
import '../../assets/styles/header.css'
class Header extends Component {
    render() {
        const classes = "header_container " + (this.props.contact ? " less" : "")
        return (
          <Container>
             <Row>
                <div data-aos="fade-right" data-aos-duration = "500" className = {classes}>
                    <h2>{this.props.text}</h2>
                </div>
           </Row>
          </Container>
        );
    }
}

export default Header;
