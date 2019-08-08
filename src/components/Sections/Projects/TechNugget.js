
import React, { Component } from 'react';
import '../../../assets/styles/technugget.css';

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

import aws from '../../../assets/images/tools/aws.svg'
import azure from '../../../assets/images/tools/azure.svg'
import graphql from '../../../assets/images/tools/graphql.svg'
import docker from '../../../assets/images/tools/docker.svg'
import Keras from '../../../assets/images/tools/keras.svg'
import pyspark from '../../../assets/images/tools/pyspark.svg'
import aspark from '../../../assets/images/tools/aspark.svg'

class TechNugget extends Component {
    render(){
        return (
           <div className = "tech_nugget_container">
            <img className = "tech_nugget_img" src ={Python} alt = {this.props.tech} />
            <span  className = "tech_nugget_text">{this.props.tech}</span>
           </div>
        );
    }
}
export default TechNugget;