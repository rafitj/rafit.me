import React, { Component } from 'react';
import { Container, Row , Col} from 'react-grid-system';
import '../../assets/styles/footer.css'
import Header from './Header';
import GeneralModal from './GeneralModal';
class Footer extends Component {
    state = {
        showEmail: false,
        showNum: false,
        showLoc: false
    }
    onHide=()=>{
        this.setState({showEmail:false})
        this.setState({showLoc:false})
        this.setState({showNum:false})
    }
    openEmail=()=>{
        this.setState({showEmail:true})
    }
    openLoc=()=>{
        this.setState({showLoc:true})
    }
    openNum=()=>{
        this.setState({showNum:true})
    }
    renderModals () {
        const {showEmail, showLoc, showNum} = this.state
        return (
            <>
            <GeneralModal onClick={this.onHide} show = {showEmail} onHide = {this.onHide}
                header = "Email is the best way to reach me!" text = "rafit.jamil@gmail.com"/>
            <GeneralModal onClick={this.onHide} show = {showNum} onHide = {this.onHide}
                header = "Please don't spam my number" text = "416-551-5165"/>
            <GeneralModal onClick={this.onHide} show = {showLoc} onHide = {this.onHide}
                header = "I'm currently living in ..." text = "Waterloo ON, Canada"/>
            </>
        )
    }
    render() {
        return (
        <>
        {this.renderModals()}
          <Container>
            <div id = "contact" data-aos="fade-up" data-aos-duration = "500" className = "footer_container">
                <Header text = "Connect" contact/>
                <div className="connect-details">
                    <p>rafit.jamil@gmail.com</p> <br/>
                    <p>416-551-5165 </p> <br/>
                    <p>Waterloo ON, Canada</p><br/>
                    <a href="https://www.linkedin.com/in/rafitj/"><i className="fab fa-2x fa-linkedin"></i></a>
                    <a href="http://github.com/rafitj"><i className="fab fa-2x fa-github"></i></a>
                    <a href="https://dribbble.com/rafitj"><i className="fab fa-2x fa-dribbble-square"></i></a>
                </div>
                <br/>
                <h5>Copyright © 2019 Rafit Jamil. All rights reserved.</h5>
            </div>
          </Container>
          </>
        );
    }
}

export default Footer;
