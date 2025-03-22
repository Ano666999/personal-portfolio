import React, { useEffect } from 'react'; // Importa React e useEffect
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TopHeader from './components/TopHeader.js';
import Icons from './components/Icons.js';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  useEffect(() => {
    // Impostare il titolo della pagina
    document.title = "Carbone Davide - Programmatore";
  }, []);

  return (
    <div className="App">
      <ScrollToTopButton />
      <Icons />
      <TopHeader />
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

