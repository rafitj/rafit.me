import React, { Component } from 'react';
import '../../../assets/styles/skills.css';
import { Col } from 'react-grid-system';

class LangCard extends Component {
    state = {
        clicked : false
    }
    toggleClick = () => {
        const cur = this.state.clicked
        this.setState({'clicked': !cur})
    }
    renderContent = () => {
        
    }
    render() {
        const classes = "lang_card " + this.props.extra_classes
        const logo_class = "lang_logo" + (this.state.clicked ? " lang_logo_clicked" : "")
        return (
            <Col xs = {6} sm = {6} md ={3}>
            <div onClick = {this.toggleClick} className = {classes} data-aos="fade-right" data-aos-duration = "500">
                <img className = {logo_class} src =  {this.props.img} alt = {this.props.lang} />
            </div>
            </Col>
        );
    }
}

export default LangCard;
