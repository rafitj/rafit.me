import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import '../../assets/styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <>
        <Container>
          <div id="contact" className="footer_container">
            <div className="connect-details">
              <p className="muted_p"><span role="img" aria-label="NY">🗽</span> New York, NY</p>
              <p className="muted_p tiny">
                Copyright © 2021 Rafit Jamil. All rights reserved.
              </p>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Footer;
