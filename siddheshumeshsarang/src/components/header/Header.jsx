import "./Header.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineSms } from "react-icons/md";
export  function Header() {
    return <div id="header-title" style={{ display: "flex", alignItems: "center" }}>
    <FaGithub size={35} />
    <span id="name"><a href="/" style={{color: "#fff"}}>/ SIDDHESHUMESHSARANG</a></span>
    <div id="socials">
      <a style={{color: "#fff"}} href="https://www.linkedin.com/in/siddhesh-sarang-3a060a2a2/?originalSubdomain=in"
       target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn id="linkedin" size={30} title="in/siddheshumeshsarang"/>
      </a>

      <a href="https://x.com/iamsid08_" style={{color: "#fff"}}
       target="_blank" rel="noopener noreferrer">
        <FaXTwitter id="twitter" size={30} title="x/iamsid08_" />
      </a>

      <MdOutlineSms id="message" size={30} title="send direct message"/>


    </div>

  </div>
}