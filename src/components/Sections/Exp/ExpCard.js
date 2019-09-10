import React, { Component } from 'react';
import '../../../assets/styles/experience.css';
import { Col } from 'react-grid-system';
import Tech from '../Projects/Tech';
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
        const img_class = "exp_logo " + (this.props.extra_classes === "mlse" ? "mlse_img" : "") + (this.state.showDetails ? " expanded" : "") + (this.state.showDetails && this.props.extra_classes === "mlse" ? " mlse_expanded" : "")
        return (
            <Col sm ={12} md ={12} >
            <div onClick = {this.toggleDetails} className = {classes} data-aos="fade-up">
                <img className = {img_class } alt = {this.props.company} src = {this.props.img} />
                <div className = "exp_date">
                {this.props.date}
                </div>
                <div className = "exp_company">
                {this.props.company}
                </div>
                <div className = "exp_title">
                {this.props.title}
                </div>
                <div className = "exp_desc ">
                    {(this.props.desc)}
                </div>
                <div className = {"exp_details " + (this.state.showDetails ? "" : "hide_details")}>
                    {this.props.detail}
                </div>
                <div onClick = {this.toggleDetails} className = "tech view_tech_exp">
                <div className =  { "tech_nuggets " + (this.state.showTech ? "" : "hide_nuggets") + (this.props.techData.length > 4 && !this.state.showTech ? " five_nugs" : "")}>
                        <Tech onClose = {this.toggleTech} data = {this.props.techData}/>
                    </div>
                    <p onClick = {this.toggleTech} className = { "view_tech " + (this.state.showTech ? "hide_tech" : "")}> View Tech  ></p>
                </div>
            </div>
            </Col>
        );
    }
}

export default ExpCard;
