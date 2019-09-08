import React from 'react';
import Maintenance from './Maintenance';
import Content from './Content';
import '../assets/styles/app.css'
import LogoAnimation from './Sections/LogoAnimation';
class App extends React.Component {
    render() {
        const maintenance = false;
        if (maintenance) {
            return ( <
                Maintenance / >
            )
        }
        return (
            <>
            <LogoAnimation/>
            <div data-aos = "fade" data-aos-delay = {1500}  >
                <div  className = "main" >
                    <div>
                    <Content/>
                    </div>
                </div >
            </div>
        </>

        );
    }
}

export default App;