import React from 'react';
import Resume from '../../../assets/resume/Resume.pdf';
import '../../../assets/styles/home.css';
import { openInNewTab } from '../../utils';

const HomeLinks = () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: '0 auto',
        marginTop: 15,
        padding: 0,
        justifyContent: 'center',
        width: '100%',
        flexWrap: 'wrap',
      }}
    >
      <div onClick={() => openInNewTab(Resume)} className="link home-link">
        <div style={{ marginRight: 'calc(3.5px + 0.25vw)', display: 'flex' }}>
          <ion-icon name="reader"></ion-icon>
        </div>
        Resume
        <div> </div>
      </div>
      <div
        onClick={() => openInNewTab('mailto: rafit.jamil@gmail.com')}
        className="link home-link"
      >
        <div style={{ marginRight: 'calc(3.5px + 0.25vw)', display: 'flex' }}>
          <ion-icon name="mail"></ion-icon>
        </div>
        <div>Email</div>
      </div>
      <div
        onClick={() => openInNewTab('http://github.com/rafitj')}
        className="link home-link"
      >
        <div style={{ marginRight: 'calc(3.5px + 0.25vw)', display: 'flex' }}>
          <ion-icon name="logo-github"></ion-icon>
        </div>
        <div>Github</div>
      </div>
      <div
        onClick={() => openInNewTab('https://www.linkedin.com/in/rafitj')}
        className="link home-link"
      >
        <div style={{ marginRight: 'calc(3.5px + 0.25vw)', display: 'flex' }}>
          <ion-icon name="logo-linkedin"></ion-icon>
        </div>
        <div>LinkedIn</div>
      </div>
    </div>
  );
};

export default HomeLinks;
