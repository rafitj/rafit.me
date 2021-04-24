import React, { Component } from 'react';
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
import PHP from '../../../assets/images/langs/PHP.svg';

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
import coreml from '../../../assets/images/tools/coreml.svg'
import arkit from '../../../assets/images/tools/arkit.svg'
import arduino from '../../../assets/images/tools/arduino.svg'

import bootstrap from '../../../assets/images/tools/bootstrap.svg'
import sass from '../../../assets/images/tools/sass.svg'
import materialui from '../../../assets/images/tools/materialui.svg'
import phpmysql from '../../../assets/images/tools/phpmysql.svg'
import laravel from '../../../assets/images/tools/laravel.svg'
import mux from '../../../assets/images/tools/mux.svg'
import gokit from '../../../assets/images/tools/gokit.svg'
import { Space } from 'antd';

class Skills extends Component {
     state = {
          filter: 'framework',
          width: window.innerWidth
     }
     getFilterClass = (f) => {
          return "tool_filter " + (this.state.filter === f ? " selected_filter" : " ")
     }
     updateDimensions = () => {
        this.setState({ width: window.innerWidth });
      };
      componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
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
            //    {name: 'Cassanadra', type: 'Databases', tool: 'cassandra', img: cassandra},
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
               {name: 'Core ML', type: 'Swift', tool: 'coreml', img: coreml},
               {name: 'AR Kit', type: 'Swift', tool: 'arkit', img: arkit},
               {name: 'Ardunio', type: 'C++', tool: 'arduino', img: arduino},
               {name: 'Arduino', type: 'C', tool: 'arduino', img: arduino},

               {name: 'Bootstrap', type: 'HTML/CSS', tool: 'bootstrap', img: bootstrap},
               {name: 'Sass', type: 'HTML/CSS', tool: 'sass', img: sass},
               {name: 'Material UI', type: 'HTML/CSS', tool: 'materialui', img: materialui},

               {name: 'MySQL', type: 'PHP', tool: 'phpmysql', img: phpmysql},
               {name: 'Laravel', type: 'PHP', tool: 'laravel', img: laravel},
               {name: 'GoKit', type: 'Go', tool: 'gokit', img: gokit},
               {name: 'Mux', type: 'Go', tool: 'mux', img: mux},

          ]

          const toolList = tools.map(item => (
                        <ToolCard type = {item.type} key = {item.tool} img = {item.img} 
                              name = {item.name} tool = {item.tool} />
                ))
          
        const toShow = () => {
            if (this.state.width < 500) {
                return 1
            }
            else if (this.state.width < 960) {
                return 3
            } 
            return 5
        }
        return (
        <section id = "skills">
          <Header text="Skills"/>
          <Space size="large" style={{display: "flex", margin: '0 auto'}}>
                <LangCard img = {Python} title = "Python" extra_classes = "python"
                    content = {["Micro-Servers", "Machine Learning", "Utility & Scripting"]} />
                <LangCard img = {Go}  title = "Go" extra_classes = "go" 
                    content = {["Micro-Servers", "Distributed Backends", "Chatbots"]}/>
                <LangCard img = {JS}  title = "JavaScript" extra_classes = "js"
                    content = {["Backend Servers", "Frontend APIs", "Data Visualization"]} />
                <LangCard img = {CPlus} title = "C++" extra_classes = "cplus"
                    content = {["Embedded Software", "Hardware Hacks"]}  />
                <LangCard img = {PHP} title = "PHP" extra_classes = "php"
                    content = {["Web Dev"]}  />
                <LangCard img = {Swift} title = "Swift" extra_classes = "swift"
                    content = {["iOS Mobile Apps", "AR Applications"]}  />

                <LangCard img = {C} title = "C" extra_classes = "c" 
                    content = {["Embedded Software", "Hardware Hacks"]}/>
                        <LangCard img = {HTML} title = "HTML/CSS" extra_classes = "html" 
                    content = {["Web Development"]}/>
                <LangCard img = {DB} title = "Databases" extra_classes = "sql" 
                    content = {["Database Query"]}/>
                <LangCard img = {Cloud} title = "Cloud Technology" extra_classes = "cloud" 
                    content = {["Web Development"]}/>
            </Space>
          </section>
        );
    }
}

export default Skills;
