import React, { useState, useRef, useEffect } from "react"; //,
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Certifications } from "../components/Certifications";
import { MdSportsCricket } from "react-icons/md";
import { IoFootballSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { SiF1 } from "react-icons/si";
import Footer from "../components/Footer";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const contentRef = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);

  const toggleExpand = () => { //
    setIsExpanded(!isExpanded); //,
  };

  const toggleExpand2 = () => { //
    setIsExpanded2(!isExpanded2); //,
  };

  const toggleExpand3 = () => { //
    setIsExpanded3(!isExpanded3); //,
  };

  return (
    <div>
      <Header />
      <Navbar />

      <div>
        <p className="text-2xl ml-10 mt-10">About Me</p>
        <div
          className={`relative overflow-hidden transition-all duration-00 ease-in-out ${isExpanded ? "max-h-full" : "max-h-[250px]"}`} //,
          ref={contentRef}
        >
          <p className="text-[20px] p-10 text-[#505050]">
            Hi, I am Siddhesh Umesh Sarang. <br />I am a passionate software developer with a strong interest in building impactful digital experiences.
            With a background in computer science and hands-on experience in web development,
            <br />
            <br />I enjoy solving complex problems and continuously learning new technologies. Outside of coding, <br />I love exploring new ideas, collaborating with others, and contributing to open-source projects. I am always eager to take on new challenges and grow as a developer.
          </p>
          {!isExpanded && (
            <div className="rounded-b-3xl md:hidden absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-[#181818] via-black to-transparent">
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

      
      <p className="text-2xl p-10 mt-5">Certifications</p>

      <div
        className={`relative overflow-hidden transition-all duration-00 ease-in-out ${isExpanded3 ? "max-h-full" : "max-h-[300px]"} md:max-h-full`} //,
        ref={contentRef3}
      >
        <div className="flex flex-col md:flex-row gap-5 md:gap-0">
          <Certifications img={'https://tcagurgaon.in/BackendImages/CourseImages/cs-it-training-erp-oracle.jpg'} name={'OCI DevOps Professional (2025)'} issuedBy={'Oracle University'} status={'Pending'} />
          <Certifications img={'https://media.geeksforgeeks.org/img-practice/prod/courses/875/Web/Content/automation_testing_webp_1739771605.webp'} name={'Automation Testing'} issuedBy={'GeeksForGeeks'} status={'Pending'} />
          <Certifications img={'https://cdn.worldvectorlogo.com/logos/ms-cit-1.svg'} name={'MS-CIT'} status={'Completed'} issuedBy={'Maharashtra Knowledge Corporation Limited (MKCL)'} issueDate={'August 2024'} credentialID={'23-6732413'} skills={['MS Word', 'MS Excel', "MS Powerpoint", "MS Outlook"]} />
        </div>
        {!isExpanded3 && (
          <div className="rounded-b-3xl md:hidden absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-[#181818] via-black to-transparent">
            <button
              onClick={toggleExpand3} //
              className="flex justify-start ml-10 text-[15px] text-white-400 hover:underline cursor-pointer"
            >
              {isExpanded3 ? "Show Less" : "Show More"} {/* */}
            </button>
          </div>
        )}
        <button className="md:hidden flex justify-start ml-10 text-[15px] text-white-400 hover:underline cursor-pointer mt-10" onClick={toggleExpand3}>
          Show Less
        </button>
      </div>

      <p className="text-2xl p-10 mt-5">What's my tech taste?</p>

      <div
        className={`relative overflow-hidden transition-all duration-00 ease-in-out ${isExpanded2 ? "max-h-full" : "max-h-[202px]"}`} //,
        ref={contentRef2}
      >
        <div className="tstack grid grid-cols-2 md:gap-x-0 gap-8 ml-10 md:grid-cols-6 md:gap-6 md:ml-10">
          <img className="" src="https://img.shields.io/badge/javascript-%23323330?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
          <img className="" src="https://img.shields.io/badge/react-%2320232a?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
          <img className="" src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34" />
          <img className="" src="https://img.shields.io/badge/vercel-%23000000?style=for-the-badge&logo=vercel&logoColor=white" />
          <img className="" src="https://img.shields.io/badge/git-%23F05033?style=for-the-badge&logo=git&logoColor=white" />
          <img className="" src="https://img.shields.io/badge/docker-%230db7ed?style=for-the-badge&logo=docker&logoColor=white" />
          <img className="" src="https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="" />
          <img className="" src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="" />
          <img className="border border-[#404040]" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="" />
          <img className="" src="https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white" alt="" />
          <img className="" src="https://img.shields.io/badge/node js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
          <img className="" src="https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220" alt="" />
          <img className="" src="https://img.shields.io/badge/socket io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" alt="" />
          <img className="" src="https://img.shields.io/badge/streamlit-%23FE4B4B.svg?style=for-the-badge&logo=streamlit&logoColor=white" alt="" />
          <img className="" src="https://img.shields.io/badge/tailwind css-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="" />
          <img className="" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="" />
          <img className="" src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="" />
        </div>

        {!isExpanded2 && (
          <div className="rounded-b-3xl md:hidden absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-[#181818] via-black to-transparent">
            <button
              onClick={toggleExpand2} //
              className="flex justify-start ml-10 text-[15px] text-white-400 hover:underline cursor-pointer"
            >
              {isExpanded2 ? "Show Less" : "Show More"} {/* */}
            </button>
          </div>
        )}

        <button className="flex justify-start ml-10 text-[15px] text-white-400 hover:underline cursor-pointer mt-10" onClick={toggleExpand2}>
          Show Less
        </button>
      </div>
      <p className="text-2xl p-10 mt-5">What do i love?</p>
      <div className="flex flex-row gap-10 ml-10">
        <MdSportsCricket size={35} color={'skyblue'}/>
        <SiF1 size={55} color={'red'}/>
        <FaLaptopCode size={45} color={'purple'}/>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default About;
