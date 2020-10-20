import React from "react";
import Slider from "react-slick";
import devpost from "../../assets/images/devpost.svg";
import github from "../../assets/images/github.svg";
import hacker_earth from "../../assets/images/hacker_earth.svg";

const Scrollable = (props) => {
  const [oldSlide, setOldSlide] = React.useState(0);
  const [activeSlide, setActiveSlide] = React.useState(0);
  
  const changeSlide = (current, next) => {
    setOldSlide(current);
    setActiveSlide(next);
  };
  var settings = {
    autoplay: false,
    slidesToShow: props.show,
    centerMode: true,
    focusOnSelect: true,
    dots: false,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    speed: 250,
    beforeChange: changeSlide,
  };
  var i = activeSlide;
  if (i !== props.max) var element = props.children[i].props;
  else {
    var element = {
      extra_classes: "",
      title: "",
      desc: "",
    };
  }
  const renderChildren = () => {
    const items = props.children;
    // concat(
    //     <div onClick = {resetSlide} className = "end-cont">
    //         <img alt ="goback" className = "end-x" src = {cross}/>
    //     </div>
    // )
    return items.map((p, indx) => {
      if (indx === props.max) {
        return p;
      }
      if (i === indx) {
        return <div>{p}</div>;
      }
      return <div className="dim">{p}</div>;
    });
  };
  const renderTools = () => {
    if (props.tools === undefined) {
      return <></>;
    } else {
      return (
        <div className="slider-tools-cont">
          {props.tools.map((t) => {
            if (t.props.type === element.title) {
              return <div className="slider-tool">{t}</div>;
            }
            return <></>;
          })}{" "}
        </div>
      );
    }
  };
  const renderGit = (el) => {
    if (el.link) {
      return (
        <a target="_blank" rel="noopener noreferrer" href={el.link}>
          <img className="git" src={github} alt="github" />
        </a>
      );
    }
  };
  const renderDev = (el) => {
    if (el.devpostUrl) {
      return (
        <a target="_blank" rel="noopener noreferrer" href={el.devpostUrl}>
          <img className="git" src={devpost} alt="devpost" />
        </a>
      );
    }
  };
  const renderHacker = (el) => {
    if (el.hackerUrl) {
      return (
        <a target="_blank" rel="noopener noreferrer" href={el.hackerUrl}>
          <img className="git" src={hacker_earth} alt="hacker_earth" />
        </a>
      );
    }
  };
  const className = "open-slider";
  
  return (
    <div className={className}>
      <Slider ref={(slider) => (slider = slider)} {...settings}>
        {renderChildren()}
      </Slider>
      <div className={"slider-text " + element.extra_classes}>
        <div className="slider-main">{element.title}</div>
        {element.desc && (
          <div className="slider-sub">{element.desc}</div>
        )}
        {element.loc && (
          <div className="slider-loc">{element.loc}</div>
        )}
        {renderTools()}
        {renderGit(element)}
        {renderDev(element)}
        {renderHacker(element)}
      </div>
    </div>
  );
}

export default Scrollable;
