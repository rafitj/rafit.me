import React, { Component } from 'react';
import Slider from 'react-slick';
import github from '../../assets/images/github.svg'
import hacker_earth from '../../assets/images/hacker_earth.svg'
import devpost from '../../assets/images/devpost.svg'
import cross from '../../assets/images/cross.svg'

class Scrollable extends Component {
    state = {
        oldSlide: 0,
        activeSlide: 0,
        showScroll: false,
        opened: false
      };
    render(){
        const changeSlide = (current, next) => {
            this.setState({ oldSlide: current, activeSlide: next })
            if (next === this.props.max) {
                this.setState({ showScroll: false})
                this.setState({ activeSlide: 0})
                this.setState({opened: false})
                resetSlide()
            }
        }
        const resetSlide = () => {
            this.slider.slickGoTo(0)
        }
        var settings = {
            autoplay: this.state.showScroll,
            slidesToShow: this.props.show,
            centerMode: true,
            focusOnSelect: true,
            dots: false,
            infinite: false,
            arrows: false,
            swipeToSlide: true,
            speed: 250,
            beforeChange: changeSlide,
          };
        var i = this.state.activeSlide
        if (i!==this.props.max) var element = this.props.children[i].props
        else {
            var element = {
                extra_classes: "",
                title: "",
                desc: ""
            }
        }
        const renderChildren = () => {
            const items = this.props.children.concat(
                <div className = "end-cont"> 
                    <img className = "end-x" src = {cross}/>
                </div>
            )
            return items.map((p,indx) => {
                if (indx === this.props.max) {
                    return p
                }
                if (i === indx) {
                    return <div>{p}</div>
                }
                return <div className = "dim">{p}</div>
            })
        }
        const renderTools = () => {
            if (this.props.tools === undefined){
                return <></>
            }
            else {
                return this.props.tools.map((t) => {
                    if (t.props.type === element.title) {
                        return <div className ="slider-tool">{t}</div>
                    }
                    return <></>
                })
            }
        }
        const renderGit = (el) => {
            if (el.link) {
                return  <a target="_blank" href={el.link}><img className = "git" src={github} alt="github" /></a>
            }
        }
        const renderDev = (el) => {
            if (el.devpostUrl) {
                return  <a target="_blank" href={el.link}><img className = "git" src={devpost} alt="devpost" /></a>
            }
        }
        const renderHacker = (el) => {
            if (el.hackerUrl) {
                return  <a target="_blank" href={el.link}><img className = "git" src={hacker_earth} alt="hacker_earth" /></a>
            }
        }
        const className = this.state.showScroll ? "open-slider" : "close-slider"
        const openSlider = () =>{
            if (!this.state.opened) {
                this.setState({showScroll: true})
                this.setState({opened: true})
            }
        }
        return (

            <div className = {className} onClick = {openSlider}>
                <Slider ref={slider => this.slider = slider} {...settings}>
                    {renderChildren()}
                </Slider>
                <div className = {"slider-text " + element.extra_classes}>
                    <div className = "slider-main">{element.title}</div>
                    <div className = "slider-sub">{element.desc}</div>
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
