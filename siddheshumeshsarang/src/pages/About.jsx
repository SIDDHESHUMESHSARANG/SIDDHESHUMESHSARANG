import React, { useState, useRef, useEffect } from "react"; //,
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false); //,
  const contentRef = useRef(null);

  const toggleExpand = () => { //
    setIsExpanded(!isExpanded); //,
  };

  return (
    <div>
      <Header />
      <Navbar />

      <div>
        <p className="text-2xl ml-10 mt-10">About Me</p>
        <div
          className={`relative overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-full" : "max-h-[250px]"}`} //,
          ref={contentRef}
        >
          <p className="text-[20px] p-10 text-[#505050]">
            Hi, I am Siddhesh Umesh Sarang. <br />I am a passionate software developer with a strong interest in building impactful digital experiences.
            With a background in computer science and hands-on experience in web development,
            <br />
            <br />I enjoy solving complex problems and continuously learning new technologies. Outside of coding, <br />I love exploring new ideas, collaborating with others, and contributing to open-source projects. I am always eager to take on new challenges and grow as a developer.
          </p>
          {!isExpanded && (
            <div className="md:hidden absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-black to-transparent">
              <button
                onClick={toggleExpand} //
                className="flex justify-start ml-10 text-[15px] text-white-400 hover:underline cursor-pointer"
              >
                {isExpanded ? "Read Less" : "Read More"} {/* */}
              </button>
            </div>
          )}
          <button className="flex justify-start ml-10 text-[15px] text-white-400 hover:underline cursor-pointer" onClick={toggleExpand}>
            Read Less
          </button>
        </div>
      </div>
      <Link to={'/projects'} className="mt-10 mb-10 flex justify-end mr-[35px] text-[20px]">
        Next &gt;
      </Link>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default About;
