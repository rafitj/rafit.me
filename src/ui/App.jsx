import React from 'react';
import '../assets/styles/app.css';
import Footer from './sections/Footer';
import Home from './sections/Home/Home';
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
