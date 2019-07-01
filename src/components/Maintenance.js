import React, {Component, Fragment} from 'react';
import '../assets/styles/maintenance.css';
import Resume from '../assets/resume/Resume.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Maintenance extends Component {
  componentDidMount () {
    AOS.init({
      duration : 1
    })
  }
  render(){
    return (
      <Fragment>
        <div className = "container">
            <p data-aos="fade" data-aos-duration = "500" >chill, im working on it ...</p>
            <div data-aos="fade" data-aos-delay = "2000" id = "resume" className = "anchor-div">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href = {Resume}>
                resume
              </a>
            </div>
            <div data-aos="fade"  data-aos-delay = "2000"  id = "github" className = "anchor-div" >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href = "https://github.com/RafitJ">
                github
              </a>
          </div>
            <div data-aos="fade" data-aos-delay = "3000" id = "email" className = "anchor-div" >
              <a
                href = "mailto: rafit.jamil@gmail.com">
                email
              </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Maintenance;
