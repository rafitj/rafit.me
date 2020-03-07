import React, { Component } from 'react';
import '../../../assets/styles/home.css'
import Resume from '../../../assets/resume/Resume.pdf';
import LogoAnimation from '../LogoAnimation';
import nav_arrow from '../../../assets/images/nav_arrow.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HomeText from './HomeText'
class Home extends Component {
    
    render() {
        return (
            <div id="home">
                <div className="home_container">
                    <LogoAnimation/>
                    <div data-aos="fade" data-aos-delay={1500} >
                        <HomeText/>
                        <a target="_blank" rel="noopener noreferrer" href={Resume} className="home_button"><span role ="img" aria-label="resume">📄</span>Resume</a>
                        <a target="_blank" rel="noopener noreferrer" href="mailto: rafit.jamil@gmail.com" className="home_button"><span role ="img" aria-label="mail">📫</span>Email</a>
                        <a target="_blank" rel="noopener noreferrer" href="http://github.com/rafitj" className="home_button"><span role ="img" aria-label="computer">💻</span>Github</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rafitj/" className="home_button"><span role ="img" aria-label="breifcase">💼</span>LinkedIn</a>
                    </div>
                    <div data-aos="fade" data-aos-delay={1500}>
                        <AnchorLink href='#experience'>
                            <div className="home_down_arrow"  >
                                <img src={nav_arrow} alt="down_arrow" />
                            </div>
                        </AnchorLink>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
