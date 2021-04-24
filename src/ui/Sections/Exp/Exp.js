import React, { Component } from 'react';
import ExpCard from './ExpCard';
import Header from '../Header';
import setter from '../../../assets/images/exp/Setter.svg';
import mlse from '../../../assets/images/exp/MLSE.svg';
import meter from '../../../assets/images/exp/Meter.svg';
import salesforce from '../../../assets/images/exp/Salesforce.svg';
import amz from '../../../assets/images/exp/Amazon.svg';

import { Space } from 'antd';

class Exp extends Component {
  render() {
    return (
      <div className="section">
        <Header text="Experience" />
        <Space
          size="large"
          style={{
            display: 'flex',
            margin: '0 auto',
            flexWrap: 'wrap',
            width: '75%',
            justifyContent: 'center',
          }}
        >
          <ExpCard
            img={amz}
            title="Amazon"
            desc="Incoming Software Engineering Intern"
            loc="Vancouver"
            details="Computational geometry and 3D rendering"
            date="Jul 2021 - Oct 2021"
            color="#FE9401"
            link="www.amazon.com"
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
          />
        </Space>
      </div>
    );
  }
}

export default Exp;
