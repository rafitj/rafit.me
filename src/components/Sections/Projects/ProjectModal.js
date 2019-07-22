import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
class ProjectModal extends Component {
    render() {
        const modal_class = "project_modal " + this.props.class
        return (
            <Modal
                onClick={this.props.onHide}
                onHide={this.props.onHide}
                show = {this.props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Body class = {modal_class}>
                    <div >
                        <h5 className = "modal_header">{this.props.header}</h5>
                        <h4>{this.props.text}</h4>
                    </div>
                    
                </Modal.Body>
            </Modal>
        );
    }
}

export default ProjectModal;
