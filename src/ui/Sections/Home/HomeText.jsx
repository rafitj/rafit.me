import React, { useEffect, useState } from 'react';
import AMZ from '../../../assets/images/exp/AMZ.svg';
import CRM from '../../../assets/images/exp/CRM.svg';
import FB from '../../../assets/images/exp/FB.svg';
import GOOGL from '../../../assets/images/exp/GOOGL.svg';
import '../../../assets/styles/home.css';

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

  const loading = () => (
    <>
      <p class="from-them">
        <div class="loading">
          <div class="dot one"></div>
          <div class="dot two"></div>
          <div class="dot three"></div>
        </div>
      </p>
      <p className={!showTime ? 'sent' : 'sent show'}>{time}</p>
    </>
  );

  const textArray = [
    <>
      <p class="from-them">
        Hi, I'm Rafit{' '}
        <span aria-label="" role="img">
          👋🏽
        </span>
      </p>
      <p className={!showTime ? 'sent' : 'sent show'}>{time}</p>
    </>,
    loading(),
    <>
      <p class="from-them">
        I study SE @ UWaterloo{' '}
        <span aria-label="" role="img">
          🎒
        </span>
      </p>
      <p className={!showTime ? 'sent' : 'sent show'}>{time}</p>
    </>,
    loading(),
    <>
      <p class="from-them" style={{ display: 'flex', alignItems: 'center' }}>
        I'm a SWE @ Google{' '}
        <img alt="" src={GOOGL} style={{ width: 17.5, marginLeft: 7.1 }} />
      </p>
      <p className={!showTime ? 'sent' : 'sent show'}>{time}</p>
    </>,
    loading(),
    <>
      <p class="from-them" style={{ display: 'flex', alignItems: 'center' }}>
        I've worked @
        <img alt="" src={FB} style={{ width: 23, marginLeft: 7.1 }} />
        <img alt="" src={GOOGL} style={{ width: 17.5, marginLeft: 7.1 }} />
        <img alt="" src={AMZ} style={{ width: 17, marginLeft: 7.1 }} />
        <img alt="" src={CRM} style={{ width: 25, marginLeft: 7.1 }} />
      </p>
      <p className={!showTime ? 'sent' : 'sent show'}>{time}</p>
    </>,
    loading(),
    <>
      <p class="from-them">
        I love football{' '}
        <span aria-label="" role="img">
          ⚽
        </span>
      </p>
      <p className={!showTime ? 'sent' : 'sent show'}>{time}</p>
    </>,
    loading(),
    <>
      <p class="from-them">
        I like film, food and design{' '}
        <span aria-label="" role="img">
          🍿
        </span>
      </p>
      <p className={!showTime ? 'sent' : 'sent show'}>{time}</p>
    </>,
    loading(),
  ];
  const clickSlide = () => {
    setIndx((indx + 1) % textArray.length);
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
  return (
    <div
      className="fadeIn imessage"
      style={{ margin: 0, display: 'table', width: 'fit-content' }}
      onClick={clickSlide}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {textArray[indx]}
    </div>
  );
};

export default HomeText;
