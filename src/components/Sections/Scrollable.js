import React, { Component } from "react";
import Slider from "react-slick";
import github from "../../assets/images/github.svg";
import hacker_earth from "../../assets/images/hacker_earth.svg";
import devpost from "../../assets/images/devpost.svg";
import nav_arrow from "../../assets/images/nav_arrow.svg";

class Scrollable extends Component {
  state = {
    oldSlide: 0,
    activeSlide: 0
  };
  render() {
    const changeSlide = (current, next) => {
      this.setState({ oldSlide: current, activeSlide: next });
    };
    // const resetSlide = () => {
    //     this.setState({ oldSlide: 0, activeSlide: 0 })
    //     this.slider.slickGoTo(0)
    // }
    const ArrowLeft = props =>  (
      <button {...props} className={"left-arrow"}>
        <img className={props.className + " l-arrow"}  src={nav_arrow} alt="left-arrow" />
      </button>
    );
    const ArrowRight = props => (
      <button {...props} className={"right-arrow"}>
        <img className={props.className + " r-arrow"} src={nav_arrow} alt="right-arrow" />
      </button>
    );

    var settings = {
      autoplay: false,
      slidesToShow: this.props.show,
      centerMode: true,
      focusOnSelect: true,
      dots: false,
      infinite: false,
      arrows: true,
      swipeToSlide: true,
      speed: 250,
      beforeChange: changeSlide,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />
    };
    var i = this.state.activeSlide;
    let element;
    if (i !== this.props.max) {
      element = this.props.children[i].props;
    } else {
      element = {
        extra_classes: "",
        title: "",
        desc: ""
      };
    }
    const renderChildren = () => {
      const items = this.props.children;
      // concat(
      //     <div onClick = {resetSlide} className = "end-cont">
      //         <img alt ="goback" className = "end-x" src = {cross}/>
      //     </div>
      // )
      return items.map((p, indx) => {
        if (indx === this.props.max) {
          return p;
        }
        if (i === indx) {
          return <div key={Math.random()}>{p}</div>;
        }
        return (
          <div key={Math.random()} className="dim">
            {p}
          </div>
        );
      });
    };
    const renderTools = () => {
      if (this.props.tools === undefined) {
        return <></>;
      } else {
        return (
          <div className="slider-tools-cont">
            {this.props.tools.map(t => {
              if (t.props.type === element.title) {
                return (
                  <div key={Math.random()} className="slider-tool">
                    {t}
                  </div>
                );
              }
              return <span key={Math.random()}></span>;
            })}{" "}
          </div>
        );
      }
    };
    const renderGit = el => {
      if (el.link) {
        return (
          <a target="_blank" rel="noopener noreferrer" href={el.link}>
            <img className="git" src={github} alt="github" />
          </a>
        );
      }
    };
    const renderDev = el => {
      if (el.devpostUrl) {
        return (
          <a target="_blank" rel="noopener noreferrer" href={el.link}>
            <img className="git" src={devpost} alt="devpost" />
          </a>
        );
      }
    };
    const renderHacker = el => {
      if (el.hackerUrl) {
        return (
          <a target="_blank" rel="noopener noreferrer" href={el.link}>
            <img className="git" src={hacker_earth} alt="hacker_earth" />
          </a>
        );
      }
    };
    const className = "open-slider";
    return (
      <div className={className}>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {renderChildren()}
        </Slider>
        <div className={"slider-text " + element.extra_classes}>
          <div className="slider-main">{element.title}</div>
          {element.desc ? (
            <div className="slider-sub">{element.desc}</div>
          ) : (
            <div></div>
          )}
          {renderTools()}
          {renderGit(element)}
          {renderDev(element)}
          {renderHacker(element)}
        </div>
      </div>
    );
  }
}

export default Scrollable;
