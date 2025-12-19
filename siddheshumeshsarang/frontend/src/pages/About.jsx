import React, { useState, useRef, useEffect } from "react"; //,
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Certifications } from "../components/Certifications";
import { MdSportsCricket } from "react-icons/md";
import { IoFootballSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { SiF1 } from "react-icons/si";
import Footer from "../components/Footer";
import { MenuBar } from "../components/MenuBar";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const contentRef = useRef(null);
  const contentRef2 = useRef(null);

  const toggleExpand = () => { //
    setIsExpanded(!isExpanded); //,
  };

  const toggleExpand2 = () => { //
    setIsExpanded2(!isExpanded2); //,
  };



  return (
    <div>
      <MenuBar />

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
      <div className="md:grid md:grid-cols-2 flex flex-col md:flex-row gap-2.5 interests">
        {/* Labels (mapped to images below):
            01 Motorsports
            02 Football
            03 Cricket
            04 Problem Solving
            05 Programming
            */}
        <div className="relative w-[95%] ml-2.5 md:h-100 md:w-197 md:ml-10 z-0 overflow-hidden">
          <img src="https://ecampusontario.pressbooks.pub/app/uploads/sites/2109/2021/11/programming-gb0e197598_1920.jpg" alt="Programming" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
            <div className="text-4xl md:text-5xl font-bold">01</div>
            <div className="text-lg md:text-xl mt-1">Programming</div>
          </div>
        </div>

        <div className="relative w-[95%] ml-2.5 md:h-100 md:w-170 md:ml-18 z-0 overflow-hidden">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8wQgE57HLAQVHy7Sb-zOhzNXFCafMaP8ow&s" alt="Problem Solving" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
            <div className="text-4xl md:text-5xl font-bold">02</div>
            <div className="text-lg md:text-xl mt-1">Problem Solving</div>
          </div>
        </div>


        <div className="relative w-[95%] ml-2.5 md:h-100 md:w-197 md:ml-10 z-0 overflow-hidden">
          <img src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/ec16569727a4519b7f321b97cc3e5987/f1-grand-prix-of-great-britain.jpg" className="w-full h-full object-cover" alt="Motorsports" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
            <div className="text-4xl md:text-5xl font-bold">03</div>
            <div className="text-lg md:text-xl mt-1">Motorsports</div>
          </div>
        </div>

        <div className="relative w-[95%] h-54 ml-2.5 md:h-100 md:w-170 md:ml-18 z-0 overflow-hidden">
          <img src="https://www.thesun.co.uk/wp-content/uploads/2024/06/nacho-fernandez-real-madrid-lifts-906312166.jpg?strip=all&w=960" alt="Football" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
            <div className="text-4xl md:text-5xl font-bold">04</div>
            <div className="text-lg md:text-xl mt-1">Football</div>
          </div>
        </div>

        <div className="relative w-[95%] ml-2.5 md:h-100 md:w-197 md:ml-10 z-0 overflow-hidden">
          <img src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ugvcvyuorglkafijaz4x" alt="Cricket" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
            <div className="text-4xl md:text-5xl font-bold">05</div>
            <div className="text-lg md:text-xl mt-1">Cricket</div>
          </div>
        </div>


        <div className="relative w-[95%] ml-2.5 md:h-100 md:w-170 md:ml-14 z-0 overflow-hidden">
          <div className="p-8 flex flex-col items-start md:items-center md:justify-center">
            <div className="text-5xl md:text-6xl font-extrabold text-[#909090] md:mt-20">+</div>
            <div className="text-xl md:text-2xl text-[#e6e6e6] mt-2 md:mt-4">And Many More</div>
            <div className="text-sm text-[#7f7f7f] mt-1 md:mt-2">Interests, projects and ideas I explore beyond these highlights</div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default About;
