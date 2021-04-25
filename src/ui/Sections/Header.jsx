import React, { Component } from 'react';
import '../../assets/styles/header.css';
class Header extends Component {
  render() {
    return (
      <div className={'header_container'}>
        <div>
          <img src={this.props.img} alt={'header-img'} width={45} />
        </div>
        <div style={{ background: 'white', height: 2, margin: '15px 0px' }} />
        <h2 style={{ color: 'white', margin: 0 }}>{this.props.text}</h2>
      </div>
    );
  }
}

export default Header;
