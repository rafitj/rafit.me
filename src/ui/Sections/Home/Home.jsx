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
        <div id="home" style={{ marginTop: 20 }}>
          <div className="home_container">
            <div
              style={{
                color: 'white',
                justifyContent: 'flex-start',
                margin: '0 10px',
                width: '100%',
                // maxWidth: '100%',
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
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-end',
                }}
              >
                <div
                  style={{
                    fontSize: 'calc(125% + 1vmax)',
                    fontWeight: 'bold',
                    marginRight: 10,
                    // marginBottom: 15,
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
                style={{ margin: 10, padding: 5 }}
                className="link home-link"
              >
                Resume
                {/* <img alt="emoji" src={scroll} className="emoji small" />{' '} */}
                <div> </div>
              </div>
              <div
                onClick={() => openInNewTab('mailto: rafit.jamil@gmail.com')}
                style={{ margin: 10, padding: 5 }}
                className="link home-link"
              >
                {/* <img alt="emoji" src={mail} className="emoji small" />{' '} */}
                <div> Email</div>
              </div>
              <div
                onClick={() => openInNewTab('http://github.com/rafitj')}
                style={{ margin: 10, padding: 5 }}
                className="link home-link"
              >
                {/* <img alt="emoji" src={laptop} className="emoji small" />{' '} */}
                <div>Github</div>
              </div>
              <div
                onClick={() =>
                  openInNewTab('https://www.linkedin.com/in/rafitj')
                }
                style={{ margin: 10, padding: 5 }}
                className="link home-link"
              >
                {/* <img alt="emoji" src={business} className="emoji small" />{' '} */}
                <div>LinkedIn</div>
              </div>
            </div>
          </div>
          <div style={{ margin: '0 10px' }}>
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
