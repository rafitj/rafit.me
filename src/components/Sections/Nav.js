import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../../assets/styles/nav.css'
class Nav extends Component {
    state = {
        'show': true
    }
      
    render() {
        const Nav = (
            <>
                <Col xs={3}>
                    <div className = "nav_button">
                    </div>
                </Col>
                <Col xs={3}>
                    <div className = "nav_button">
                    </div>
                </Col>
                <Col xs={3}>
                    <div className = "nav_button">
                    </div>
                </Col>
                <Col xs={3}>
                    <div className = "nav_button">
                    </div>
                </Col>
        </>
        )
        const Arrow = (
                <div className ="nav_arrow" onClick={()=>{this.setState({'show':true})}}></div>
        )
        if (this.state.show){
            return(
                <div className = "nav_container" onClick={()=>{this.setState({'show':false})}}>
                <Container>
                    <Row>
                        {Nav}
                    </Row>
                </Container>
                </div>
            )
        }
        return (
            <div>
                {Arrow}
            </div>
            
        );
    }
}

export default Nav;
