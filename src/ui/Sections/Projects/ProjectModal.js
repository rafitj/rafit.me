import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../../assets/styles/projects.css';
import '../../../assets/styles/bootstrap.css';

class ProjectModal extends Component {
    render() {
        const modal_class = " project_modal " + this.props.class
        return (
            <Modal
                onClick={this.props.onHide}
                onHide={this.props.onHide}
                show = {this.props.show}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Body class = {modal_class}>
                    <div >
                        <h4 className = "modal_header">May 2019</h4>
                        <h1>Density</h1>
                        <h4>RU Hacks 2019 Winner</h4>
                        <p>
                            Density is one of the most ambitious projects I've worked on. The proposal is a hardware unit that allows seemless and passive wifi-tracking and analytics. 
                            Density is one of the most ambitious projects I've worked on. The proposal is a hardware unit that allows seemless and passive wifi-tracking and analytics. 
                            Density is one of the most ambitious projects I've worked on. The proposal is a hardware unit that allows seemless and passive wifi-tracking and analytics. 
                            Density is one of the most ambitious projects I've worked on. The proposal is a hardware unit that allows seemless and passive wifi-tracking and analytics. 

                        </p>
                    </div>
                    
                </Modal.Body>
            </Modal>
        );
    }
}

export default ProjectModal;
