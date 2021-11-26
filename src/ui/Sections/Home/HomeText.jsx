import React, { useEffect, useState } from 'react';
import '../../../assets/styles/home.css';

const loading = () => (
  <>
    <p class="from-them">
      <div class="loading">
        <div class="dot one"></div>
        <div class="dot two"></div>
        <div class="dot three"></div>
      </div>
    </p>
  </>
);

const textArray = [
  <p class="from-them">
    Hi, I'm Rafit{' '}
    <span aria-label="" role="img">
      👋🏽
    </span>
  </p>,
  loading(),
  <p class="from-them">
    I study SE @ UWaterloo{' '}
    <span aria-label="" role="img">
      🎒
    </span>
  </p>,
  loading(),
  <p class="from-them">
    I'm a SWE Intern @ Google{' '}
    <span aria-label="" role="img">
      🔍
    </span>
  </p>,
  loading(),
  <p class="from-them">
    I love football{' '}
    <span aria-label="" role="img">
      ⚽
    </span>
  </p>,
  loading(),
  <p class="from-them">
    I like film, food and design{' '}
    <span aria-label="" role="img">
      🍿
    </span>
  </p>,
  loading(),
];


const HomeText = () => {
  const [indx, setIndx] = useState(0);
  const [showTime, setShowTime] = useState(false);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    })
  );
  useEffect(() => {
    const timerID = setInterval(clickSlide, 5000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });
  const clickSlide = () => {
    setIndx((indx + 1) % textArray.length);
    setShowTime(false);
    if (indx % 2 !== 0) {
      setTime(
        new Date().toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    } else {
      setTime('');
    }
  };
  const onMouseOver = () => {
    setShowTime(true);
  };
  const onMouseLeave = () => {
    setShowTime(false);
  };
  const getMsg = (i) => (
    <div
      className={"fadeIn imessage " + i}
      onClick={clickSlide}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {textArray[i]}
      <p className={!showTime ? 'sent' : 'sent show'}>{time}</p>
    </div>
  );
  return getMsg(indx);
};

export default HomeText;
