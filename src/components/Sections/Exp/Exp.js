import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ExpCard from './ExpCard';
import Header from '../Header';
import acind from '../../../assets/images/exp/ActionCIND.svg'
import mfest from '../../../assets/images/exp/MuslimFest.svg'
import mlse from '../../../assets/images/exp/MLSE.svg'
import bliss from '../../../assets/images/exp/Bliss.svg'


class Exp extends Component {
    render() {
        return (
        <>
          <Header text = "Experience"/>
          <Container>
             <Row>
            <Col sm ={6}>
                <ExpCard img = {mlse} company = "MAPLE LEAF SPORTS" title = "DATA SCIENTIST" date = "MAY 2019 - AUG 2019" extra_classes = "mlse"/>
            </Col>
            <Col sm ={6}>
                <ExpCard img = {bliss} company = "THE BLISS COMPANY" title = "FULL STACK DEV" date = "MAY 2019 - AUG 2019" extra_classes = "bliss"/>
            </Col>
            <Col sm ={6}>
                <ExpCard img = {acind} company = "ACTION CIND" title = "WEB DEV" date = "MAY 2019 - AUG 2019" extra_classes = "actioncind"/>
            </Col>
            <Col sm ={6}>
                <ExpCard img = {mfest} company = "FESTIVE CURRENTS" title = "MULTI-MEDIA DEV" date = "MAY 2019 - AUG 2019" extra_classes = "festivecurrents"/>
            </Col>
           </Row>
          </Container>
          </>
        );
    }
}

export default Exp;
