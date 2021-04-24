import React, { Component } from 'react';
import me from '../../assets/images/other/me.png';
import '../../assets/styles/header.css';
class Header extends Component {
  render() {
    const classes = 'header_container ' + (this.props.contact ? ' less' : '');
    return (
      <div className={classes}>
        <div>
          <img src={me} alt={'me'} width={45} />
        </div>
        <div style={{ background: 'white', height: 2, margin: '15px 0px' }} />
        <h2 style={{ color: 'white', margin: 0 }}>{this.props.text}</h2>
      </div>
    );
  }
}

export default Header;
