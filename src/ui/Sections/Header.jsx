import React, { Component } from 'react';
import '../../assets/styles/header.css';
class Header extends Component {
  render() {
    return (
      <div className={'header_container'}>
        {/* <div>
          <img
            src={this.props.img}
            alt={'header-img'}
            style={{ width: 'calc(50px + 1vmax)' }}
          />
        </div> */}
        {/* <div style={{ background: 'white', height: 2, margin: '15px 0px' }} /> */}
        <div
          style={{
            color: 'gray',
            marginBottom: 8,
            marginTop: 25,
            fontSize: 'calc(4px + 1vmax)',
          }}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Header;
