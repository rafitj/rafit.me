import React, { Component } from 'react';
import { Container, Row , Col, Hidden} from 'react-grid-system';
import '../../assets/styles/footer.css'
import Header from './Header';
class Footer extends Component {
    render() {
        return (
          <Container>
            <div id = "contact" data-aos="fade-up" data-aos-duration = "500" className = "footer_container">
             <Header text = "Coffee?" contact/>
             <Row>
                 <Col  xs = {12} sm = {3}></Col>
                <Col xs = {12} sm = {3}>
                <h4 >Get in Touch</h4>
                <i class="fas fa-2x fa-envelope"></i> <i class="fas  fa-2x fa-mobile"></i> <i class="fas  fa-2x fa-map-marker-alt"></i> 
                </Col>
                <Col xs = {12} sm = {3}>
                <h4>Follow and Connect</h4>
                <i class="fab fa-2x fa-linkedin"></i> <i class="fab fa-2x fa-github"></i> <i class="fab fa-2x fa-dribbble-square"></i>
                </Col>
                <Col  xs = {12} sm = {3}></Col>
           </Row>
           <br/>
            <br/>
            <h5>Copyright © 2019 Rafit Jamil. All rights reserved.</h5>
            </div>
          </Container>
        );
    }
}

export default Footer;
