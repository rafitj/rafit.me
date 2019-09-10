import React, { Component } from 'react';
import '../../../assets/styles/home.css'
import Resume from '../../../assets/resume/Resume.pdf';
import LogoAnimation from '../LogoAnimation';
import nav_arrow from '../../../assets/images/nav_arrow.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Home extends Component {
    render() {
        return (
        <div id = "home">
            <div className = "home_container">
                <LogoAnimation />
                <div data-aos = "fade" data-aos-delay = {1500}  >
                    <p  className = "muted_p">
                        Hey I’m Rafit and I’m a Software Engineering Student at the University of Waterloo.
                    </p>
                    <a href = {Resume} className = "home_button"> <i className="fas fa-file-alt"></i>&nbsp; Resume</a>
                    <a href = "mailto: rafit.jamil@gmail.com" className = "home_button"> <i className="fas fa-envelope"> </i>&nbsp; Email</a>
                    <a href = "http://github.com/rafitj" className = "home_button"> <i className="fab fa-github"></i>&nbsp; Github</a>
                </div>
                <div data-aos = "fade-down" data-aos-delay = {1500}>
                    <AnchorLink href='#experience'>
                        <div className = "home_down_arrow"  >
                                <img src = {nav_arrow} alt = "down_arrow" />
                        </div>
                    </AnchorLink>

                </div>
            </div>
          </div>
        );
    }
}

export default Home;
