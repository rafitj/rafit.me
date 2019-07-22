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
            desc = "Developed Big Data algorithmns and trained Deep Learning models for Toronto FC and the Toronto Raptors"/>
            <ExpCard img = {bliss} company = "THE BLISS COMPANY" title = "FULL STACK DEV" date = "MAY 2019 - AUG 2019" extra_classes = "bliss"
            desc = "Built progressive web app, Treat, for herbal medicine pickup, rewards and more"/>
            <ExpCard img = {acind} company = "ACTION CIND" title = "WEB DEVELOPER" date = "MAY 2016 - AUG 2018" extra_classes = "actioncind"
            desc = "Maintained charity website and led team in implementing donations and mail subscriptions"/>
            <ExpCard img = {mfest} company = "FESTIVE CURRENTS" title = "MULTI-MEDIA DEV" date = "MAY 2017 - AUG 2018" extra_classes = "festivecurrents"
            desc = "Designed and redeveloped website and created interactive-online kids games"/>
           </Row>
          </Container>
          </section>
        );
    }
}

export default Exp;
