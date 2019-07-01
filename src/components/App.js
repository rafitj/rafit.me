import React, { Fragment } from 'react';
import Maintenance from './Maintenance';
import Content from './Content';


class App extends React.Component {
    render() {
        const maintenance = true;
        if (maintenance === true) {
            return <Maintenance / >
        }
        return (
          <Content />
        );
    }
}

export default App;
