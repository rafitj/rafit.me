import React, {Component, Fragment} from 'react';
import '../assets/styles/maintenance.css';
import Resume from '../assets/resume/Resume.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Maintenance extends Component {
  state = {
    resume: 'resume',
    github: 'github',
    email: 'email',
    selected: ''
  }
  componentDidMount () {
    AOS.init({
      duration : 1
    })
  }
  renderText  = (text, d) => {
    const array = [];
    for (var i = 0; i < text.length; i++) {
      var delay = d + (i*100);
      array.push(<span key = {delay} className = "char" data-aos="fade" data-aos-delay={delay}>{text.charAt(i)}</span>);
    }
    return array;
  }
  render(){
    return (
      <Fragment>
        <div className = "container">
            <p>{this.renderText("chill, im working on it ...", 200)}</p>
            <div className = "break" data-aos="fade"  data-aos-delay="1000"></div>
            <br/>
            <div id = "resume" className = "anchor-div">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href = {Resume}>
                {this.renderText("resume", 400)}
              </a>
            </div>
            <div id = "github" className = "anchor-div" >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href = "https://github.com/RafitJ">
                {this.renderText("github", 300)}
              </a>
          </div>
            <div id = "email" className = "anchor-div" >
              <a
                href = "mailto: rafit.jamil@gmail.com">
                {this.renderText("email", 700)}
              </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Maintenance;
