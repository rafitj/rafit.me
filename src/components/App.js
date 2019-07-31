import React from 'react';
import Maintenance from './Maintenance';
import Content from './Content';
import '../assets/styles/app.css'
class App extends React.Component {
    state = {
        pageLoaded: false
    }
    handleLoad = () => {
        console.log("page loaded")
        this.setState({pageLoaded:true})
    }
    render() {
        const style = this.state.pageLoaded ? {transition: 'all 1s ease', opacity: 1} : {opacity: 0}
        const maintenance = true;
        if (maintenance) {
            return (
                    <Maintenance />
            )
        }
        return (
            <div style = {style} className="main" onLoad = {this.handleLoad}>
                <div>
                    <Content />
                </div>
            </div>
        );
    }
}

export default App;
