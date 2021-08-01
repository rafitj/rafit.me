import React, { useEffect, useState } from 'react';
import arm from '../../../assets/images/emoji/arm.png';
import art from '../../../assets/images/emoji/art.png';
import cloud from '../../../assets/images/emoji/cloud.png';
import school from '../../../assets/images/emoji/school.png';
import soccer from '../../../assets/images/emoji/soccer.png';
import '../../../assets/styles/home.css';

const textArray = [
  <>
    <div>and I study Software @ UWaterloo</div>
    <img src={school} alt="school" className="emoji" />
  </>,
  <>
    <div>and I'm a SWE Intern @ Amazon</div>
    <img src={cloud} alt="cloud" className="emoji" />
  </>,
  <>
    <div>and I love everything football</div>
    <img src={soccer} alt="soccer" className="emoji" />
  </>,
  <>
    <div>and I'm trying to learn cool stuff</div>
    <img src={arm} alt="arm" className="emoji" />
  </>,
  <>
    <div>and I like film, food and design</div>
    <img src={art} alt="art" className="emoji" />
  </>,
];

const HomeText = () => {
  const [indx, setIndx] = useState(0);
  useEffect(() => {
    const timerID = setInterval(clickSlide, 5000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });
  const clickSlide = () => {
    setIndx((indx + 1) % textArray.length);
  };
  return (
    <div className="home-text" onClick={clickSlide}>
      {textArray[indx]}
    </div>
  );
};

export default HomeText;
