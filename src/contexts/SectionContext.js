import React from 'react';

const Context = React.createContext('');

export class SectionStore extends React.Component {
  state = { section : '' };

  onSectionChange = (section) => {
    this.setState({section});
  }
  render() {
    return(
      <Context.Provider value = {{...this.state, onSectionChange: this.onSectionChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
