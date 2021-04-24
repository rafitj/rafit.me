import React, { useEffect, useState } from 'react';
import '../../../assets/styles/home.css';

const textArray = [
  'I study software @ UWaterloo 🎒',
  "I'm a SWE Intern @ Salesforce ☁",
  'I love everything football ⚽',
  "I'm trying to learn cool stuff 🦾",
  'I like film, food and design 🖼️',
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
