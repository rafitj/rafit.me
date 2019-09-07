import React, { Component } from 'react';
import '../../../assets/styles/experience.css';
import { Col } from 'react-grid-system';
import Tech from '../Projects/Tech';
class ExpCard extends Component {
    state = {
        showTech: false
    }
    toggleTech = () =>{
        const newState = !this.state.showTech
        this.setState({showTech: newState})
    }
    render() {
        const classes = "exp_card " + this.props.extra_classes
        const img_class = "exp_logo " + (this.props.extra_classes === "mlse" ? "mlse_img" : "")
        return (
            <Col sm ={12} md ={12} >
            <div className = {classes} data-aos="fade-up" data-aos-duration = "500">
                <div>
                    <img className = {img_class} alt = {this.props.company} src = {this.props.img} />
                </div>
                <div className = "exp_date">
                {this.props.date}
                </div>
                <div className = "exp_company">
                {this.props.company}
                </div>
                <div className = "exp_title">
                {this.props.title}
                </div>
                <div className = "exp_desc">
                 {this.props.desc}
                </div>
                {/* <div className = "exp_view">
                </div> */}
                <div className = "tech">
                    <p onClick = {this.toggleTech} className = { "view_tech view_tech_exp " + (this.state.showTech ? "hide_tech" : "")}> View Tech  ></p>
                    <div className =  { "tech_nuggets tech_nuggets_exp " + (this.state.showTech ? "" : "hide_nuggets")}>
                        <Tech onClose = {this.toggleTech} data = {this.props.techData}/>
                    </div>
                </div>
            </div>
            </Col>
        );
    }
}

export default ExpCard;
