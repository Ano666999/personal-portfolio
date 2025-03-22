import React, { useState, useEffect } from "react";
import { FaReact, FaBootstrap, FaNodeJs, FaGithub, FaGitlab, FaShieldAlt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiTailwindcss, SiWordpress, SiGoogleanalytics, SiMongodb, SiPython, SiFlutter, SiPhp } from "react-icons/si"; // Aggiungi SiPhp
import { IoLogoPython } from "react-icons/io";
import { AiOutlineAntDesign } from "react-icons/ai";

const techStack = [
  { icon: <FaReact className="text-4xl text-blue-500" />, label: "React.js" },
  { icon: <SiTailwindcss className="text-4xl text-blue-500" />, label: "Tailwind" },
  { icon: <FaBootstrap className="text-4xl text-blue-500" />, label: "Bootstrap" },
  { icon: <FaNodeJs className="text-4xl text-green-500" />, label: "Node.js" },
  { icon: <SiMongodb className="text-4xl text-green-500" />, label: "MongoDB" },
  { icon: <DiMysql className="text-4xl text-blue-500" />, label: "MySQL" },
  { icon: <FaGithub className="text-4xl text-black" />, label: "Git" },
  { icon: <FaGitlab className="text-4xl text-black" />, label: "GitLab" },
  { icon: <SiPython className="text-4xl text-yellow-500" />, label: "Kivy" },
  { icon: <AiOutlineAntDesign className="text-4xl text-black" />, label: "GNU/Linux" },
  { icon: <SiPhp className="text-4xl text-blue-500" />, label: "PHP" },
  { icon: <SiWordpress className="text-4xl text-blue-500" />, label: "WordPress" },
  { icon: <IoLogoPython className="text-4xl text-yellow-500" />, label: "Python" },
  { icon: <SiGoogleanalytics className="text-4xl text-green-500" />, label: "Google SEO" },
  { icon: <FaNodeJs className="text-4xl text-green-500" />, label: "GO" },
  { icon: <FaReact className="text-4xl text-blue-500" />, label: "React Native" },
  { icon: <SiFlutter className="text-4xl text-blue-500" />, label: "Flutter" },
  { icon: <FaShieldAlt className="text-4xl text-green-500" />, label: "Cyber Security" },
];

const Languages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funzione per cambiare la slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length); // Vai alla slide successiva
  };

  // Usa useEffect per creare un effetto di autoplay
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 1000); // Cambia slide ogni secondo (1000ms)
    
    // Pulire l'intervallo quando il componente viene smontato
    return () => clearInterval(intervalId);
  }, []); // L'array vuoto significa che l'effetto si attiva una sola volta al montaggio

  // Otteniamo le 3 icone da mostrare (ciclo infinito)
  const visibleTechStack = [
    techStack[(currentIndex) % techStack.length],
    techStack[(currentIndex + 1) % techStack.length],
    techStack[(currentIndex + 2) % techStack.length],
  ];

  return (
<section id="languages" className="bg-white dark:bg-gray-900 py-16 px-4">
  <div className="max-w-screen-xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
      Linguaggi e Tecnologie
    </h1>

    {/* Grid layout per schermi > 350px */}
    <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mt-8">
      {techStack.map((tech, index) => (
        <div key={index} className="flex flex-col items-center">
          {tech.icon}
          <span className="mt-2 text-sm text-gray-800 dark:text-gray-300">{tech.label}</span>
        </div>
      ))}
    </div>

    {/* Sezione per lo swiper/carosello */}
    <div className="sm:hidden mt-8">
      <div className="flex overflow-hidden">
        {/* Visualizza 3 icone in fila */}
        {visibleTechStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center w-1/3">
            {tech.icon}
            <span className="mt-2 text-xs text-gray-800 dark:text-gray-300">{tech.label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Testo con il link che porta alla sezione "contact" */}
    <p className="mt-8 text-lg text-gray-800 dark:text-gray-300">
      Se avete richieste specifiche su determinati linguaggi, potete{" "}
      <a href="#contact" className="text-blue-500 hover:text-blue-700">
        contattarmi!
      </a>
    </p>
  </div>
</section>
  );
};

export default Languages;
