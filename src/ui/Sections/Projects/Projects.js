import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import Header from '../Header';
import framear from '../../../assets/images/projects/FrameAR.svg'
import density from '../../../assets/images/projects/Density.svg'
import pseudo from '../../../assets/images/projects/PseudoLogo.svg'
import realm from '../../../assets/images/projects/Realm.svg'
import fashionably from '../../../assets/images/projects/Fashionably.svg'
import gaze from '../../../assets/images/projects/Gaze.svg'
import echo from '../../../assets/images/projects/Echo.svg'
import compass from '../../../assets/images/projects/Compass.svg'
import pillar from '../../../assets/images/projects/Pillar.svg'
import traffix from '../../../assets/images/projects/Traffix.svg'
import { Space } from 'antd';

class Projects extends Component {
    state = {
        width: window.innerWidth
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
            <section id="projects">
                <Header text="Projects" />
                <Space size="large" style={{display: "flex", margin: '0 auto'}}>
                        <ProjectCard img={density} title="Density" date="May 2019" extra_classes="density"
                            desc="Passive Wifi Density Triangulation"
                            link="https://github.com/rafitj/density"
                            onClick={this.openModal}
                            trophy="RU Hacks 2019 Winner"
                            hackerUrl="https://ruhacks2019.hackerearth.com/challenges/hackathon/ru-hacks-2019/dashboard/1e422e1/submission/"
                            techData={["Node", "Arduino", "C++", "React"]}
                            />
                        <ProjectCard img={traffix} title="Traffix" date="May 2019" extra_classes="traffix"
                            desc="Autonomous Car Networks"
                            link="https://github.com/rafitj/traffix"
                            onClick={this.openModal}
                            trophy="RU Hacks 2019 Winner"
                            devpostUrl="https://devpost.com/software/traffix-pns9ax"
                            techData={["Node", "Arduino", "C++", "React"]}
                            />
                        <ProjectCard img={framear} title="FrameAR" date="June 2019" extra_classes="framear"
                            desc="VCS and AR visualization for 3D CAD"
                            link="https://github.com/rafitj/framear"
                            techData={["Swift", "JS", "MongoDB"]}
                            trophy="ENG Hacks 2019 Winner"
                            devpostUrl="https://devpost.com/software/framear"
                        />
                        <ProjectCard img={gaze} title="Gaze" date="August 2019" extra_classes="gaze"
                            desc="Real-Time Gaze Tracking Analytics"
                            link="https://github.com/rafitj/gaze"
                            techData={["Python", "OpenCV", "Keras", "Cassandra", "Flask"]}
                        />
                        
                        <ProjectCard img={compass} title="Compass" date="September 2019" extra_classes="compass"
                            desc="City Exploration via AR and Facebook"
                            link="https://github.com/rafitj/compass"
                            techData={["Swift", "Flask", "Python", "Node", "Firebase"]}
                            trophy="Hack the North 2019 Winner"
                            devpostUrl="https://devpost.com/software/wandar"
                        />

                    <ProjectCard img={realm} title="Realm" date="August 2019" extra_classes="realm"
                                            desc="AR, ML and Speech Powered Presentations"
                                            link="https://github.com/rafitj/realm"
                                            trophy="Hack the 6ix 2019 Winner"
                                            devpostUrl="https://devpost.com/software/realm"
                                            techData={["AWS", "React", "Swift"]}
                     
                    />
                    <ProjectCard img={pillar} title="Pillar" date="August 2019" extra_classes="pillar"
                                desc="Cheap & Voice-Powered Medical Hubs"
                                link="https://github.com/rafitj/pillar"
                                trophy="Hack the 6ix 2019 Winner"
                                devpostUrl="https://devpost.com/software/pillar-cum1sq"
                                techData={["AWS", "React", "Swift"]}
                     
                    />
                    <ProjectCard img={pseudo} title="Pseudo" date="April 2019" extra_classes="pseudo"
                        desc="Micro-Freelancing for All Creators"
                        link="https://github.com/rafitj/pseudo-project"
                        techData={["Django", "React", "AWS"]}
                        />
                    <ProjectCard img={fashionably} title="Fashionably" date="January 2019" extra_classes="fashionably"
                        desc="ML Assisted Wardrobe Management"
                        link="https://github.com/rafitj/fashionably"
                        techData={["Swift", "Python", "Keras"]}
                        trophy="StarterHacks 2019 Winner"
                        devpostUrl="https://devpost.com/software/fashionably"
                       />
                    <ProjectCard img={echo} title="Echo" date="October 2018" extra_classes="echo"
                        desc="Gesture Controlled Laptop"
                        link="https://github.com/rafitj/echo"
                        techData={["Python", "C", "Arduino"]}
                         />
                </Space>
            </section>
        );
    }
}

export default Projects;
