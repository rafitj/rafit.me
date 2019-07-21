import React, { Component } from 'react';
import '../../../assets/styles/skills.css';
import { Col } from 'react-grid-system';

class ToolCard extends Component {
    render() {
        const tool_class = "tool_card " + this.props.tool
        return (
            <Col xs = {4} sm = {4}  md ={2}>
            <div data-aos= "fade-up" className = {tool_class}>
                <div className = "tool_logo">
                    <img src =  {this.props.img} alt = {this.props.tool} />
                </div>
            </div>
            </Col>
        );
    }
}

export default ToolCard;
