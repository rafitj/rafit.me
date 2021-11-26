import React, { Component } from 'react';
import me from '../../../assets/images/other/me.gif';
import '../../../assets/styles/home.css';
import Exp from '../Exp/Exp';
import Projects from '../Projects/Projects';
import HomeLinks from './HomeLinks';
import HomeText from './HomeText';

class Home extends Component {
  state = {
    selectedDot: 0
  };
  selectDot0 = () => {
    this.setState({ selectedDot: 0})
  }
  selectDot1 = () => {
    this.setState({ selectedDot: 1})
  }
  selectDot2 = () => {
    this.setState({ selectedDot: 2})
  }
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
              <div
                style={{ textAlign: 'center' }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: 'calc(75px + 0.8vmax)',
                    margin: '0 auto',
                  }}
                >
                  <img
                    src={me}
                    alt={'me'}
                    style={{ width: 'calc(75px + 0.8vmax)' }}
                  />
                  <HomeText />
                </div>
              </div>
            </div>
            {this.state.selectedDot === 0 && <HomeLinks/>}
            {this.state.selectedDot === 1 && <Exp/>}
            {this.state.selectedDot === 2 && <Projects/>}
            <div className="home-dots">
              <div className={"home-dot " + (this.state.selectedDot === 0 ? "selected" : "")} onClick={this.selectDot0}></div>
              <div className={"home-dot " + (this.state.selectedDot === 1 ? "selected" : "")} onClick={this.selectDot1}></div>
              <div className={"home-dot " + (this.state.selectedDot === 2 ? "selected" : "")} onClick={this.selectDot2}></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
