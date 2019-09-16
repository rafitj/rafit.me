import React, { Component } from 'react';
import { Container, Row } from 'react-grid-system';
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
class Projects extends Component {
    state = {
        showModal: false,
        modalData: null,
        loadAll: false
    }
    closeModal = () => {
        this.setState({ showModal: false })
    }
    openModal = (e) => {
        console.log(e)
        this.setState({ showModal: true })
    }
    toggleAll = () => {
        const prev = this.state.loadAll
        this.setState({ loadAll: !prev })
    }
    render() {
        if (this.state.loadAll) {
            var rest = (
                <>
                    <ProjectCard img={realm} title="Realm" date="August 2019" extra_classes="realm"
                        desc="Virtual, immersive AR, ML and Speech powered presentation software"
                        link="https://github.com/rafitj/realm"
                        trophy="Hack the 6ix 2019 Winner"
                        devpostUrl="https://devpost.com/software/realm"
                        techData={["AWS", "React", "Swift"]}
                        detail={
                            <p>
                                As AR and virtual worlds become more prevalent and advances, our ability to communicate must evolve as well. Realm is a technology that allows users to create dynamic, collaborative, presentations with voice commands, image searches and complete body-tracking for the most customizable and interactive presentations all in augmented reality.
                                    <br /><br />
                                Realm is extremely scalable, with the backend infrastructure built entirely in the cloud using AWS. Everything including SageMaker, S3 Buckets, Lex, DynamoDB, Lambda and API Gateway contribute to Realm, pipelining everything from the React frontend browser application to the Swift application. The Swift Application makes use of AR Kit and Scene Kit to perform the visualization, body-tracking, physic rendering and more.
                                    <br /><br />
                                The vision is an increased ease in dynamic presentations and limitless collaborative work spaces with improvements to technology like Realm.
                                </p>
                        }
                    />
                    <ProjectCard img={pseudo} title="Pseudo" date="April 2019" extra_classes="pseudo"
                        desc="Micro-freelancing for developers, designers and creators"
                        link="https://github.com/rafitj/pseudo-project"
                        techData={["Django", "React", "AWS"]}
                        detail={<p>
                            Technological resources are abundant but there are problems with all of them. Expensive online-courses, unfinished StackOverflow questions and poorly constructed Youtube Playlists are not sufficient creatives, designers, developers and entrepreneurs looking to bring their ideas to life. Pseudo is a web platform made for this specific market - a micro-freelancing community built by the people. Pseudo allows users to post projects and questions that they can’t find sufficient information for or requires extra-special advise and expertise. Posts can range from graphic design to application building to writing. Freelancers can then answer or assist posters, earning either Pseudo Points or real cash for their efforts.
                                <br /><br />
                            Pseudo is built on a robust Django backend server with a Postgres database. This managers user OAuth, profile creation, post making, reward systems, currency management, promotions and much more. Through Django REST, a React frontend brings the site to life. Much of the data is currently stored in AWS S3 providing scalability and stability. Pseudo is an on-going project and is adding new features constantly.
                            </p>} />
                    <ProjectCard img={fashionably} title="Fashionably" date="January 2019" extra_classes="fashionably"
                        desc="ML assisted attire and closet management"
                        link="https://github.com/rafitj/fashionably"
                        techData={["Swift", "Python", "Keras"]}
                        trophy="StarterHacks 2019 Winner"
                        devpostUrl="https://devpost.com/software/fashionably"
                        detail={<p>
                            As AI continues to sneak further into our lives, it is simply a matter of time before it decides what we wear. Fashionably approaches this future gracefully, providing an app that empowers individuals through an AI powered closet.
                                    <br /><br />
                            The app is built on Swift and makes use of CoreML and an ML model built using Keras in Python. Fashionably’s primary focus is allowing users to take pictures of new articles of clothing, using image classification to label that item and sorting it into a database. Users can then ask Fashionably for the perfect outfit and using an algorithm
                            that incorporates style and warmth, selects a 4-piece outfit for the day. Users also have quick access to change outfits, favourite pairings and shop on the spot
                                </p>} />
                    <ProjectCard img={echo} title="Echo" date="October 2018" extra_classes="echo"
                        desc="Gesture controlled laptop hardware"
                        link="https://github.com/rafitj/echo"
                        techData={["Python", "C", "Arduino"]}
                        detail={
                            <p>
                                Echo is a computer attachment that allows users to control an abundant amount of computer functionality, quickly and efficiently with simple hand gestures. The system includes a hardware set of ultrasonic sensors and a software API built with C and Python. Functionality includes switching tabs, full browser control, video play-back, terminal commands and more. Users can also customize functionality and add more hand-gestures. This light-weight and cost-effective solution is convenient for those looking to increase their development speed and a fun way to interact with their computers.
                            </p>
                        } />

                </>
            );
        } else {
            rest = (<></>)
        }

        return (
            <section id="projects">
                <Header text="Projects" />
                <Container style={{ maxWidth: 'none' }}>
                    <Row>

                        <ProjectCard img={density} title="Density" date="May 2019" extra_classes="density"
                            desc="Population density tracking and analytics via passive wifi-detection"
                            link="https://github.com/rafitj/density"
                            onClick={this.openModal}
                            trophy="RU Hacks 2019 Winner"
                            hackerUrl="https://ruhacks2019.hackerearth.com/challenges/hackathon/ru-hacks-2019/dashboard/1e422e1/submission/"
                            techData={["Node", "Arduino", "C++", "React"]}
                            detail={
                                <p>
                                    The prominent integration of technology has made data analytics one of the most lucrative industries the world has ever seen and quantitive data on human behaviour is at the top of the list. Density is a software-hardware solution that models human movement and density patterns, completely passively and is an asset for everything from inventory systems, emergency services, business management and improved accessibility.
                                <br /><br />
                                    Density works by forming a mesh network with tiles of 4 ESP8266 micro controllers, Wi-Fi assisted Arduinos. Data is transmitted seamlessly with AES encryption (full anonymity), as it collects emitted Wi-Fi packets. This data is aggregated and used to triangulate positions of users. This processed data is sent through TCP to a Node JS server where after further processing is sent through a web-socket to a React frontend, displaying live analytics and heat maps of users within the area. As a framework Density provides limitless scenarios and can be applied to almost any scenario requiring people data.                             </p>}
                        />
                        <ProjectCard img={framear} title="FrameAR" date="June 2019" extra_classes="framear"
                            desc="Custom version control system and AR visualization for 3D CAD"
                            link="https://github.com/rafitj/framear"
                            techData={["Swift", "JS", "MongoDB"]}
                            trophy="ENG Hacks 2019 Winner"
                            devpostUrl="https://devpost.com/software/framear"
                            detail={<p>
                                Despite there being multi-billion dollar industry, 3D modellers and CAD designers lack a way to instantly display and receive live edits on their work or experience the full power of version control that software engineers are so familiar with. FrameAR is a multi-platform application that fills this gap through the creation of a version control system where users can track live commits in Slack and instantly view edits and their models in augmented reality with the full power of branches, comparisons and merging from the VCS.
                                  <br /><br />
                                FrameAR is built with a custom VCS imitating backend in Kotlin/SpringBoot and MongoDB, tracking commits, branches, comments and more. The browser app, made in React provides an easy-to-use interface for making commits and pushing to a repository. Finally, the Swift iOS app renders the SCN files and is able to display a projects commits, show commit differences, display comments and is fully interactive with the power of AR. FrameAR looks to provide creative teams new and dynamic means of collaboration to interact with the newest, greatest technologies.
                              </p>}

                        />
                        <ProjectCard img={gaze} title="Gaze" date="August 2019" extra_classes="gaze"
                            desc="Gaze tracking detection and analytics"
                            link="https://github.com/rafitj/gaze"
                            techData={["Python", "OpenCV", "Keras", "Cassandra", "Flask"]}
                            detail={
                                <p>
                                    The human eye is the most essential biological tool for consuming information. Understanding what people see and how people process what they see may prove an invaluable data source in future marketing and commercial endeavours. Gaze is an API built for this purpose, to analyze the eye.
                                    <br /><br />
                                    Built with Python, OpenCV and Keras, the Gaze Pupil Detection Algorithm accurately tracks the movement of pupils, adjusting for lighting conditions, angles and interferences (glasses/goggles). The algorithm is optimized for multi-person detection and is fault-tolerant through regression testing. The API, built upon this robust algorithm, is a Flask server with a Cassandra database, creating heat maps and analytics of user-gaze on adverts or commercials.
                                </p>
                            }
                        />
                        <ProjectCard img={compass} title="Compass" date="September 2019" extra_classes="compass"
                            desc="Reinventing user-recommendation and city exploration through AR and Facebook"
                            link="https://github.com/rafitj/compass"
                            techData={["Swift", "Flask", "Python", "Node", "Firebase"]}
                            trophy="Hack the North 2019 Winner"
                            devpostUrl="https://devpost.com/software/wandar"
                            detail={
                                <p>
                                    User social media date is projected to become one of the most valuable commodities on the planet and with Facebook being far and away the largest of these platforms, we decided to put user-data back in the hands of the people and connect them like never before. Compass is an iOS mobile application that brings Facebook into AR and leverages powerful algorithms to use user data for every-day tasks.
<br />
                                    The Swift made application begins with a user authentication system backed by Firebase that gives us access to public user information including friend lists, pages liked and events interested. With this data we deploy several Firebase Cloud Functions to compute relevant events nearby (both of the user and their friends) and display them at the location with live statistics in AR using ARKit. The user-data also is used to give consumers recommendations of sites, restaurants and shops to visit. This is done by using K-Means Clustering algorithms aggregating user and friend data to deduce closer friends and weight interests based on these computed relationships. Ultimately, compass aims to guide users through their social media and help us rediscover the true purpose of social media.
                                   </p>
                            }
                        />

                        {rest}
                        <div data-aos="fade" onClick={this.toggleAll} className="load_more">
                            {this.state.loadAll ? "See Less" : "Load More"} <br />
                        </div>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Projects;
