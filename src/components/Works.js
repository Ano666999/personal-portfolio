import React from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Per l'icona di link esterno

const VideoPlayer = ({ src }) => {
  const videoOptions = {
    type: 'video',
    sources: [{ src, type: 'video/mp4' }],
    options: {
      controls: true,
      autoplay: false,
      muted: false,
    },
  };

  return <Plyr source={videoOptions} />;
};

const Works = () => {
  return (
    <section id="works" className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          I miei Lavori
        </h1>
        <p className="text-lg mt-4 text-gray-800 dark:text-gray-300">
          Qui troverai una selezione dei miei progetti più significativi. Man mano ne aggiungerò altri
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8"> {/* Margin bottom added here */}
            <div className="w-full h-48">
              <VideoPlayer src="images/project1.mp4" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Comunità Chiara Lubich
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Questo è uno dei miei ultimi siti sviluppati con React.js, MySQL e Node.js.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8"> {/* Margin bottom added here */}
            <div className="w-full h-48">
              <VideoPlayer src="images/project2.mp4" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Progetto Semplice
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Un Bot per le todo-list in Python
              </p>
            </div>
          </div>

          {/* Nuovo progetto con immagine */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer group mb-8"> {/* Margin bottom added here */}
          <div className="relative w-full h-48">
  <img 
    src="/images/project1.png" 
    alt="Progetto Chiara Lubich" 
    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50" 
  />
  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 group-hover:scale-105">
    {/* Icona che compare solo al passaggio del mouse */}
    <a href="https://comunitaminorichiaralubich.web.app/" target="_blank" rel="noopener noreferrer">
      <FaExternalLinkAlt className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  </div>
</div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Comunità Chiara Lubich V.2
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                La seconda versione del sito della comunità "Chiara Lubich"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
