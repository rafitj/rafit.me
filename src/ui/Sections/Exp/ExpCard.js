import { Space } from 'antd';
import React, { Component } from 'react';
import '../../../assets/styles/experience.css';
import Card from '../../components/Card';
import { openInNewTab } from '../../utils';
class ExpCard extends Component {
    state = {
        showDetails: false
    }
    toggleContent = () =>{
        this.setState(prevState => ({
            showDetails: !prevState.showDetails
          }));
    }
    render() {
        const classes = "exp_card " + this.props.extra_classes
        const img_class ="exp_logo"
        return (
            <Card className = {classes} width={300} height={"60%"} color={this.props.color} onClick={this.toggleContent}>
                {this.state.showDetails ? 
                
                <Space style={{display: 'flex', alignItems: "center"}}>
                        <div style={{textAlign: 'center'}}> {this.props.details} </div>
                        <div className="link" onClick={openInNewTab(this.props.link)}>{this.props.link.slice(this.props.link.indexOf("w"), this.props.link.indexOf("/")+1)}</div>
                </Space>
            
            : 
                <Space style={{display: 'flex', alignItems: "center"}}>
                    <img className = {img_class } alt = {this.props.company} src = {this.props.img} 
                        style={{filter: `drop-shadow( 0px 0px 7px ${this.props.color})`}}/>
                    <div style={{flexDirection: "column", display: "flex"}} >
                        <div style={{fontWeight: 'bold', fontSize: "120%"}}>
                            {this.props.title}
                        </div>
                        <div>
                            {this.props.desc}
                        </div>
                        <div style={{opacity: 0.75, fontSize: "80%"}}>
                            {this.props.date}
                        </div>
                    </div>
                </Space>
            }
                
            </Card>
        );
    }
}

export default ExpCard;
