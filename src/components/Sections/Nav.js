import React, { Component } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import '../../assets/styles/nav.css'
import nav_arrow from '../../assets/images/nav_arrow.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Nav extends Component {

    state = {
        'show': false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    handleScroll = (event) => {
        const wrappedElement = document.getElementById('root');
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        if (this.isBottom(wrappedElement)) {
            this.setState({'show':true})

        }
        else if (scrolled < 95) {
            this.setState({'show':false})
        }
    }


    getNavClass = () => {
        var classes =  "nav_container " + (this.state.show ? " " : " hide_nav");
        return classes
    }
    getArrowClass = () => {
        return "nav_arrow_cont " + (this.state.show ? "hide_arrow" : " ");
    }
    handleNavClick = ()=>{
        this.setState({'show':false})

    }
    handleArrowClick = ()=>{
        this.setState({'show':true})

    }
    render() {
        const Nav = (
            <>
                <Col xs={2.4}>
                    <AnchorLink href='#home'> 
                    <div className = "nav_button">
                        <i className="fas fa-lg fa-home"></i> 
                        <Hidden xs sm>
                            <div className = "nav_text">Home</div>    
                        </Hidden>
                    </div>
                    </AnchorLink>
                </Col>
                <Col xs={2.4}>
                    <AnchorLink href='#projects'> 
                    <div className = "nav_button">
                        <i className="fas fa-lg fa-rocket"></i>
                        <Hidden xs sm>
                            <div className = "nav_text">Projects</div>    
                        </Hidden>
                    </div>
                    </AnchorLink>
                </Col>
                <Col xs={2.4}>
                    <AnchorLink href='#experience'> 
                    <div className = "nav_button">
                        <i className="fab fa-lg fa-black-tie"></i>
                        <Hidden xs sm>
                            <div className = "nav_text">Work</div>    
                        </Hidden>
                    </div>
                    </AnchorLink>
                </Col>
                <Col xs={2.4}>
                    <AnchorLink href='#skills'> 
                    <div className = "nav_button">
                        <i className="fas fa-lg fa-layer-group"></i>
                        <Hidden xs sm>
                            <div className = "nav_text">Skills</div>    
                       </Hidden>
                       </div> 
                    </AnchorLink>
                </Col>
                <Col xs={2.4}>
                    <AnchorLink href='#contact'> 
                    <div className = "nav_button">
                        <i className="fas fa-lg fa-coffee"></i>
                        <Hidden xs sm>
                            <div className = "nav_text">Chat</div>    
                       </Hidden>
                       </div> 
                    </AnchorLink>
                </Col>
        </>
        )
        return(
            <>
            <div className = {this.getNavClass()} onClick={this.handleNavClick}>
            <Container>
                <Row>
                    {Nav}
                </Row>
            </Container>
            </div>
            <div  className ={this.getArrowClass()}>
                <img src = {nav_arrow} className ="nav_arrow" onClick={this.handleArrowClick} alt = "nav_arrow"/>
            </div>
            </>
        )
    }
}

export default Nav;
