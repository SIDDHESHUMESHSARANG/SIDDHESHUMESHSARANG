import Header from "../components/Header"
import Navbar from "../components/Navbar"
import FractalTree from "../components/FractalTree";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom"

import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <div>
          <div className="flex flex-col mt-15 md:mt-30">
            <div>
              <p className="text-[40px] mt-10 ml-8">Hi,This is Siddhesh</p>
              <p className="text-[15px] ml-6 mt-3">[ Developer, CS Major, a chill guy ]</p>
              <p className="text-[20px] ml-6 mt-10 text-[#505050]">I'm from Mumbai,India <br />and i code sometimes</p><br />
            <a className=" flex flex-row gap-1 w-[120px] text-[18px] ml-6 mt-10 p-2 bg-white text-black border-4 border-[#ccc] transition duration-500 ease-in-out transform active:scale-125 hover:scale-90" href="mailto:siddheshsarang0811@gmail.com">
              <button className="cursor-pointer">Say Hi</button>
              <CiMail size={25} />
            </a>
            </div>
          </div>
        
        <div className="mt-40">
          <p className="text-[20px] ml-6 mt-10 mb-5">Some numbers</p>
          <div className="md:flex md:gap-8">
            <p className="ml-8 mb-2 text-[#404040] md:hidden">Github</p>
            <img className="rounded-4xl ml-3 border border-[#404040] border-dotted" src="https://github-readme-streak-stats.herokuapp.com/?user=SIDDHESHUMESHSARANG&theme=transparent&hide_border=true" alt="if the stats doesn't load, then it's the issue is with the stats provider not us." height='350px' width='350px' /><br />
            <p className="ml-8 mb-2 text-[#404040] md:hidden">Leetcode</p>
            <img className="rounded-4xl ml-3 border border-[#404040] border-dotted" src="https://leetcode-badge-sage.vercel.app/badge/sid-08?theme=dark" alt="if the stats doesn't load, then it's the issue is with the stats provider not us." height='350px' width='350px' />
          </div>
          <div className="hidden md:flex md:mt-5 md:gap-85">
            <p className="mb-2 text-[#404040] ml-40">Github</p>
            <p className="ml-8 mb-2 text-[#404040]">Leetcode</p>
          </div>
        </div>

        <p className="text-[25px] ml-6 mt-30">Trying to contact me?</p>
        <p className="ml-6 text-[#505050]">checkout for these</p>
        <div className="md:flex md:flex-row md:gap-5 scrollable md:h-0 w-80 md:w-120 m-5">
          <div className="flex mt-10 md:mt-5">
            <SiGmail size={25} color={"#ccc"}/>
            <a href="mailto:siddheshsarang0811@gmail.com" target="_blank">
              <p className="text-[17px] text-[#ccc]">&nbsp;siddheshsarang0811@gmail.com</p>
            </a>
          </div>
          <br /><br />
          <div className="flex md:mt-5">
            <FaGithub size={25} color={"#ccc"} />
            <a href="https://github.com/SIDDHESHUMESHSARANG" target="_blank">
              <p className="text-[17px] text-[#ccc]">&nbsp;SIDDHESHUMESHSARANG</p>
            </a>
          </div>
          <br /><br />
          <div className="flex md:mt-5">
            <FaXTwitter size={25} color={"#ccc"} />
            <a href="https://x.com/iamsid08_" target="_blank">
              <p className="text-[17px] text-[#ccc]">&nbsp;iamsid08_</p>
            </a>
          </div>
          <br /><br />
          <div className="flex md:mt-5">
            <FaInstagram size={25} color={"#ccc"} />
            <a href="https://instagram.com/iamsid08" target="_blank">
              <p className="text-[17px] text-[#ccc]">&nbsp;iamsid08</p>
            </a>
          </div>
        </div>
        <br />
        <div className="mt-20">
          <Footer />
        </div>
        </div>
    </div>
  )
}

export default Home