import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import LangCard from './LangCard';
import ToolCard from './ToolCard';
import Header from '../Header';

import Python from '../../../assets/images/langs/Python.svg';
import JS from '../../../assets/images/langs/JS.svg';
import CPlus from '../../../assets/images/langs/CPlus.svg';
import C from '../../../assets/images/langs/C.svg';
import Swift from '../../../assets/images/langs/Swift.svg';
import SQL from '../../../assets/images/langs/SQL.svg';
import HTML from '../../../assets/images/langs/HTML+CSS.svg';
import Go from '../../../assets/images/langs/Go.svg';

import react from '../../../assets/images/tools/react.svg'
import node from '../../../assets/images/tools/node.svg'
import django from '../../../assets/images/tools/django.svg'
import flask from '../../../assets/images/tools/flask.svg'
import jquery from '../../../assets/images/tools/jquery.svg'
import d3 from '../../../assets/images/tools/d3.svg'
import rxjs from '../../../assets/images/tools/rxjs.svg'
import tf from '../../../assets/images/tools/tf.svg'
import ts from '../../../assets/images/langs/TS.svg'

import git from '../../../assets/images/tools/git.svg'
import opencv from '../../../assets/images/tools/opencv.svg'
import aws from '../../../assets/images/tools/aws-dark.svg'
import azure from '../../../assets/images/tools/azure.svg'
import graphql from '../../../assets/images/tools/graphql.svg'
import docker from '../../../assets/images/tools/docker.svg'
import keras from '../../../assets/images/tools/keras.svg'
import pyspark from '../../../assets/images/tools/pyspark-dark.svg'
import aspark from '../../../assets/images/tools/aspark.svg'

import mongo from '../../../assets/images/tools/mongo.svg'
import mysql from '../../../assets/images/tools/mysql.svg'
import postgres from '../../../assets/images/tools/postgres.svg'
import redis from '../../../assets/images/tools/redis.svg'
import firebase from '../../../assets/images/tools/firebase.svg'
// import memcached from '../../../assets/images/tools/memcached.svg'
import cassandra from '../../../assets/images/tools/cassandra.svg'


class Skills extends Component {
     state = {
          filter: 'framework'
     }
     getFilterClass = (f) => {
          return "tool_filter " + (this.state.filter === f ? " selected_filter" : " ")
     }
    render() {
          const tools = [
               {name: 'React', type: 'framework', tool: 'react', img: react},
               {name: 'Node JS', type: 'framework', tool: 'node', img: node},
               {name: 'Docker', type: 'tool', tool: 'docker', img: docker},
               {name: 'MySQL', type: 'database', tool: 'mysql', img: mysql},
               {name: 'Django', type: 'framework', tool: 'django', img: django},
               {name: 'Redis', type: 'database', tool: 'redis', img: redis},
               {name: 'Type Script', type:'framework', tool:'ts', img: ts},
               {name: 'OpenCV', type: 'library', tool: 'opencv', img: opencv},
               {name: 'Firebase', type: 'database', tool: 'firebase', img: firebase},
               {name: 'Flask', type: 'framework', tool: 'flask', img: flask},
               {name: 'AWS', type: 'tool', tool: 'aws', img: aws},
               {name: 'Azure', type: 'tool', tool: 'azure', img: azure},
               {name: 'MongoDB', type: 'database', tool: 'mongo', img: mongo},
               {name: 'Cassanadra', type: 'database', tool: 'cassandra', img: cassandra},
               {name: 'GraphQL', type: 'tool', tool: 'graphql', img: graphql},
               {name: 'Git', type: 'tool', tool: 'git', img: git},
               {name: 'Keras', type: 'library', tool: 'keras', img: keras},
               {name: 'Postgres', type: 'database', tool: 'postgres', img: postgres},
               {name: 'Apache', type: 'tool', tool: 'aspark', img: aspark},
               // {name: 'MemCached', type: 'database', tool: 'memcached', img: memcached},
               {name: 'jQuery', type: 'library', tool: 'jquery', img: jquery},
               {name: 'PySpark', type: 'library', tool: 'pyspark', img: pyspark},
               {name: 'Tensor Flow', type: 'library', tool: 'tf', img: tf},
               {name: 'RxJS', type: 'library', tool: 'rxjs', img: rxjs},
               {name: 'D3', type: 'library', tool: 'd3', img: d3,},
          ]

          const toolList = tools.reduce((filtered, item) => {
               if (item.type === this.state.filter || this.state.filter === 'all') {
                  filtered.push(
                         <ToolCard key = {item.tool} img = {item.img} 
                              name = {item.name} tool = {item.tool} />
                  );
               }
               return filtered;
             }, []);
          

        return (
        <section id = "skills">
          <Header text="Skills"/>
          <Container>
             <Row>
                <LangCard img = {Python} lang = "Python" extra_classes = "python"
                    content = {["Micro-Servers", "Machine Learning", "Utility & Scripting"]} />
                <LangCard img = {Go}  lang = "Go" extra_classes = "go" 
                    content = {["Micro-Servers", "Distributed Backends", "Chatbots"]}/>
                <LangCard img = {JS}  lang = "JavaScript" extra_classes = "js"
                    content = {["Backend Servers", "Frontend APIs", "Data Visualization"]} />
                <LangCard img = {Swift} lang = "Swift" extra_classes = "swift"
                    content = {["iOS Mobile Apps", "AR Applications"]}  />
                <LangCard img = {CPlus} lang = "C++" extra_classes = "cplus"
                    content = {["Embedded Software", "Hardware Hacks"]}  />
                <LangCard img = {C} lang = "C" extra_classes = "c" 
                    content = {["Embedded Software", "Hardware Hacks"]}/>
                <LangCard img = {SQL} lang = "SQL" extra_classes = "sql" 
                    content = {["Database Query"]}/>
                <LangCard img = {HTML} lang = "HTML/CSS" extra_classes = "html" 
                    content = {["Web Development"]}/>
           </Row>
          </Container>
          <Container>
             <Row>
                <Col xs={12} sm = {12} md = {2.4}>
                    <div data-aos = "fade-right" className = {this.getFilterClass('all')} onClick = {()=>{this.setState({filter: 'all'})}}>All</div>
                  </Col>
                  <Col xs={6} sm = {6} md = {2.4}>
                    <div data-aos = "fade-right"  className = {this.getFilterClass('framework')} onClick = {()=>{this.setState({filter: 'framework'})}}>Frameworks</div>
                  </Col>
                  <Col xs={6} sm = {6} md = {2.4}>
                  <div data-aos = "fade-right"  className = {this.getFilterClass('database')} onClick = {()=>{this.setState({filter: 'database'})}}>Databases</div>
                  </Col>
                  <Col xs={6} sm = {6} md = {2.4}>
                  <div data-aos = "fade-right"  className = {this.getFilterClass('library')} onClick = {()=>{this.setState({filter: 'library'})}}>Libraries</div>
                  </Col>
                  <Col xs={6} sm = {6} md = {2.4}>
                  <div data-aos = "fade-right"  className = {this.getFilterClass('tool')} onClick = {()=>{this.setState({filter: 'tool'})}}>Tools</div>
                  </Col>
             </Row>
          </Container>
          <Container>
             <Row>
                  {toolList}
               </Row>
          </Container>
          </section>
        );
    }
}

export default Skills;
