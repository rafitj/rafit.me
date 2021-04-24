import React, { Component } from 'react';
import '../../../assets/styles/home.css'
import Resume from '../../../assets/resume/Resume.pdf';
import nav_arrow from '../../../assets/images/nav_arrow.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HomeText from './HomeText'
import Card from '../../components/Card';
import { openInNewTab } from '../../utils';

class Home extends Component {
    render() {
        return (
            <div id="home">
                <div className="home_container">
                    <div style={{color: 'whitesmoke', textAlign: 'left', margin: '0 auto', width: 750}}>
                        <div style={{fontSize: 60, opacity: 0.8, marginBottom: 2}}>Hi</div>
                        <div style={{fontSize: 90, fontWeight: 'bold', opacity: 0.9, marginBottom: 2}}>I'm Rafit</div>
                        <HomeText/>
                    </div>
                    <div style={{display: 'flex', margin: '20px auto', padding: 0, justifyContent: 'space-between', width: 750}}>
                        <Card onClick={() => this.openInNewTab(Resume)} width={125}>
                            📄 Resume
                        </Card>
                        <Card onClick={() => this.openInNewTab('mailto: rafit.jamil@gmail.com')} width={125}>
                            📫 Email
                        </Card>
                        <Card onClick={() => this.openInNewTab('http://github.com/rafitj')} width={125}>
                            💻 Github
                        </Card>
                        <Card onClick={() => this.openInNewTab('https://www.linkedin.com/in/rafitj')} width={125}>
                            💼 LinkedIn
                        </Card>
                    </div>
                    {/* <div data-aos="fade" data-aos-delay={1500} style={{textAlign: 'center', margin: '0 auto'}} >
                        <a target="_blank" rel="noopener noreferrer" href={Resume} className="home_button">📄Resume</a>
                        <a target="_blank" rel="noopener noreferrer" href="mailto: rafit.jamil@gmail.com" className="home_button">📫 Email</a>
                        <a target="_blank" rel="noopener noreferrer" href="http://github.com/rafitj" className="home_button">💻Github</a>
                        <a target="_blank" rel="noopener noreferrer" href="" className="home_button"></a>
                    </div> */}
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
