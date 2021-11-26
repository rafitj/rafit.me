import React, { Component } from 'react';
import me from '../../../assets/images/other/me.gif';
import '../../../assets/styles/home.css';
import HomeLinks from './HomeLinks';
import HomeText from './HomeText';

class Home extends Component {
  render() {
    return (
      <>
        <div id="home">
          <div className="home_container">
            <div
              style={{
                color: 'white',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    position: 'relative',
                    width: 'calc(75px + 0.8vw)',
                    margin: '0 auto',
                  }}
                >
                  <img
                    src={me}
                    alt={'me'}
                    style={{ width: 'calc(75px + 0.8vw)' }}
                  />
                  <HomeText />
                </div>
              </div>
            </div>
            <HomeLinks />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
