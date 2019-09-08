import React, { Component } from 'react';
import '../../../assets/styles/home.css'
import dp from '../../../assets/images/dp/DP2.svg'
import Resume from '../../../assets/resume/Resume.pdf';
class Home extends Component {
    componentDidMount(){
        console.log("mounted")
    }
    render() {
        return (
        <div id = "home">
            <div className = "home_container">
                <p  className = "muted_p">
                    Hey I’m Rafit and I’m a Software Engineering Student at the University of Waterloo.
                </p>
                <a href = {Resume} className = "home_button"> <i className="fas fa-file-alt"></i>&nbsp; Resume</a>
                <a href = "mailto: rafit.jamil@gmail.com" className = "home_button"> <i className="fas fa-envelope"> </i>&nbsp; Email</a>
                <a href = "http://github.com/rafitj" className = "home_button"> <i className="fab fa-github"></i>&nbsp; Github</a>
 
            </div>
          </div>
        );
    }
}

export default Home;
