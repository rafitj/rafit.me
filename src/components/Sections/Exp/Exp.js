import React, { Component } from 'react';
import ExpCard from './ExpCard';
import Header from '../Header';
import acind from '../../../assets/images/exp/ActionCIND.svg'
import mfest from '../../../assets/images/exp/MuslimFest.svg'
import mlse from '../../../assets/images/exp/MLSE.svg'
import bliss from '../../../assets/images/exp/Bliss.svg'
import Scrollable from '../Scrollable'

class Exp extends Component {
  render() {
    return (
      <section id='experience'>
        <Header text="Experience" />
        <Scrollable show = {3}>
            <ExpCard img={mlse} company="MAPLE LEAF SPORTS" title="Software Engineering Intern" date="MAY 2019 - AUG 2019" extra_classes="mlse"
              desc="Developed Big-Data algorithmns and Deep-Learning models for Toronto FC & Toronto Raptors"
              techData={["Python", "Keras", "Azure", "Flask", "Pyspark"]}
               />
            <ExpCard img={bliss} company="THE BLISS COMPANY" title="FULL STACK DEVELOPER" date="MAY 2019 - AUG 2019" extra_classes="bliss"
              desc="Built progressive web app, Treat, for herbal medicine pickup, rewards and more"
              techData={["React", "RxJS", "Firebase"]}
               />
                  <ExpCard img={bliss} company="THE BLISS COMPANY" title="Software Engineer" date="MAY 2019 - AUG 2019" extra_classes="bliss"
              desc="Built progressive web app, Treat, for herbal medicine pickup, rewards and more"
              techData={["React", "RxJS", "Firebase"]}
               />
                  <ExpCard img={bliss} company="THE BLISS COMPANY" title="Software Engineer" date="MAY 2019 - AUG 2019" extra_classes="bliss"
              desc="Built progressive web app, Treat, for herbal medicine pickup, rewards and more"
              techData={["React", "RxJS", "Firebase"]}
               />
        </Scrollable>
      </section>
    );
  }
}

export default Exp;
