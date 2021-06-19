import React, { Component } from 'react';
import amz from '../../../assets/images/exp/Amazon.svg';
import meter from '../../../assets/images/exp/Meter.svg';
import mlse from '../../../assets/images/exp/MLSE.svg';
import salesforce from '../../../assets/images/exp/Salesforce.svg';
import setter from '../../../assets/images/exp/Setter.svg';
import arrow from '../../../assets/images/other/arrow3.svg';
import office from '../../../assets/images/other/office.png';
import Header from '../Header';
import ExpCard from './ExpCard';

class Exp extends Component {
  state = {
    showLeftArrow: false,
    showRightArrow: false,
  };
  componentDidMount() {
    const elem = document.getElementById('exp-body');
    elem.addEventListener('scroll', this.onScroll);
    elem.addEventListener('scroll', this.delayedReact);
    window.addEventListener('resize', this.onScroll);
    window.addEventListener('resize', this.delayedReact);
    this.onScroll();
    this.delayedReact();
  }
  delayedReact = () => {
    setTimeout(this.onScroll, 260);
  };
  onScroll = () => {
    this.props.onSelect('');
    const elem = document.getElementById('exp-body');
    const newScrollLeft = elem.scrollLeft;
    const width = elem.offsetWidth;
    const scrollWidth = elem.scrollWidth;
    if (scrollWidth - newScrollLeft - width < 25) {
      this.setState({ showLeftArrow: false });
    } else {
      this.setState({ showLeftArrow: true });
    }
    if (newScrollLeft < 25) {
      this.setState({ showRightArrow: false });
    } else {
      this.setState({ showRightArrow: true });
    }
  };

  render() {
    return (
      <div className="section" id="exp">
        <Header text="I've worked at a few cool places" img={office} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={arrow}
            className={
              this.state.showRightArrow
                ? 'show-right-arrow'
                : 'hide-right-arrow'
            }
            alt="arrow"
          />
          <div className="section-body" id="exp-body">
            <ExpCard
              noneSelected={this.props.selected === ''}
              onSelect={this.props.onSelect}
              selected={this.props.selected === 'Amazon'}
              img={amz}
              title="Amazon"
              desc="Incoming SDE Intern"
              loc="Vancouver"
              details="..."
              date="Jul 2021 - Oct 2021"
              color="#FE9401"
              link="https:/www.amazon.com/"
              imgW="3.4rem"
              // disabled
            />
            <ExpCard
              noneSelected={this.props.selected === ''}
              onSelect={this.props.onSelect}
              selected={this.props.selected === 'Salesforce'}
              img={salesforce}
              title="Salesforce"
              desc="Software Engineering Intern"
              loc="San Francisco Bay Area"
              details="I'm working on Slack and the new metrics framework for Slack Apps"
              date="May 2021 - Jul 2021"
              color="#009FDF"
              link="https://www.salesforce.com/ca/campaign/lightning/"
              imgW="2.4rem"
            />
            <ExpCard
              noneSelected={this.props.selected === ''}
              onSelect={this.props.onSelect}
              selected={this.props.selected === 'Meter'}
              img={meter}
              title="Meter"
              desc="Software Engineering Intern"
              loc="San Francisco Bay Area"
              details="Did computational geometry, 3D rendering & scan reconstruction stuff"
              date="Aug 2020 - Dec 2020"
              color="white"
              link="https://meter.parts/"
            />
            <ExpCard
              noneSelected={this.props.selected === ''}
              onSelect={this.props.onSelect}
              selected={this.props.selected === 'Setter'}
              img={setter}
              title="Setter"
              desc="Software Engineering Intern"
              loc="Toronto"
              details="Got really good at fullstack apps, microservices and CI/CD"
              date="Jan 2020 - May 2020"
              color="#FF2D4F"
              link="https://setter.com/"
              imgW="1.5rem"
            />
            <ExpCard
              noneSelected={this.props.selected === ''}
              onSelect={this.props.onSelect}
              selected={this.props.selected === 'MLSE'}
              img={mlse}
              title="MLSE"
              desc="Software Engineering Intern"
              loc="Toronto"
              details="Made some machine learning and big data tools for TFC & the Raptors"
              date="May 2019 - Sep 2019"
              color="#BBA388"
              link="https://www.mlse.com/"
              imgW="1.7rem"
            />
          </div>
          <img
            src={arrow}
            className={
              this.state.showLeftArrow ? 'show-left-arrow' : 'hide-left-arrow'
            }
            alt="arrow"
          />
        </div>
      </div>
    );
  }
}

export default Exp;
