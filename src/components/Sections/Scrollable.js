import React, { Component } from 'react';
import Slider from 'react-slick';

class Scrollable extends Component {
    state = {
        oldSlide: 0,
        activeSlide: 0,
      };
    render(){
        var settings = {
            slidesToShow: this.props.show,
            centerMode: true,
            focusOnSelect: true,
            dots: false,
            infinite: false,
            arrows: false,
            swipeToSlide: true,
            speed: 500,
            beforeChange: (current, next) => this.setState({ oldSlide: current, activeSlide: next }),
          };
        var i = this.state.activeSlide
        var element = this.props.children[i].props
        const renderChildren = () => {
            return this.props.children.map((p,indx) => {
                if (i === indx) {
                    return <div>{p}</div>
                }
                return <div className = "dim">{p}</div>
            })
        }
        const renderTools = () => {
            console.log(this.props.tools)
            if (this.props.tools === undefined){
                return <></>
            }
            else {
                return this.props.tools.map((t) => {
                    console.log(t.props)
                    if (t.props.type === element.title) {
                        return <div className ="slider-tool">{t}</div>
                    }
                    return <></>
                })
            }
        }
        return (
            <>
            <Slider {...settings}>
                {/* <div className = "scroll-start">START</div> */}
                {renderChildren()}
            </Slider>
            <div className = {"slider-text " + element.extra_classes}>
                <div className = "slider-main">{element.title}</div>
                <div className = "slider-sub">{element.desc}</div>
                {renderTools()}
            </div>
            </>
        );
    }
}

export default Scrollable;
