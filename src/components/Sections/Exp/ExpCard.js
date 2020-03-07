import React, { Component } from 'react';
import '../../../assets/styles/experience.css';
// import Tech from '../Projects/Tech';
class ExpCard extends Component {
    state = {
        showTech: false,
        showDetails: false
    }
    toggleTech = () =>{
        this.setState(prevState => ({
            showTech: !prevState.showTech
          }));
    }
    toggleDetails = () =>{
        this.setState(prevState => ({
            showDetails: !prevState.showDetails
          }));
    }
    render() {
        const classes = "exp_card " + this.props.extra_classes
        const img_class ="exp_logo"
        return (
            <div className = {classes} >
                <img className = {img_class } alt = {this.props.company} src = {this.props.img} />
            </div>
        );
    }
}

export default ExpCard;
