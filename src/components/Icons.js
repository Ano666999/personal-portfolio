import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa'; // Importa le icone di GitHub e Instagram

const SocialLinks = () => {
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4">
      <a
        href="https://github.com/Ano666999"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-gray-700 hover:text-gray-900"
      >
        <FaGithub /> {/* Icona di GitHub */}
      </a>
      <a
        href="https://www.instagram.com/_davide3721/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-gray-700 hover:text-gray-900"
      >
        <FaInstagram /> {/* Icona di Instagram */}
      </a>
    </div>
  );
};

export default SocialLinks;
