import React from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

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
          Qui troverai una selezione dei miei progetti più significativi.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
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
              <a href="/projects/project1" className="text-blue-500 hover:underline mt-4 inline-block">
                Scopri di più
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-48">
              <VideoPlayer src="images/project2.mp4" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Progetto Innovativo
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Un'altra delle mie creazioni, sviluppata con tecnologie moderne come Next.js e Firebase.
              </p>
              <a href="/projects/project2" className="text-blue-500 hover:underline mt-4 inline-block">
                Scopri di più
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;