import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Navigazione */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Navigazione</h3>
          <ul className="space-y-3 text-lg">
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#languages" className="hover:text-blue-400 transition">Languages</a></li>
            <li><a href="#works" className="hover:text-blue-400 transition">Lavori</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contatti</a></li>
          </ul>
        </div>

        {/* Contatti */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Contatti</h3>
          <p className="text-lg">Email: <a href="mailto:info@example.com" className="hover:text-blue-400 transition">comunitachiaralubich@coopfoco.org</a></p>
          <p className="text-lg">Telefono: <a href="tel:+1234567890" className="hover:text-blue-400 transition">+39 0807968931</a></p>
          <p className="text-lg">Indirizzo: Via Francesco Pepe n.77, Acquaviva delle fonti (BA)</p>
        </div>

        {/* Logo e Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-3xl font-bold text-blue-400">Il Mio Portfolio</h3>
          <p className="mt-2 text-gray-400">Grazie per aver visitato il mio sito!</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6 text-gray-400">
        <p>&copy; {new Date().getFullYear()} Tutti i diritti riservati. | Designed with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
