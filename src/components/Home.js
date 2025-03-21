import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Verifica il tema dal localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    // Configurazione per Typed.js
    const options = {
      strings: [
        "Consulente",
        "Programmatore full-stack",
        "Programmatore back-end",
        "Mobile IOS/Android Development",
        "DataBase Management"
      ],
      typeSpeed: 100, // Velocità di scrittura
      backSpeed: 50, // Velocità di cancellazione
      backDelay: 1500, // Pausa prima che inizi a cancellare
      startDelay: 500, // Pausa prima che inizi a scrivere
      loop: true, // Ripeti la scrittura in loop
      showCursor: true, // Mostra il cursore
      cursorChar: '|', // Simbolo del cursore
    };

    // Inizializza Typed.js con le opzioni sopra
    const typed = new Typed(".typed-text", options);

    // Pulizia al termine del componente
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center space-y-8 md:space-y-0">
        {/* Immagine a sinistra (su mobile viene prima della scritta) */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img 
            src="/images/logo-home.png" // Sostituisci con l'immagine desiderata
            alt="profile" 
            className="rounded-lg object-cover max-w-xs md:max-w-xxs lg:max-w-xs w-48 sm:w-64" // Aggiungi classi per la dimensione su schermi piccoli
          />
        </div>

        {/* Testo a destra */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            I'm a
          </h1>
          <h2 className="text-3xl md:text-4xl mt-4">
            {/* Classe per il testo che sarà digitato con Typed.js */}
            <span
                className="typed-text text-black dark:text-white"
            ></span>
          </h2>
          {/* Paragrafo sotto l'h2 */}
          <p className="text-lg mt-4 text-gray-800 dark:text-gray-300">
            Ciao, io sono Davide, ho più di 4 anni di esperienza nello sviluppo web e mobile con tante altre competenze.
          </p>

          {/* Pulsanti sotto il paragrafo */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Pulsante per il curriculum */}
            <a
              href="images/Curriculum Vitae Carbone Davide.pdf" // Sostituisci con il percorso corretto del tuo curriculum
              download
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-center sm:text-left"
            >
              Scarica il Curriculum
            </a>

            {/* Pulsante per contattarti */}
            <a
              href="mailto:comunitachiaralubich@coopfoco.org" // Sostituisci con il tuo indirizzo email
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 text-center sm:text-left"
            >
              Contattami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
