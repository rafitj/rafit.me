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
import Cloud from '../../../assets/images/langs/Cloud.svg';
import HTML from '../../../assets/images/langs/HTML+CSS.svg';
import Go from '../../../assets/images/langs/Go.svg';
import DB from '../../../assets/images/langs/DB.svg';

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
import Scrollable from '../Scrollable'


class Skills extends Component {
     state = {
          filter: 'framework'
     }
     getFilterClass = (f) => {
          return "tool_filter " + (this.state.filter === f ? " selected_filter" : " ")
     }
    render() {
          const tools = [
               {name: 'React', type: 'JavaScript', tool: 'react', img: react},
               {name: 'Node JS', type: 'JavaScript', tool: 'node', img: node},
               {name: 'Docker', type: 'Other', tool: 'docker', img: docker},
               {name: 'MySQL', type: 'Databases', tool: 'mysql', img: mysql},
               {name: 'Django', type: 'Python', tool: 'django', img: django},
               {name: 'Redis', type: 'Databases', tool: 'redis', img: redis},
               {name: 'Type Script', type:'JavaScript', tool:'ts', img: ts},
               {name: 'OpenCV', type: 'Python', tool: 'opencv', img: opencv},
               {name: 'Firebase', type: 'Cloud Technology', tool: 'firebase', img: firebase},
               {name: 'Flask', type: 'Python', tool: 'flask', img: flask},
               {name: 'AWS', type: 'Cloud Technology', tool: 'aws', img: aws},
               {name: 'Azure', type: 'Cloud Technology', tool: 'azure', img: azure},
               {name: 'MongoDB', type: 'Databases', tool: 'mongo', img: mongo},
               {name: 'Cassanadra', type: 'Databases', tool: 'cassandra', img: cassandra},
               {name: 'GraphQL', type: 'JavaScript', tool: 'graphql', img: graphql},
               {name: 'Git', type: 'Other', tool: 'git', img: git},
               {name: 'Keras', type: 'Python', tool: 'keras', img: keras},
               {name: 'Postgres', type: 'Databases', tool: 'postgres', img: postgres},
               {name: 'Apache', type: 'Other', tool: 'aspark', img: aspark},
               // {name: 'MemCached', type: 'database', tool: 'memcached', img: memcached},
               {name: 'jQuery', type: 'JavaScript', tool: 'jquery', img: jquery},
               {name: 'PySpark', type: 'Python', tool: 'pyspark', img: pyspark},
               {name: 'Tensor Flow', type: 'Python', tool: 'tf', img: tf},
               {name: 'RxJS', type: 'JavaScript', tool: 'rxjs', img: rxjs},
               {name: 'D3', type: 'Python', tool: 'd3', img: d3,},
          ]

          const toolList = tools.map(item => (
                        <ToolCard type = {item.type} key = {item.tool} img = {item.img} 
                              name = {item.name} tool = {item.tool} />
                ))
          

        return (
        <section id = "skills">
          <Header text="Skills"/>
          <Scrollable  max = {9}  show = {5} tools = {toolList}>
                <LangCard img = {Python} title = "Python" extra_classes = "python"
                    content = {["Micro-Servers", "Machine Learning", "Utility & Scripting"]} />
                <LangCard img = {Go}  title = "Go" extra_classes = "go" 
                    content = {["Micro-Servers", "Distributed Backends", "Chatbots"]}/>
                <LangCard img = {JS}  title = "JavaScript" extra_classes = "js"
                    content = {["Backend Servers", "Frontend APIs", "Data Visualization"]} />
                <LangCard img = {Swift} title = "Swift" extra_classes = "swift"
                    content = {["iOS Mobile Apps", "AR Applications"]}  />
                <LangCard img = {CPlus} title = "C++" extra_classes = "cplus"
                    content = {["Embedded Software", "Hardware Hacks"]}  />
                <LangCard img = {C} title = "C" extra_classes = "c" 
                    content = {["Embedded Software", "Hardware Hacks"]}/>
                        <LangCard img = {HTML} title = "HTML/CSS" extra_classes = "html" 
                    content = {["Web Development"]}/>
                <LangCard img = {DB} title = "Databases" extra_classes = "sql" 
                    content = {["Database Query"]}/>
                <LangCard img = {Cloud} title = "Cloud Technology" extra_classes = "cloud" 
                    content = {["Web Development"]}/>
            
          </Scrollable>
          </section>
        );
    }
}

export default Skills;
