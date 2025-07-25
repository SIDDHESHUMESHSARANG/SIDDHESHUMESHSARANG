import React, { useState, useRef, useEffect } from "react"; //,
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { MdSportsCricket } from "react-icons/md";
import { IoFootballSharp } from "react-icons/io5";
import { SiF1 } from "react-icons/si";
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
            <div className="rounded-b-3xl md:hidden absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-black via-black to-transparent">
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
      <p className="text-2xl p-10 mt-5">What's my tech taste?</p>
      <div className="grid grid-cols-2 gap-4 ml-10 md:flex md:gap-5 md:ml-10">
        <img src="https://img.shields.io/badge/JavaScript-%23323330?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
        <img src="https://img.shields.io/badge/React-%2320232a?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        <img src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34" />
        <img src="https://img.shields.io/badge/Vercel-%23000000?style=for-the-badge&logo=vercel&logoColor=white" />
        <img src="https://img.shields.io/badge/Git-%23F05033?style=for-the-badge&logo=git&logoColor=white" />
        <img src="https://img.shields.io/badge/Docker-%230db7ed?style=for-the-badge&logo=docker&logoColor=white" />
        <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
      </div>
      <p className="text-2xl p-10 mt-5">What do i love?</p>
      <div className="flex ml-10 gap-5 md:gap-15 md:ml-10">
        <MdSportsCricket size={35} color={'skyblue'}/>
        <IoFootballSharp size={35} color={'white'}/>
        <SiF1 size={45} color={'red'}/>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default About;
