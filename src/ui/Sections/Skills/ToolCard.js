import React, { Component } from 'react';
import '../../../assets/styles/skills.css';
import { Col } from 'react-grid-system';

class ToolCard extends Component {
  state = {
    clicked: false,
  };
  toggleClick = () => {
    const cur = this.state.clicked;
    this.setState({ clicked: !cur });
  };
  render() {
    const tool_logo_class =
      'tool_logo' + (this.state.clicked ? ' logo_clicked' : '');
    const tool_class = 'tool_card ' + this.props.tool;
    return (
      <Col xs={3} sm={2} md={1.5}>
        <div className={tool_class} onClick={this.toggleClick}>
          <img
            className={tool_logo_class}
            src={this.props.img}
            alt={this.props.tool}
          />
        </div>
      </Col>
    );
  }
}

export default ToolCard;
