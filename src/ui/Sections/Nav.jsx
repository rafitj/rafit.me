import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import mage from '../../assets/images/other/mage.png';
import me from '../../assets/images/other/me.png';
import ninja from '../../assets/images/other/ninja.png';
import office from '../../assets/images/other/office.png';
import '../../assets/styles/nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
            <AnchorLink href="#home">
                <img className={this.props.active === "home" && "active"} src={me} alt={'nav-me'}/>
            </AnchorLink>
            <AnchorLink href="#exp">
          <img className={this.props.active === "exp" && "active"} src={office} alt={'nav-office'}/>
          </AnchorLink>
          <AnchorLink href="#project">
          <img className={this.props.active === "proj" && "active"} src={mage} alt={'nav-mage'}/>
          </AnchorLink>
          <AnchorLink href="#skill">
          <img className={this.props.active === "skill" && "active"} src={ninja} alt={'nav-ninja'} style={{marginRight: 0}}/>
          </AnchorLink>
      </div>
    );
  }
}

export default Nav;
