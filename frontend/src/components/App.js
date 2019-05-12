import React, {Fragment} from 'react';
import Maintenance from './Maintenance';
import SectionSelector from './SectionSelector';
import Section from './Section';
import { SectionStore } from '../contexts/SectionContext';


class App extends React.Component {
  render () {
    const maintenance = true;
    if (maintenance === true){
      return <Maintenance />
    }
    return (
      <Fragment>
        <SectionStore>
            <Section/>
            <SectionSelector/>
        </SectionStore>
      </Fragment>
    );
  }
}

export default App;
