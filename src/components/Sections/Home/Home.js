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
                <div className = "home_img">
                    <img src = {dp} alt = "profile" />
                </div>
                <p   className = "muted_p">Hey, I'm</p>
                <h1   className = "name_header">Rafit Jamil</h1>
                <p  className = "muted_p">I’m a Software Engineering Student at the University of Waterloo. <br/>
                I have several years of experience as a developer, from machine-learning to mobile dev to full-stack and beyond. <br/>
                If you want to grab a coffee and talk about tech, football or literature, let's get in touch.</p>
                <a href = {Resume} className = "home_button"> <i class="fas fa-file-alt"></i>&nbsp; Resume</a>
                <a href = "mailto: rafit.jamil@gmail.com" className = "home_button"> <i class="fas fa-envelope"> </i>&nbsp; Email</a>
                <a href = "http://github.com/rafitj" className = "home_button"> <i class="fab fa-github"></i>&nbsp; Github</a>
 
            </div>
          </div>
        );
    }
}

export default Home;
