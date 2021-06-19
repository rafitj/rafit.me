import React, { Component } from 'react';
import CPlus from '../../../assets/images/langs/CPlus.svg';
import Go from '../../../assets/images/langs/Go.svg';
import Java from '../../../assets/images/langs/Java.svg';
import JS from '../../../assets/images/langs/JS.svg';
import Python from '../../../assets/images/langs/Python.svg';
import TS from '../../../assets/images/langs/TS.svg';
import arrow from '../../../assets/images/other/arrow3.svg';
import ninja from '../../../assets/images/other/ninja.png';
import aws from '../../../assets/images/tools/aws.svg';
import django from '../../../assets/images/tools/django.svg';
import docker from '../../../assets/images/tools/docker.svg';
import firebase from '../../../assets/images/tools/firebase.svg';
import flask from '../../../assets/images/tools/flask.svg';
import mongo from '../../../assets/images/tools/mongo.svg';
import neo4j from '../../../assets/images/tools/neo4j.svg';
import node from '../../../assets/images/tools/node.svg';
import postgres from '../../../assets/images/tools/postgres.svg';
import react from '../../../assets/images/tools/react.svg';
import redis from '../../../assets/images/tools/redis.svg';
import springboot from '../../../assets/images/tools/springboot.svg';
import Header from '../Header';
import SkillCard from './SkillCard';
class Skills extends Component {
  state = {
    showLeftArrow: false,
    showRightArrow: false,
  };
  componentDidMount() {
    const elem = document.getElementById('skill-body');
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
    const elem = document.getElementById('skill-body');
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
      <div className="section" id="skill">
        <Header text="I've developed some neat skills" img={ninja} />
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
          <div className="section-body" id="skill-body">
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={Python}
              title="Python"
              color="#f5cd60"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={CPlus}
              title="C++"
              color="#004482"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={Java}
              title="Java"
              color="#ff010a"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={TS}
              title="TypeScript"
              color="#237ec8"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={JS}
              title="JavaScript"
              color="#eed65b"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={Go}
              title="Golang"
              color="#00addb"
              w={48}
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={node}
              color="#9cbc45"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={springboot}
              color="#41c029"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={flask}
              color="#ffffff"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={react}
              color="#7bd6f7"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={django}
              color="#53a276"
            />
            {/* <SkillCard selected={this.props.selected} onSelect={() => this.props.onSelect('')} img={graphql} color="#ca4896" /> */}
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={mongo}
              color="#6a8e49"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={postgres}
              color="#386390"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={neo4j}
              color="#028ec7"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={redis}
              color="#ba4839"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={aws}
              color="#ca9150"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={firebase}
              color="#f9c844"
            />
            <SkillCard
              selected={this.props.selected}
              onSelect={() => this.props.onSelect('')}
              img={docker}
              color="#4eb6e5"
            />
            {/* <SkillCard selected={this.props.selected} onSelect={() => this.props.onSelect('')} img={tf} color="#f18c31" /> */}
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

export default Skills;
