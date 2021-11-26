import React, { Component } from 'react';
import '../../assets/styles/header.css';
class Header extends Component {
  render() {
    return (
      <div className={'header_container'}>
        <div
          style={{
            color: 'gray',
            marginBottom: 8,
            marginTop: 25,
            fontSize: 'calc(5px + 0.8vw)',
          }}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Header;
