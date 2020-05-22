import React, { Component } from 'react';
import ExpCard from './ExpCard';
import Header from '../Header';
import setter from '../../../assets/images/exp/Setter.svg'
import mfest from '../../../assets/images/exp/MuslimFest.svg'
import mlse from '../../../assets/images/exp/MLSE.svg'
import bliss from '../../../assets/images/exp/Bliss.svg'
import Scrollable from '../Scrollable'

class Exp extends Component {
  state = {
    width: window.innerWidth
}
updateDimensions = () => {
  this.setState({ width: window.innerWidth });
};
componentDidMount() {
  window.addEventListener('resize', this.updateDimensions);
}
componentWillUnmount() {
  window.removeEventListener('resize', this.updateDimensions);
}

  render() {
              
const toShow = () => {
   if (this.state.width < 960) {
      return 1
  } 
  return 3
}
    return (
      <section id='experience'>
        <Header text="Experience" />
        <Scrollable max = {4} show = {toShow()}>
            <ExpCard img={setter} title="Setter" desc="Software Engineering Intern" date="MAY 2019 - AUG 2019" extra_classes="setter"
              details="Developed Big-Data algorithmns and Deep-Learning models for Toronto FC & Toronto Raptors"
              techData={["Python", "Keras", "Azure", "Flask", "Pyspark"]}
               />
            <ExpCard img={mlse} title="MLSE" desc="Software Engineering Intern" date="MAY 2019 - AUG 2019" extra_classes="mlse"
              details="Developed Big-Data algorithmns and Deep-Learning models for Toronto FC & Toronto Raptors"
              techData={["Python", "Keras", "Azure", "Flask", "Pyspark"]}
               />
              <ExpCard img={bliss} title="The Bliss Company" desc="Software Engineer" date="MAY 2019 - AUG 2019" extra_classes="bliss"
              details="Built progressive web app, Treat, for herbal medicine pickup, rewards and more"
              techData={["React", "RxJS", "Firebase"]}
               />
                  <ExpCard img={mfest} title="Festive Currents" desc="Full Stack Developer" date="MAY 2019 - AUG 2019" extra_classes="mfest"
              details="Built progressive web app, Treat, for herbal medicine pickup, rewards and more"
              techData={["React", "RxJS", "Firebase"]}
               />
        </Scrollable>
      </section>
    );
  }
}

export default Exp;
