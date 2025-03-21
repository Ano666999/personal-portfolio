import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Languages />
      <Works />
      <Contact />
      <Footer />
      {/* Altri contenuti qui */}
    </div>
  );
}

export default App;

