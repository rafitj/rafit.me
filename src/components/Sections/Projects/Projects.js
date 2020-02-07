import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import Header from '../Header';
import framear from '../../../assets/images/projects/FrameAR.svg'
import density from '../../../assets/images/projects/Density.png'
import pseudo from '../../../assets/images/projects/PseudoLogo.svg'
import realm from '../../../assets/images/projects/Realm.svg'
import fashionably from '../../../assets/images/projects/Fashionably.svg'
import gaze from '../../../assets/images/projects/Gaze.svg'
import echo from '../../../assets/images/projects/Echo.svg'
import compass from '../../../assets/images/projects/Compass.svg'
import Scrollable from '../Scrollable'
class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <Header text="Projects" />
                <Scrollable show = {5}>
                        <ProjectCard img={density} title="Density" date="May 2019" extra_classes="density"
                            desc="Population density tracking and analytics via passive wifi-detection"
                            link="https://github.com/rafitj/density"
                            onClick={this.openModal}
                            trophy="RU Hacks 2019 Winner"
                            hackerUrl="https://ruhacks2019.hackerearth.com/challenges/hackathon/ru-hacks-2019/dashboard/1e422e1/submission/"
                            techData={["Node", "Arduino", "C++", "React"]}
                            />
                        <ProjectCard img={framear} title="FrameAR" date="June 2019" extra_classes="framear"
                            desc="Custom version control system and AR visualization for 3D CAD"
                            link="https://github.com/rafitj/framear"
                            techData={["Swift", "JS", "MongoDB"]}
                            trophy="ENG Hacks 2019 Winner"
                            devpostUrl="https://devpost.com/software/framear"

                        />
                        <ProjectCard img={gaze} title="Gaze" date="August 2019" extra_classes="gaze"
                            desc="Gaze tracking detection and analytics"
                            link="https://github.com/rafitj/gaze"
                            techData={["Python", "OpenCV", "Keras", "Cassandra", "Flask"]}
                        />
                        <ProjectCard img={compass} title="Compass" date="September 2019" extra_classes="compass"
                            desc="Reinventing user-recommendation and city exploration through AR and Facebook"
                            link="https://github.com/rafitj/compass"
                            techData={["Swift", "Flask", "Python", "Node", "Firebase"]}
                            trophy="Hack the North 2019 Winner"
                            devpostUrl="https://devpost.com/software/wandar"
                        />

                    <ProjectCard img={realm} title="Realm" date="August 2019" extra_classes="realm"
                                            desc="Virtual, immersive AR, ML and Speech powered presentation software"
                                            link="https://github.com/rafitj/realm"
                                            trophy="Hack the 6ix 2019 Winner"
                                            devpostUrl="https://devpost.com/software/realm"
                                            techData={["AWS", "React", "Swift"]}
                     
                    />
                    <ProjectCard img={pseudo} title="Pseudo" date="April 2019" extra_classes="pseudo"
                        desc="Micro-freelancing for developers, designers and creators"
                        link="https://github.com/rafitj/pseudo-project"
                        techData={["Django", "React", "AWS"]}
                        />
                    <ProjectCard img={fashionably} title="Fashionably" date="January 2019" extra_classes="fashionably"
                        desc="ML assisted attire and closet management"
                        link="https://github.com/rafitj/fashionably"
                        techData={["Swift", "Python", "Keras"]}
                        trophy="StarterHacks 2019 Winner"
                        devpostUrl="https://devpost.com/software/fashionably"
                       />
                    <ProjectCard img={echo} title="Echo" date="October 2018" extra_classes="echo"
                        desc="Gesture controlled laptop hardware"
                        link="https://github.com/rafitj/echo"
                        techData={["Python", "C", "Arduino"]}
                         />
                </Scrollable>
            </section>
        );
    }
}

export default Projects;
