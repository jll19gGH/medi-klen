import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Info from './components/Info';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';


class App extends React.Component {
  render() {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <Mission/>
      <Info/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
  }
}

export default App;
