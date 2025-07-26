import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Project } from "../components/Project";

const Projects = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <p className="text-2xl ml-10 mt-10">Projects</p>
      <p className="text-[18px] text-[#505050] ml-10 mt-5">Pet-Projects</p>
      <div className="flex flex-col md:flex-row mb-10">
        <Project
          id={'onlylinks'}
          title="OnlyLinks"
          description="A modern, high-quality video downloader built with React and yt-dlp. Download videos from YouTube, Instagram, Facebook, X and many other platforms with a beautiful, user-friendly interface."
          link="https://onlyylinks.web.app"
          repository="https://github.com/SIDDHESHUMESHSARANG/onlylinks"
          badges={[
            "https://img.shields.io/badge/License-MIT-blue",
            "https://img.shields.io/badge/React-19.1.0-61dafb",
            "https://img.shields.io/badge/FastAPI-0.104.1-009688"
          ]}
        />

        <Project
          id={'sweeper'}
          title="Sweeper"
          description="A VS Code extension that cleans ai-generated comments from your code.
          Supports Python and JavaScript"
          link="https://marketplace.visualstudio.com/items?itemName=SiddheshUmeshSarang.sweeper"
          repository="https://github.com/SIDDHESHUMESHSARANG/sweeper"
          badges={[
            "https://img.shields.io/badge/License-MIT-blue",
            "https://img.shields.io/badge/VSCode%20Marketplace-Extension-blueviolet"
          ]}
        />

        <Project
          id={'erklaren'}
          title="Erklaren"
          description="A simple streamlit web app that uses Groq LLMs and Tavily search to answer user questions with up-to-date information"
          notDeployed={true}
          repository="https://github.com/SIDDHESHUMESHSARANG/erklaren"
          badges={[
            "https://img.shields.io/badge/License-MIT-blue"
          ]}
        />
      </div>
      <p className="text-[18px] text-[#505050] ml-10 mt-0">Academic-Projects</p>
      <p className="text-[18px] text-[#ccc] ml-10 mt-5">First Year</p>
      <div>
        <Project
          id={'crossword'}
          title={'Crossword: Effects Of Honesty'}
          subtitle={'Subject: Fundamentals of behavioral skills(FBS)'}
          description={'This project is a Jcross-based crossword puzzle that explores the theme of honesty and its effects on individuals and society. '}
          link={'https://siddheshumeshsarang.github.io/crossword/'}
          repository={'https://github.com/SIDDHESHUMESHSARANG/crossword'}
          badges={[
            "https://img.shields.io/badge/JCross-%23964B00.svg?logo=hotpotato5&logoColor=white",
            "https://img.shields.io/badge/-%23E34F26.svg?logo=html5&logoColor=white",
            "https://img.shields.io/badge/-639?logo=css&logoColor=fff",
            "https://img.shields.io/badge/-F7DF1E?logo=javascript&logoColor=000"
          ]}
        />
      </div>
      <p className="text-[18px] text-[#505050] ml-10 mt-15">Professional-Projects</p>
      <div className="h-[100px] w-[200px] flex items-center justify-center">
        <p className="">Not yet...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
