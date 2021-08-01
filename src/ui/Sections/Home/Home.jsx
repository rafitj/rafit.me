// import IonIcon from 'ionicons/icons/';
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
    height: 0,
    prevSize: window.outerWidth,
  };
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('resize', this.delayedReact);
    this.handleResize();
    this.delayedReact();
  }
  delayedReact = () => {
    setTimeout(this.handleResize, 260);
  };
  handleResize = () => {
    this.setState({ prevSize: window.outerWidth });
    this.setState({
      height: document.getElementById('content-container').offsetHeight,
    });
  };
  toggleShow = () => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
    this.handleResize();
  };
  render() {
    return (
      <>
        <div id="home">
          <div className="home_container">
            <div
              style={{
                color: 'white',
                justifyContent: 'flex-start',
                width: '100%',
              }}
              className="dynamic-margin"
            >
              <div style={{ marginBottom: 15 }}>
                <img
                  src={me}
                  alt={'me'}
                  style={{ width: 'calc(75px + 0.8vmax)' }}
                />
              </div>
              <div className="home-header">
                <div
                  style={{
                    fontSize: 'calc(125% + 1vmax)',
                    fontWeight: 'bold',
                    marginRight: 10,
                    lineHeight: 1,
                    textAlign: 'left',
                  }}
                >
                  I'm Rafit
                </div>
                <HomeText />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                margin: '0 auto',
                marginTop: 15,
                padding: 0,
                justifyContent: 'left',
                width: '100%',
                flexWrap: 'wrap',
              }}
            >
              <div
                onClick={() => openInNewTab(Resume)}
                className="link home-link"
              >
                <div style={{ marginRight: 6, display: 'flex' }}>
                  <ion-icon name="reader"></ion-icon>
                </div>
                Resume
                <div> </div>
              </div>
              <div
                onClick={() => openInNewTab('mailto: rafit.jamil@gmail.com')}
                className="link home-link"
              >
                <div style={{ marginRight: 6, display: 'flex' }}>
                  <ion-icon name="mail"></ion-icon>
                </div>
                <div> Email</div>
              </div>
              <div
                onClick={() => openInNewTab('http://github.com/rafitj')}
                className="link home-link"
              >
                <div style={{ marginRight: 6, display: 'flex' }}>
                  <ion-icon name="logo-github"></ion-icon>
                </div>
                <div>Github</div>
              </div>
              <div
                onClick={() =>
                  openInNewTab('https://www.linkedin.com/in/rafitj')
                }
                className="link home-link"
              >
                <div style={{ marginRight: 6, display: 'flex' }}>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </div>
                <div>LinkedIn</div>
              </div>
            </div>
          </div>
          <div className="dynamic-margin">
            {!this.state.showMore && (
              <div style={{ marginTop: 20, textAlign: 'left' }}>
                <div className="small" onClick={this.toggleShow}>
                  That's it?{' '}
                  <span
                    role="img"
                    aria-label="smiley"
                    style={{ marginLeft: 4 }}
                  >
                    🤔
                  </span>
                </div>
              </div>
            )}
            <Content
              isVisible={this.state.showMore}
              height={this.state.height}
            />
            {this.state.showMore && (
              <div style={{ marginTop: 30, textAlign: 'left' }}>
                <div className="small" onClick={this.toggleShow}>
                  Ok, that's enough{' '}
                  <span
                    role="img"
                    aria-label="smiley"
                    style={{ marginLeft: 4 }}
                  >
                    {' '}
                    🤯
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
