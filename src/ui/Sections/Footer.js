import React, { Component } from 'react';
import { Container, Row , Col} from 'react-grid-system';
import '../../assets/styles/footer.css'
import Header from './Header';
import GeneralModal from './GeneralModal';
class Footer extends Component {
    render() {
        return (
        <>
          <Container>
            <div id = "contact" className = "footer_container">
                <div className="connect-details">
                  <p className="muted_p">🏙 Toronto ON, Canada</p>
                  <p className="muted_p tiny">Copyright © 2020 Rafit Jamil. All rights reserved.</p>
                </div>
            </div>
          </Container>
          </>
        );
    }
}

export default Footer;
