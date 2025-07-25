import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Project } from "../components/Project";

const Projects = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <p className="text-2xl ml-10 mt-10">Projects</p>
      <div className="flex flex-col md:flex-row mb-10"> {/* Apply classes directly here */}
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
      <Footer />
    </div>
  );
};

export default Projects;
