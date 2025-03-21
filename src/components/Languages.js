import React from "react";
import { FaReact, FaBootstrap, FaNodeJs, FaGithub, FaGitlab, FaJava, FaShieldAlt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiTailwindcss, SiWordpress, SiGoogleanalytics, SiMongodb, SiPython, SiFlutter } from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { AiOutlineAntDesign } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const techStack = [
  { icon: <FaReact className="text-4xl text-blue-500" />, label: "React.js" },
  { icon: <SiTailwindcss className="text-4xl text-blue-500" />, label: "Tailwind CSS" },
  { icon: <FaBootstrap className="text-4xl text-blue-500" />, label: "Bootstrap 7" },
  { icon: <FaNodeJs className="text-4xl text-green-500" />, label: "Node.js" },
  { icon: <SiMongodb className="text-4xl text-green-500" />, label: "MongoDB" },
  { icon: <DiMysql className="text-4xl text-blue-500" />, label: "MySQL" },
  { icon: <FaGithub className="text-4xl text-black" />, label: "Git" },
  { icon: <FaGitlab className="text-4xl text-black" />, label: "GitLab" },
  { icon: <SiPython className="text-4xl text-yellow-500" />, label: "Kivy" },
  { icon: <AiOutlineAntDesign className="text-4xl text-black" />, label: "Tkinter" },
  { icon: <FaJava className="text-4xl text-red-500" />, label: "Java" },
  { icon: <SiWordpress className="text-4xl text-blue-500" />, label: "WordPress" },
  { icon: <IoLogoPython className="text-4xl text-yellow-500" />, label: "Python" },
  { icon: <SiGoogleanalytics className="text-4xl text-green-500" />, label: "Google SEO" },
  { icon: <FaNodeJs className="text-4xl text-green-500" />, label: "GO" },
  { icon: <FaReact className="text-4xl text-blue-500" />, label: "React Native" },
  { icon: <SiFlutter className="text-4xl text-blue-500" />, label: "Flutter" },
  { icon: <FaShieldAlt className="text-4xl text-green-500" />, label: "Ethical Hacking" },
];

const Languages = () => {
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

        {/* Swiper per schermi < 350px */}
        <div className="sm:hidden mt-8">
          <Swiper spaceBetween={20} slidesPerView={3}>
            {techStack.map((tech, index) => (
              <SwiperSlide key={index} className="flex flex-col items-center !flex">
                {tech.icon}
                <span className="mt-2 text-xs text-gray-800 dark:text-gray-300">{tech.label}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Languages;
