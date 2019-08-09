import React from 'react';
import Maintenance from './Maintenance';
import Content from './Content';
import '../assets/styles/app.css'
class App extends React.Component {
    state = {
        pageLoaded: false
    }
    componentDidMount(){
        setTimeout(this.setState({pageLoaded:true}), 5000)
    }
    render() {
        console.log(this.state.pageLoaded)
        const style = this.state.pageLoaded ? {transition: 'all 1s ease', opacity: 1} : {opacity: 0}
        const maintenance = false;
        if (maintenance) {
            return (
                    <Maintenance />
            )
        }
        if ( this.state.pageLoaded === false){
            return (
                <div><h1>Loading</h1></div>
            )
        }
        return (
            <div style = {style} className="main" >
                <div>
                    <Content />
                </div>
            </div>
        );
    }
}

export default App;
