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
                    <h5>Copyright © 2019 Rafit Jamil. All rights reserved.</h5>
                </div>
            </div>
          </Container>
          </>
        );
    }
}

export default Footer;
