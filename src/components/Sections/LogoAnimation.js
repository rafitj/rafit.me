import React, { Component } from 'react';
import img_0 from '../../assets/logo_anim/img_0.png';
import img_1 from '../../assets/logo_anim/img_1.png';
import img_2 from '../../assets/logo_anim/img_2.png';
import img_3 from '../../assets/logo_anim/img_3.png';
import img_4 from '../../assets/logo_anim/img_4.png';
import img_5 from '../../assets/logo_anim/img_5.png';
import img_6 from '../../assets/logo_anim/img_6.png';
import img_7 from '../../assets/logo_anim/img_7.png';
import AOS from 'aos';
import '../../assets/styles/app.css'


class LogoAnimation extends Component {

    componentDidMount(){
        AOS.init();
    }

    logo_parts = [img_7,img_6,img_5,img_4,img_3,img_2,img_1,img_0]

    render() {
        var delay = 0
        const logo = this.logo_parts.map((i)=>{
            delay += 150
            return <img data-aos = "fade" data-aos-delay = {delay} data-aos-duration className = "logo_part" src={i} alt="asdf" key={Math.random()}/>
        })
        return(
            <div className="logo_part_cont">{logo}</div>
        )
    }
}

export default LogoAnimation;
