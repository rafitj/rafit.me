import React, { Component, useEffect, useState } from 'react';
import '../../../assets/styles/home.css'

const textArray = [<p>🎒 Software Engineering at UWaterloo 🎒</p>,
<p>👨‍💻 SWE Intern at Meter 👨‍💻</p>,
<p>⚽ Football Fanatic & Madridista 🏆</p>,
<p>😍 Python x Go x TypeScript x C++ 😍</p>,
<p>🤖 Distributed Computing & ML 🤖</p>,
<p>🎥 Films, 🎨 Design & 🍔 Food</p>,
<p>🎯 Putting Tech in Everyone's Hands 🎯</p>];

const HomeText = () => {
    const [indx, setIndx] = useState(0);
    useEffect(() => {
        const timerID = setInterval(
            clickSlide,
            5000
          );

          return function cleanup() {
            clearInterval(timerID);
        };
    })
    const clickSlide = () => {
        setIndx((indx+1)% textArray.length)
    }
    return (
        <div className="text-display-home" onClick={clickSlide}>
            {textArray[indx]}
        </div>
    )
}

export default HomeText;
