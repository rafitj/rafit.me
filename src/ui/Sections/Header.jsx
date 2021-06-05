import React, { Component } from 'react';
import '../../assets/styles/header.css';
class Header extends Component {
  render() {
    return (
      <div className={'header_container'}>
        <div>
          <img
            src={this.props.img}
            alt={'header-img'}
            style={{ width: 'calc(50px + 1vmax)' }}
          />
        </div>
        {/* <div style={{ background: 'white', height: 2, margin: '15px 0px' }} /> */}
        <h2
          style={{
            color: 'white',
            margin: 0,
            marginTop: 10,
            fontSize: 'calc(75% + 1vmax)',
          }}
        >
          {this.props.text}
        </h2>
      </div>
    );
  }
}

export default Header;
