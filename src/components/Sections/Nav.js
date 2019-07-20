import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../../assets/styles/nav.css'
import nav_arrow from '../../assets/images/nav_arrow.svg'
class Nav extends Component {
    state = {
        'show': true
    }

    getNavClass = () => {
        return "nav_container " + (this.state.show ? " " : " hide_nav");
    }
    getArrowClass = () => {
        return "nav_arrow " + (this.state.show ? "hide_arrow" : " ");
    }
      
    render() {
        console.log(this.getNavClass())
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
        return(
            <>
            <div className = {this.getNavClass()} onClick={()=>{this.setState({'show':false})}}>
            <Container>
                <Row>
                    {Nav}
                </Row>
            </Container>
            </div>
            <div  className ="nav_arrow_cont">
                <img src = {nav_arrow} className ={this.getArrowClass()} onClick={()=>{this.setState({'show':true})}} alt = "nav_arrow"/>
            </div>
            </>
        )
    }
}

export default Nav;
