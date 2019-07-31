import React, {Component, Fragment} from 'react';
import Resume from '../assets/resume/Resume.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/home.css'
import '../assets/styles/maintenance.css';

class Maintenance extends Component {
  componentDidMount () {
    AOS.init({
      duration : 1
    })
  }
  render(){
    return (
      <div className = "maint_cont">
        <div className = "home_container">
            <p className = "maint_box edit muted_p">hey, i'm rafit :) <br/> and my websites not done...</p>
            <br/>
            <a href = {Resume} className = "home_button  small"> <i class="fas fa-file-alt"></i></a>
            <a href = "mailto: rafit.jamil@gmail.com" className = "small home_button "> <i class="fas fa-envelope"> </i></a>
            <a href = "http://github.com/rafitj" className = "small home_button "> <i class="fab fa-github"></i></a>
        </div>
      </div>
    );
  }
}

export default Maintenance;
