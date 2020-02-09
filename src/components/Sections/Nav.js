import React, { Component } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import '../../assets/styles/nav.css'
import nav_arrow from '../../assets/images/nav_arrow.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Nav extends Component {

    render() {
        return(
            <>
            <AnchorLink href='#home'> 
            <div  className ="nav_arrow_cont">
                <img src = {nav_arrow} className ="nav_arrow" alt = "nav_arrow"/>
            </div>
            </AnchorLink>

            </>
        )
    }
}

export default Nav;
