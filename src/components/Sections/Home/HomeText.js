import React, { Component } from 'react';
import '../../../assets/styles/home.css'
import Slider from 'react-slick';

const textArray = [<p>🎒 Software Engineering at the University of Waterloo 🎒</p>, 
                    <p>👨‍💻 SWE Intern at Setter 👨‍💻</p>,
                    <p>⚽ Football Fanatic and Madridista 🏆</p>, 
                    <p>😍 Python x Go x TypeScript x C++ 😍</p>, 
                    <p>🤖 Distributed Computing & Machine Learning 🤖</p>, 
                    <p>🎥 Movies, 🎨 Graphic Design and 🍔 Food</p>, 
                    <p>🎯 Putting Tech in Everyone's Hands 🎯</p>];
class HomeText extends Component {
    state = {
        oldSlide: 0,
        activeSlide: 0,
        array: textArray
      };
    render() {
        const changeSlide = (current, next) => {
            this.setState({ oldSlide: current, activeSlide: next })
        }
        const settings = {
            autoplay: true,
            slidesToShow: 1,
            centerMode: true,
            focusOnSelect: true,
            dots: false,
            arrows: false,
            swipeToSlide: true,
            speed: 250,
            vertical: true,
            beforeChange: changeSlide,
            infinite: true,
          };
        return (
            <div className="text-display-home">
                <Slider ref={slider => this.slider = slider} {...settings}>
                            {textArray}
                </Slider>
            </div>
       
        );
    }
}

export default HomeText;
