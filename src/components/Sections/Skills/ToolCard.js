import React, { Component } from 'react';
import '../../../assets/styles/skills.css';
import { Col } from 'react-grid-system';

class ToolCard extends Component {
    state = {
        clicked: false
    }
    toggleClick = () => {
        const cur = this.state.clicked
        this.setState({'clicked': !cur})
    }
    render() {
        const tool_logo_class = "tool_logo" + (this.state.clicked ? " logo_clicked" : "")
        const tool_text = "tool_text" + (this.state.clicked ? " text_clicked" : "")
        const tool_class = "tool_card " + this.props.tool 
        return (
            <Col xs = {4} sm = {4}  md ={3}>
            <div data-aos = "fade-up"
                className = {tool_class} onClick = {this.toggleClick}> 
                <div className = {tool_text}>
                    {this.props.name}
                </div>
                <img className = {tool_logo_class} src = {this.props.img} alt = {this.props.tool} />
            </div>
            </Col>
        );
    }
}

export default ToolCard;
