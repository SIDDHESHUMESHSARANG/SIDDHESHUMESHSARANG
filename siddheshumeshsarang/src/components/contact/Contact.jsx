import { Button } from "../button/Button"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
export function Contact() {
    return (
        <div id="contact" style={{
            margin: "40px", 
            display: "flex",
            gap: "100px",
            opacity: "0",
            animation: "fade 1s ease-in-out",
            animationDelay: "1s",
            animationFillMode: "forwards"
        }}>
         <Button link="https://www.linkedin.com/in/siddhesh-sarang-3a060a2a2/?originalSubdomain=in" buttonIcon={<FaLinkedinIn size={25}/>}/>
         <Button link="https://github.com/SIDDHESHUMESHSARANG" buttonIcon={<FaGithub size={25}/>}/>
         <Button link="mailto:siddheshsarang0811@gmail.com" buttonIcon={<SiGmail size={25}/>}/>
         <Button link="https://x.com/iamsid08_" buttonIcon={<FaXTwitter size={25}/>}/>
        </div>
    )
}