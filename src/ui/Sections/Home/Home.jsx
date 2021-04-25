import { Space } from 'antd';
import React, { Component } from 'react';
import business from '../../../assets/images/emoji/business.png';
import laptop from '../../../assets/images/emoji/laptop.png';
import mail from '../../../assets/images/emoji/mail.png';
import scroll from '../../../assets/images/emoji/scroll.png';
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
              textAlign: 'left',
              margin: '0 auto',
              width: 750,
            }}
          >
            <div style={{ fontSize: 60, opacity: 0.8, marginBottom: 2 }}>
              Hi
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <div
              style={{
                fontSize: 90,
                fontWeight: 'bold',
                marginBottom: 2,
              }}
            >
              I'm Rafit
            </div>
            <div style={{marginLeft: 15}}>
              <img src={me} alt={'me'} width={80} />
            </div>
            </div>
            <HomeText />
          </div>
          <Space
            size="large"
            style={{
              display: 'flex',
              margin: '20px auto',
              padding: 0,
              justifyContent: 'flex-start',
              width: 750,
            }}
          >
            <div
              onClick={() => openInNewTab(Resume)}
              width={125}
              className="link home-link"
            >
                <img alt="emoji" src={scroll} className="emoji small"/> <div style={{marginRight: 10}}> Resume</div>
              </div>
            <div
              onClick={() => openInNewTab('mailto: rafit.jamil@gmail.com')}
              width={125}
              className="link home-link"
            >
                <img alt="emoji" src={mail} className="emoji small"/> <div style={{marginRight: 10}}> Email</div>
              </div>
            <div
              onClick={() => openInNewTab('http://github.com/rafitj')}
              width={125}
              className="link home-link"
            >
                 <img alt="emoji" src={laptop} className="emoji small"/> <div style={{marginRight: 10}}>Github</div>
              </div>
            <div
              onClick={() => openInNewTab('https://www.linkedin.com/in/rafitj')}
              width={125}
              className="link home-link"
            >
                <img alt="emoji" src={business} className="emoji small"/> <div style={{marginRight: 10}}>LinkedIn</div>
              </div>
          </Space>
        </div>
      </div>
    );
  }
}

export default Home;
