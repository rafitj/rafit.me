
import React, { Component } from 'react';
import '../../../assets/styles/projects.css';
import TechNugget from './TechNugget';

class Tech extends Component {
    
    render() {
        const techNuggets = this.props.data.map((i) => <TechNugget key = {i} tech={i}/>);
        return (
           <>
            {techNuggets}
            <div onClick = {this.props.onClose} className="close_tech"> Close </div>
           </>
        );
    }
}

export default Tech;