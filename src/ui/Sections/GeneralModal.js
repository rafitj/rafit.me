import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../assets/styles/bootstrap.css'
class Footer extends Component {
    render() {
        return (
            <Modal
                onClick={this.props.onHide}
                onHide={this.props.onHide}
                show = {this.props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Body >
                    <h5 className = "modal_header">{this.props.header}</h5>
                    <h4>{this.props.text}</h4>
                </Modal.Body>
            </Modal>
        );
    }
}

export default Footer;
