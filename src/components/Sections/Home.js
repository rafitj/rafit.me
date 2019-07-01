import React, { Component, Fragment } from 'react';

class Home extends Component {
    render() {
        return (
          <>
            <div className = "profile_image"></div>
            <p>Hey, I'm</p>
            <h3>Rafit Jamil</h3>
            <p>I’m a Software Engineering Student at UW. I like coding, coffee and football.</p>
            <div>Experience</div>
            <div>Projects</div>
            <div>Skills</div>
          </>
        );
    }
}

export default Home;
