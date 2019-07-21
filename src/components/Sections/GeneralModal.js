import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../../assets/styles/bootstrap.css'
class Footer extends Component {
    render() {
        return (
            <Modal
                onClick={this.props.onHide}
                show = {this.props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Body >
                    <h4>rafit.jamil@gmail.com</h4>
                </Modal.Body>
            </Modal>
        );
    }
}

export default Footer;
