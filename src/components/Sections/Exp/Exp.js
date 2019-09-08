import React, { Component } from 'react';
import { Container, Row} from 'react-grid-system';
import ExpCard from './ExpCard';
import Header from '../Header';
import acind from '../../../assets/images/exp/ActionCIND.svg'
import mfest from '../../../assets/images/exp/MuslimFest.svg'
import mlse from '../../../assets/images/exp/MLSE.svg'
import bliss from '../../../assets/images/exp/Bliss.svg'


class Exp extends Component {
    render() {
        return (
        <section id='experience'>
          <Header text = "Experience"/>
          <Container>
             <Row>
            <ExpCard img = {mlse} company = "MAPLE LEAF SPORTS" title = "DATA SCIENTIST" date = "MAY 2019 - AUG 2019" extra_classes = "mlse"
            desc = "Developed Big-Data algorithmns and Deep-Learning models for Toronto FC & Toronto Raptors"
            techData = {["Python","Keras","Azure","Flask", "Pyspark"]}
            detail = "At the MLSE I worked as a Data Scientist for TorontoFC and the Toronto Raptors specifically in opposition analysis and tactical scouting. My work involved..."/>
            <ExpCard img = {bliss} company = "THE BLISS COMPANY" title = "FULL STACK DEVELOPER" date = "MAY 2019 - AUG 2019" extra_classes = "bliss"
            desc = "Built progressive web app, Treat, for herbal medicine pickup, rewards and more"
            techData = {["React","RxJS","Firebase"]}/>
            <ExpCard img = {acind} company = "ACTION CIND" title = "WEB DEVELOPER" date = "MAY 2016 - AUG 2018" extra_classes = "actioncind"
            desc = "Maintained charity website and implemented donations and mail subscriptions"
            techData = {["Node","Flask","HTML"]}/>
            <ExpCard img = {mfest} company = "FESTIVE CURRENTS" title = "MULTI-MEDIA DEVELOPER" date = "MAY 2017 - AUG 2018" extra_classes = "festivecurrents"
            desc = "Redeveloped website and built interactive-online kids games"
            techData = {["Node","JS","HTML"]}/>
           </Row>
          </Container>
          </section>
        );
    }
}

export default Exp;
