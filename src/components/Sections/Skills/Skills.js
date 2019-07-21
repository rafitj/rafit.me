import React, { Component } from 'react';
import { Container, Row } from 'react-grid-system';
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

import react from '../../../assets/images/tools/react.svg'
import node from '../../../assets/images/tools/node.svg'
import django from '../../../assets/images/tools/django.svg'
import flask from '../../../assets/images/tools/flask.svg'
import ts from '../../../assets/images/tools/ts.svg'
import jquery from '../../../assets/images/tools/jquery.svg'

import aws from '../../../assets/images/tools/aws.svg'
import azure from '../../../assets/images/tools/azure.svg'
import graphql from '../../../assets/images/tools/graphql.svg'
import docker from '../../../assets/images/tools/docker.svg'
import keras from '../../../assets/images/tools/keras.svg'
import pyspark from '../../../assets/images/tools/pyspark.svg'
import aspark from '../../../assets/images/tools/aspark.svg'

import mongo from '../../../assets/images/tools/mongo.svg'
import mysql from '../../../assets/images/tools/mysql.svg'
import postgres from '../../../assets/images/tools/postgres.svg'
import redis from '../../../assets/images/tools/redis.svg'
import firebase from '../../../assets/images/tools/firebase.svg'
import memcached from '../../../assets/images/tools/memcached.svg'
import cassandra from '../../../assets/images/tools/cassandra.svg'


class Skills extends Component {
    render() {
        return (
        <section id = "skills">
          <Header text="Skills"/>
          <Container>
             <Row>
                <LangCard img = {Python} lang = "Python" extra_classes = "python" />
                <LangCard img = {JS}  lang = "JavaScript" extra_classes = "js" />
                <LangCard img = {Swift} lang = "Swift" extra_classes = "swift" />
                <LangCard img = {CPlus} lang = "C++" extra_classes = "cplus" />
                <LangCard img = {C} lang = "C" extra_classes = "c" />
                <LangCard img = {SQL} lang = "SQL" extra_classes = "sql" />
                <LangCard img = {HTML} lang = "HTML/CSS" extra_classes = "html" />
           </Row>
          </Container>
          <Container>
             <Row>
                <ToolCard img = {react} tool = "react" />
                <ToolCard img = {node} tool = "node" />
                <ToolCard img = {django} tool = "django" />
                <ToolCard img = {flask} tool = "flask" />
                <ToolCard img = {ts} tool = "ts" />
                <ToolCard img = {jquery} tool = "jquery" />
           </Row>
           <Row>
                <ToolCard img = {aws} tool = "aws" />
                <ToolCard img = {azure} tool = "azure" />
                <ToolCard img = {graphql} tool = "graphql" />
                <ToolCard img = {keras} tool = "keras" />
                <ToolCard img = {docker} tool = "docker" />
                <ToolCard img = {pyspark} tool = "pyspark" />
                <ToolCard img = {aspark} tool = "aspark" />
           </Row>

           <Row>
                <ToolCard img = {mongo} tool = "mongo" />
                <ToolCard img = {mysql} tool = "mysql" />
                <ToolCard img = {postgres} tool = "postgres" />
                <ToolCard img = {redis} tool = "redis" />
                <ToolCard img = {firebase} tool = "firebase" />
                <ToolCard img = {memcached} tool = "memcached" />
                <ToolCard img = {cassandra} tool = "cassandra" />
           </Row>
          </Container>
          </section>
        );
    }
}

export default Skills;
