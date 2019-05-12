import React, {Fragment} from 'react';
import SectionSelector from './SectionSelector';
import Section from './Section';
import { SectionStore } from '../contexts/SectionContext';


class App extends React.Component {
  render () {
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
