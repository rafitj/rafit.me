import React, { Fragment } from 'react';
import Maintenance from './Maintenance';
import Content from './Content';
import '../assets/styles/app.css'
import bg from '../assets/images/Background2.svg'
class App extends React.Component {
    render() {
        const maintenance = true;
        if (maintenance === false) {
            return <Maintenance />
        }
        return (
            <>
            <img className ="bg "src = {bg} alt="bg" />
            <div className="main">
                <Content />
                
            </div>
            </>
        );
    }
}

export default App;
