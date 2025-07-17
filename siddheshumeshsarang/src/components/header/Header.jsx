import { useState, useEffect } from "react";
import "./Header.css"
import ThemeSwitch from "./ThemeSwitch";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Header() {
    const [isDark, setDark] = useState(false)
    useEffect(() => {
      document.body.classList.toggle('light-mode', isDark);
      document.body.classList.toggle('dark-mode', !isDark);
    },[isDark])
    return <div id="header-title" style={{ display: "flex", alignItems: "center" }}>
    <a className="github-icon" href="https://github.com/SIDDHESHUMESHSARANG" target="blank"><FaGithub size={35}/></a>
    <span id="name"><a href="/">/ SIDDHESHUMESHSARANG</a></span>
    <div id="socials">
      <ThemeSwitch isDark={isDark} onToggle={() => setDark((prev) => !prev)} />
    </div>

  </div>
}