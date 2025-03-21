import React from 'react';
import { FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Titolo con lo stile gradiente */}
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Chi Sono
        </h1>

        {/* Paragrafo di descrizione */}
        <p className="text-lg mt-4 text-gray-800 dark:text-gray-300">
          Ciao, sono un consulente e sviluppatore con esperienza nello sviluppo di applicazioni web moderne, scalabili e applicazioni mobile. Il mio obiettivo è creare soluzioni innovative che soddisfano le esigenze dei miei clienti, combinando tecnologie all'avanguardia con un design accattivante e funzionale.
        </p>

        {/* Immagine con overlay e link al profilo GitHub */}
        <a
          href="https://github.com/Ano666999" // Sostituisci con il tuo URL GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block mt-8"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <img
              src="/images/1742565264525.jpg" // Sostituisci con il percorso dell'immagine
              alt="My Profile"
              className="w-full h-full rounded-full object-cover transition-transform transform hover:scale-105"
            />
            {/* Overlay scuro con logo GitHub */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <FaGithub className="text-white text-5xl" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default About;