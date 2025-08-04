import React from 'react';
import '../assets/styles/app.css';
import Footer from './Sections/Footer';
import Home from './Sections/Home/Home';
class App extends React.Component {
  render() {
    return (
      <>
        <Home />
        <Footer />
      </>
    );
  }
}

export default App;
