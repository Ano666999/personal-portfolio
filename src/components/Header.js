import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  // Funzione per lo scroll fluido
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Chiude il menu mobile dopo il click
    }
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 mb-5">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            D. Carbone
          </div>

          {/* Navbar Desktop */}
          <nav className="hidden md:flex space-x-6 text-lg">
            <ul className="flex space-x-6 text-lg items-center">
              <li><button onClick={() => scrollToSection("about")} className="hover:text-blue-500 dark:hover:text-blue-300">About</button></li>
              <li><button onClick={() => scrollToSection("languages")} className="hover:text-blue-500 dark:hover:text-blue-300">Languages</button></li>
              <li><button onClick={() => scrollToSection("works")} className="hover:text-blue-500 dark:hover:text-blue-300">Works</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-blue-500 dark:hover:text-blue-300">Contact</button></li>
              <li>
                <a 
                  href="https://github.com/Ano666999" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl hover:text-blue-500 dark:hover:text-blue-300"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </nav>

          {/* Pulsante Tema */}
          <button 
            onClick={toggleDarkMode} 
            className="text-xl p-2 hover:text-blue-500 dark:hover:text-blue-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Menu Hamburger Mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-2xl p-2 hover:text-blue-500 dark:hover:text-blue-300"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navbar Mobile */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900`}>
          <ul className="space-y-4 p-4 text-center text-lg">
            <li><button onClick={() => scrollToSection("about")} className="hover:text-blue-500 dark:hover:text-blue-300">About</button></li>
            <li><button onClick={() => scrollToSection("languages")} className="hover:text-blue-500 dark:hover:text-blue-300">Languages</button></li>
            <li><button onClick={() => scrollToSection("works")} className="hover:text-blue-500 dark:hover:text-blue-300">Works</button></li>
            <li><button onClick={() => scrollToSection("contact")} className="hover:text-blue-500 dark:hover:text-blue-300">Contact</button></li>
            <li>
              <a 
                href="https://github.com/Ano666999" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl hover:text-blue-500 dark:hover:text-blue-300"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Aggiunta di spazio per evitare che l'header copra il contenuto */}
      <div className="pt-20"></div>
    </>
  );
};

export default Header;