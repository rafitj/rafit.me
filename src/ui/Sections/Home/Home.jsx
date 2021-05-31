import React, { Component } from 'react';
import me from '../../../assets/images/other/me.gif';
import Resume from '../../../assets/resume/Resume.pdf';
import '../../../assets/styles/home.css';
import { openInNewTab } from '../../utils';
import HomeText from './HomeText';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="home_container">
          <div
            style={{
              color: 'white',
              justifyContent: 'center',
              margin: '0 auto',
              width: 750,
              maxWidth: '100%',
            }}
          >
            {/* <div style={{ fontSize: '250%', opacity: 0.8, marginBottom: 2 }}>
              Hi
            </div> */}
              <div style={{marginBottom: 15}} >
              <img src={me} alt={'me'} width={80} />
            </div>
            <div
              style={{
                fontSize: '200%',
                fontWeight: 'bold',
                marginBottom: 15,
                lineHeight: 1,
                textAlign: 'center'
              }}
            >
              I'm Rafit
            </div>
            <HomeText />
          </div>
          <div
            style={{
              display: 'flex',
              margin: '5px auto',
              marginTop: 10,
              padding: 0,
              justifyContent: 'center',
              width: 750,
              maxWidth: '100%',
              flexWrap: 'wrap',
            }}
          >
            <div
              onClick={() => openInNewTab(Resume)}
              width={75}
              className="link home-link"
            >
              {/* <img alt="emoji" src={scroll} className="emoji small" />{' '} */}
              <div > Resume</div>
            </div>
            <div
              onClick={() => openInNewTab('mailto: rafit.jamil@gmail.com')}
              width={75}
              className="link home-link"
            >
              {/* <img alt="emoji" src={mail} className="emoji small" />{' '} */}
              <div > Email</div>
            </div>
            <div
              onClick={() => openInNewTab('http://github.com/rafitj')}
              width={75}
              className="link home-link"
            >
              {/* <img alt="emoji" src={laptop} className="emoji small" />{' '} */}
              <div >Github</div>
            </div>
            <div
              onClick={() => openInNewTab('https://www.linkedin.com/in/rafitj')}
              width={75}
              className="link home-link"
            >
              {/* <img alt="emoji" src={business} className="emoji small" />{' '} */}
              <div >LinkedIn</div>
            </div>
          </div>
          {/* <AnchorLink href='#exp'>
          <div className="down-arrow">
            <img src={arrow}/>
          </div>
          </AnchorLink> */}
        </div>
      </div>
    );
  }
}

export default Home;
