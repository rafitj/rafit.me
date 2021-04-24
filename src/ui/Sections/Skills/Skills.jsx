import React, { Component } from 'react';
import C from '../../../assets/images/langs/C.svg';
import CPlus from '../../../assets/images/langs/CPlus.svg';
import Go from '../../../assets/images/langs/Go.svg';
import HTML from '../../../assets/images/langs/HTML+CSS.svg';
import Java from '../../../assets/images/langs/Java.svg';
import JS from '../../../assets/images/langs/JS.svg';
import PHP from '../../../assets/images/langs/PHP.svg';
import Python from '../../../assets/images/langs/Python.svg';
import TS from '../../../assets/images/langs/TS.svg';
// import aspark from '../../../assets/images/tools/aspark.svg';
// import aws from '../../../assets/images/tools/aws-dark.svg';
// import azure from '../../../assets/images/tools/azure.svg';
// import django from '../../../assets/images/tools/django.svg';
// import docker from '../../../assets/images/tools/docker.svg';
// import firebase from '../../../assets/images/tools/firebase.svg';
// import flask from '../../../assets/images/tools/flask.svg';
// import graphql from '../../../assets/images/tools/graphql.svg';
// import mongo from '../../../assets/images/tools/mongo.svg';
// import mysql from '../../../assets/images/tools/mysql.svg';
// import node from '../../../assets/images/tools/node.svg';
// import opencv from '../../../assets/images/tools/opencv.svg';
// import phpmysql from '../../../assets/images/tools/phpmysql.svg';
// import postgres from '../../../assets/images/tools/postgres.svg';
// import pyspark from '../../../assets/images/tools/pyspark-dark.svg';
// import react from '../../../assets/images/tools/react.svg';
// import redis from '../../../assets/images/tools/redis.svg';
// import tf from '../../../assets/images/tools/tf.svg';
import Header from '../Header';
import LangCard from './LangCard';
import MainLangCard from './MainLangCard';

class Skills extends Component {
  render() {
    return (
      <div className="section">
        <Header text="Skills" />
        <div
          style={{
            marginTop: 24,
            marginBottom: 12,
            width: '100%',
            textAlign: 'center',
            color: 'gray',
          }}
        >
          I know a lot of languages
        </div>
        <div
          style={{
            display: 'flex',
            margin: '0 auto',
            flexWrap: 'wrap',
            width: '65%',
            justifyContent: 'center',
          }}
        >
          <MainLangCard
            img={Python}
            title="Python"
            color="#f5cd60"
          />
          <MainLangCard
            img={CPlus}
            title="C++"
            color="#004482"
          />
          <MainLangCard
            img={Java}
            title="Java"
            color="#ff010a"
          />
          <MainLangCard
            img={TS}
            title="TypeScript"
            color="#237ec8"
          />
          <div
            style={{
              width: '100%',
            }}
          />
          <LangCard
            img={JS}
            title="JavaScript"
            color="#eed65b"
          />
          <LangCard
            img={Go}
            title="Golang"
            color="#00addb"
          />
          <LangCard
            img={PHP}
            title="PHP"
            color="#8791c1"
          />
          <LangCard
            img={C}
            title="C"
            color="#808a96"
          />
          <LangCard
            img={HTML}
            title="HTML/CSS"
            color="#c86a45"
          />
          <div
            style={{
              marginTop: 24,
              marginBottom: 12,
              width: '100%',
              textAlign: 'center',
              color: 'gray',
            }}
          >
            Here are my faviroute tools
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
