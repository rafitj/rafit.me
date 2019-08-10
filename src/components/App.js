import React from 'react';
import Maintenance from './Maintenance';
import Content from './Content';
import '../assets/styles/app.css'
import LogoAnimation from './Sections/LogoAnimation';
class App extends React.Component {
    state = {
        pageLoaded: false
    }
    componentDidMount(){
        setTimeout(this.handleImageLoaded,2500)
    }
    handleImageLoaded = () =>{
        this.setState({pageLoaded:true})
    }
    render() {
        const touch = this.state.pageLoaded ? {} : {cursor: 'default'}
        const style = this.state.pageLoaded ? {transition: 'all 1s ease', opacity: 1} : {opacity: 0}
        const loading_style = this.state.pageLoaded ? "loading_hide" : "loading_show"
        const maintenance = false;
        if (maintenance) {
            return (
                    <Maintenance />
            )
        }
        return (
            <div style = {touch}>
                <div className = {loading_style} ><LogoAnimation/></div>
                <div style = {style} className="main" >
                    <div>
                        <Content />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
