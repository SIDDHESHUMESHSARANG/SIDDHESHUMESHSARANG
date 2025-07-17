import "./Body.css";
import { Projects } from "../projects/Project";
import { About } from "../about/About";
import { Contact } from "../contact/Contact";
export function Body() {
  return (
    <>
      <h2 id="Hi-statement">
        <span id="typewriter-wrapper">
          <span id="typewriter-text">
            Hi, This is <span id="name-body">Siddhesh</span> <br />
            <p id="text">Developer • Student • Life-long learner</p>
          </span>
        </span>
      </h2>
      <h2 className="project-title" style={{
        marginLeft: "50px",
        opacity: "0",
        animation: "fade 1s ease-in-out",
        animationDelay: "0.75s",
        animationFillMode: "forwards"
    }}>Projects</h2>
        <div className="projects" style={{
          display: "flex",
          opacity: "0",
          animation: "fade 1s ease-in-out",
          animationDelay: "0.75s",
          animationFillMode: "forwards"
        }}>
        <Projects
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

      <Projects
        title="Sweeper"
        description="A VS Code extension that cleans ai-generated comments from your code."
        link="https://marketplace.visualstudio.com/items?itemName=SiddheshUmeshSarang.sweeper"
        repository="https://github.com/SIDDHESHUMESHSARANG/sweeper"
        badges={[
          "https://img.shields.io/badge/License-MIT-blue",
          "https://img.shields.io/badge/VSCode%20Marketplace-Extension-blueviolet"
        ]}
      />

      <Projects
        title="Erklaren"
        description="A simple streamlit web app that uses Groq LLMs and Tavily search to answer user questions with up-to-date information"
        notDeployed={true}
        repository="https://github.com/SIDDHESHUMESHSARANG/erklaren"
        badges={[
          "https://img.shields.io/badge/License-MIT-blue",
          "https://img.shields.io/badge/Streamlit-1.32.2-ff4b4b",
          "https://img.shields.io/badge/Tavily%20Search-API-00b8d9",
          "https://img.shields.io/badge/Groq-LLM-ffb347"
        ]}
      />
      </div>
      <h2 className="about-title" style={{
        marginLeft: "50px", 
        marginTop: "50px",
        opacity: "0",
        animation: "fade 1s ease-in-out",
        animationDelay: "1s",
        animationFillMode: "forwards"
    }}>About Me</h2>
    <About/>
      <h2 className="contact-title" style={{
        marginLeft: "50px", 
        marginTop: "50px",
        opacity: "0",
        animation: "fade 1s ease-in-out",
        animationDelay: "1s",
        animationFillMode: "forwards"
    }}>Contact Me</h2>
    <Contact/>
    </>
  );
}
