import React from 'react';
import Maintenance from './Maintenance';
import Content from './Content';
import '../assets/styles/app.css'
import Home from './Sections/Home/Home';
import AOS from 'aos';
class App extends React.Component {
    componentDidMount() {
        AOS.init();
    }
    render() {
        const maintenance = false;
        if (maintenance) {
            return (<
                Maintenance />
            )
        }
        return (
            <>
                <Home />
                <div data-aos="fade" >
                    <div className="main" >
                        <div>
                            <Content />
                        </div>
                    </div >
                </div>
            </>

        );
    }
}

export default App;