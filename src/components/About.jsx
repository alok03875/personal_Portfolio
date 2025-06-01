import React from "react";
import Tilt from 'react-parallax-tilt';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-10 mx-auto max-w-7xl text-center">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>About Me.</h2>
        </motion.div>

        <div className="flex justify-center items-center">
          <img
            src="/Alok_Img.jpg"
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg border-4 border-white transition-transform duration-300 hover:scale-105"
          />
        </div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-4xl leading-[26px]"
        >
          Hi, I'm Alok Kushwaha – a passionate Full Stack Developer with a
          strong interest in building powerful and user-friendly web
          applications. I specialize in the <b>MERN stack</b> and have hands-on
          experience with modern tools like{" "}
          <b>React.js, Node.js, MongoDB, and Express.js.</b>
          <br />I enjoy turning complex problems into clean, efficient, and
          scalable solutions. Recently, I’ve been diving into{" "}
          <b>3D web development</b> using
          <b> React Three Fiber</b> to build immersive, interactive interfaces.
          <br />I love learning new technologies and constantly challenge myself
          to grow as a developer. My goal is to build meaningful software that
          makes an impact.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            href="Alok_Updated_Cv.pdf"
            download
            className="flex items-center gap-2 px-5 py-2 bg-[#915EFF] text-white rounded-lg hover:bg-[#7a4fe0] transition duration-300"
          >
            <FaDownload className="text-lg" />
            Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/alok-kushwaha-04a140249/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
        </div>
      </div>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
