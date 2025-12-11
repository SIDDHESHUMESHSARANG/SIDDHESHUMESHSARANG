import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Project } from "../components/Project";
import { useState } from "react";
import { MenuBar } from "../components/MenuBar";

const Projects = () => {
  const [openId, setOpenId] = useState(null);
  return (
    <div>
      <MenuBar/>
      <p className="text-2xl ml-10 mt-10">Projects</p>
      <p className="text-[18px] text-[#505050] ml-10 mt-5">Pet-Projects</p>
      <div className="m-10">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-5 md:gap-4 mb-10">
          <Project id="project-1" isOpen={openId === "project-1"} setOpenId={setOpenId} title={'AI-PPT'} langTag={'Python'} desc={'A Python tool that converts user prompts into PowerPoint slides'} Gitlink={'https://github.com/SIDDHESHUMESHSARANG/AI-PPT'} deployStatus={false} />

          <Project id="project-2" isOpen={openId === "project-2"} setOpenId={setOpenId} title={'Erklaren'} langTag={'Python'} desc={'A simple streamlit web app that uses Groq LLMs and Tavily search to answer user questions with up-to-date information'} Gitlink={'https://github.com/SIDDHESHUMESHSARANG//erklaren'} deployStatus={false} />

          <Project id="project-3" isOpen={openId === "project-3"} setOpenId={setOpenId} title={'KartChaos'} langTag={'Unity 6'} Gitlink={'https://github.com/SIDDHESHUMESHSARANG/KartChaos'} desc={'A small 2D Unity couch multiplayer game. Made as college project in 3rd Semester.'} />

          <Project id="project-4" isOpen={openId === "project-4"} setOpenId={setOpenId} title={'OnlyLinks'} langTag={'React JS'} desc={"A modern, high-quality video downloader built with React and yt-dlp. Supports Youtube, Facebook, Instagram and X (formerly Twitter)"} Gitlink={'https://github.com/SIDDHESHUMESHSARANG/onlylinks'} deployLink={"https://onlyylinks.web.app"} deployStatus={true} />

          <Project id="project-5" isOpen={openId === "project-5"} setOpenId={setOpenId} title={'Sweeper'} langTag={'JavaScript'} desc={'A VS Code extension that cleans ai-generated comments from your code.'} Gitlink={'https://github.com/SIDDHESHUMESHSARANG/sweeper'} deployLink={'https://marketplace.visualstudio.com/items?itemName=SiddheshUmeshSarang.sweeper'} deployStatus={true} />

        </div>

      </div>
      <p className="text-[18px] text-[#505050] ml-10 mt-15">Professional-Projects</p>
      <div className="h-[100px] w-[200px] flex items-center justify-center">
        <p className="ml-10 text-[#404040]">Not quite yet...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
