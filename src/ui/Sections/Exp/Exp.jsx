import React, { Component } from 'react';
import amz from '../../../assets/images/exp/Amazon.svg';
import meter from '../../../assets/images/exp/Meter.svg';
import mlse from '../../../assets/images/exp/MLSE.svg';
import salesforce from '../../../assets/images/exp/Salesforce.svg';
import setter from '../../../assets/images/exp/Setter.svg';
import office from '../../../assets/images/other/office.png';
import Resume from '../../../assets/resume/Resume.pdf';
import { openInNewTab } from '../../utils';
import Header from '../Header';
import ExpCard from './ExpCard';

class Exp extends Component {
  render() {
    return (
      <div className="section" id="exp">
        <Header text="Work Experience" img={office} />
        <div className="section-body">
          <ExpCard
            img={amz}
            title="Amazon"
            desc="Incoming SDE Intern"
            loc="Vancouver"
            details="Not sure yet"
            date="Jul 2021 - Oct 2021"
            color="#FE9401"
            link="https:/www.amazon.com/"
            imgW="5.6rem"
          />
          <ExpCard
            img={salesforce}
            title="Salesforce"
            desc="Software Engineering Intern"
            loc="San Francisco Bay Area"
            details="Standalone runtimes and app frameworks for SF Lightning"
            date="May 2021 - Jul 2021"
            color="#009FDF"
            link="https://www.salesforce.com/ca/campaign/lightning/"
            imgW="4.8rem"
          />
          <ExpCard
            img={meter}
            title="Meter"
            desc="Software Engineering Intern"
            loc="San Francisco Bay Area"
            details="Did some computational geometry, 3D rendering and scan reconstruction stuff"
            date="Aug 2020 - Dec 2020"
            color="white"
            link="https://meter.parts/"
          />
          <ExpCard
            img={setter}
            title="Setter"
            desc="Software Engineering Intern"
            loc="Toronto"
            details="Got really good at fullstack apps, microservices and CI/CD"
            date="Jan 2020 - May 2020"
            color="#FF2D4F"
            link="https://setter.com/"
          />
          <ExpCard
            img={mlse}
            title="MLSE"
            desc="Software Engineering Intern"
            loc="Toronto"
            details="Made some dope machine learning and big data tools for TFC & the Raptors"
            date="May 2019 - Sep 2019"
            color="#BBA388"
            link="https://www.mlse.com/"
            imgW="3.6rem"
          />
        </div>
        <div
          style={{
            marginTop: 25,
            width: '100%',
            textAlign: 'center',
            color: 'gray',
          }}
        >
          Also, I'm looking for Winter 2021 internships so hit me up :)
        </div>
        <div
          className="link"
          style={{ width: 200, marginTop: 30 }}
          onClick={() => openInNewTab(Resume)}
        >
          Checkout details in my Resume
        </div>
      </div>
    );
  }
}

export default Exp;
