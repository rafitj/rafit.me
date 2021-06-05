import React, { Component } from 'react';
import me from '../../../assets/images/other/me.gif';
import Resume from '../../../assets/resume/Resume.pdf';
import '../../../assets/styles/home.css';
import Content from '../../Content';
import { openInNewTab } from '../../utils';
import HomeText from './HomeText';
class Home extends Component {
  state = {
    showMore: false,
  };
  onShowMore = () => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
  };
  render() {
    return (
      <>
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
            <div style={{ marginBottom: 15 }}>
              <img
                src={me}
                alt={'me'}
                style={{ width: 'calc(75px + 0.8vmax)' }}
              />
            </div>
            <div
              style={{
                fontSize: 'calc(125% + 1vmax)',
                fontWeight: 'bold',
                marginBottom: 15,
                lineHeight: 1,
                textAlign: 'center',
              }}
            >
              I'm Rafit
            </div>
            <HomeText />
          </div>
          <div
            style={{
              display: 'flex',
              margin: '0 auto',
              marginTop: 15,
              padding: 0,
              justifyContent: 'center',
              width: '100%',
              flexWrap: 'wrap',
            }}
          >
            <div
              onClick={() => openInNewTab(Resume)}
              style={{ margin: 10, padding: '7px 15px' }}
              className="link home-link"
            >
              Resume
              {/* <img alt="emoji" src={scroll} className="emoji small" />{' '} */}
              <div> </div>
            </div>
            <div
              onClick={() => openInNewTab('mailto: rafit.jamil@gmail.com')}
              style={{ margin: 10, padding: '7px 15px' }}
              className="link home-link"
            >
              {/* <img alt="emoji" src={mail} className="emoji small" />{' '} */}
              <div> Email</div>
            </div>
            <div
              onClick={() => openInNewTab('http://github.com/rafitj')}
              style={{ margin: 10, padding: '7px 15px' }}
              className="link home-link"
            >
              {/* <img alt="emoji" src={laptop} className="emoji small" />{' '} */}
              <div>Github</div>
            </div>
            <div
              onClick={() => openInNewTab('https://www.linkedin.com/in/rafitj')}
              style={{ margin: 10, padding: '7px 15px' }}
              className="link home-link"
            >
              {/* <img alt="emoji" src={business} className="emoji small" />{' '} */}
              <div>LinkedIn</div>
            </div>
          </div>
          <div className="small" onClick={this.onShowMore}>That's it?</div>
        </div>
      </div>
        {this.state.showMore && <Content />}
</>
    );
  }
}

export default Home;
