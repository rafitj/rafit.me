import React, { Component } from 'react';
import CPlus from '../../../assets/images/langs/CPlus.svg';
import Go from '../../../assets/images/langs/Go.svg';
import Java from '../../../assets/images/langs/Java.svg';
import JS from '../../../assets/images/langs/JS.svg';
import Python from '../../../assets/images/langs/Python.svg';
import TS from '../../../assets/images/langs/TS.svg';
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
import MainLangCard from './MainLangCard';
import ToolCard from './ToolCard';

class Skills extends Component {
  render() {
    return (
      <div className="section" id="skill">
        <Header text="I've developed some neat skills" img={ninja} />
        {/* <div className="small">These are some of the skills I've developed</div> */}
        {/* <div className="smaller">(pun intended)</div> */}
        <div className="section-body">
          <MainLangCard img={Python} title="Python" color="#f5cd60" />
          <MainLangCard img={CPlus} title="C++" color="#004482" />
          <MainLangCard img={Java} title="Java" color="#ff010a" />
          <MainLangCard img={TS} title="TypeScript" color="#237ec8" />
          {/* <div
            style={{
              width: '100%',
            }}
          /> */}
          <MainLangCard img={JS} title="JavaScript" color="#eed65b" />
          <MainLangCard img={Go} title="Golang" color="#00addb" w={48}/>
          {/* <LangCard img={PHP} title="PHP" color="#8791c1" />
          <LangCard img={C} title="C" color="#808a96" />
          <LangCard img={HTML} title="HTML/CSS" color="#c86a45" /> */}
          {/* <div className="small">
            Here are my faviroute tools I've worked with
          </div> */}
          <ToolCard img={node} color="#9cbc45" />
          <ToolCard img={springboot} color="#41c029" />
          <ToolCard img={flask} color="#ffffff" />
          <ToolCard img={react} color="#7bd6f7" />
          <ToolCard img={django} color="#53a276" />
          {/* <ToolCard img={graphql} color="#ca4896" /> */}
          <ToolCard img={mongo} color="#6a8e49" />
          <ToolCard img={postgres} color="#386390" />
          <ToolCard img={neo4j} color="#028ec7" />
          <ToolCard img={redis} color="#ba4839" />
          <ToolCard img={aws} color="#ca9150" />
          <ToolCard img={firebase} color="#f9c844" />
          <ToolCard img={docker} color="#4eb6e5" />
          {/* <ToolCard img={tf} color="#f18c31" /> */}
        </div>
      </div>
    );
  }
}

export default Skills;
