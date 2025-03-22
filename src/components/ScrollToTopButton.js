import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Icona per il pulsante

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Funzione per mostrare/nascondere il pulsante in base allo scroll
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Mostra il pulsante se l'utente ha scrollato più di 300px
    } else {
      setIsVisible(false); // Nascondi il pulsante se si è nella parte superiore
    }
  };

  // Aggiungi e rimuovi l'evento di scroll quando il componente è montato/dismontato
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Funzione per tornare in cima
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full shadow-lg transform transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transition: 'opacity 0.5s ease' }}
    >
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full hover:bg-blue-700"
      >
        <FaArrowUp size={24} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
