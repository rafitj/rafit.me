import React from 'react';
import Maintenance from './Maintenance';
import Content from './Content';
import '../assets/styles/app.css'
class App extends React.Component {
    render() {
        const maintenance = true;
        if (maintenance === false) {
            return <Maintenance />
        }
        return (
            <div className="main">
                <div>
                    <Content />
                </div>
            </div>
        );
    }
}

export default App;
