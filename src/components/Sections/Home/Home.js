import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../../../assets/styles/home.css'
class Home extends Component {
    render() {
        return (
        <div id = "home">
            <div className = "home_container">
            <Container>
                <Row> 
                <Col>
                <div className = "home_img"></div>
                <p className = "muted_p">Hey, I'm</p>
                <h1 className = "name_header">Rafit Jamil</h1>
                <p className = "muted_p">I’m a Software Engineering Student at UW.</p>
                <p className = "muted_p">I like coffee, football and code.</p>
                <p className = "muted_p">I love meeting new people so get in touch. </p>
                <button className = "home_button"> <i class="fas fa-file-alt"> </i> Resume</button>
                <button className = "home_button"> <i class="fas fa-envelope"> </i> Email</button>
                <button className = "home_button"> <i class="fab fa-github"></i> Github</button>
                </Col>
            </Row>
            </Container>
            </div>
          </div>
        );
    }
}

export default Home;
