import React, { Component } from 'react';
import '../../../assets/styles/langs.css'
class LangCard extends Component {
    render() {
        const classes = "lang_card " + this.props.extra_classes
        return (
            <div className = {classes} data-aos="fade-up" data-aos-duration = "500">
                <div className = "lang_logo">
                   <img src =  {this.props.img} alt = {this.props.lang} />
                </div>
                <div className = "lang_name">
                {this.props.lang}
                </div>
            </div>
        );
    }
}

export default LangCard;
