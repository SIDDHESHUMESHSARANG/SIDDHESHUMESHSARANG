import Header from "../components/Header"
import Navbar from "../components/Navbar";
import SplitText from "../components/SplitText";
import GradientText from '../components/GradientText'
import ShinyText from "../components/ShinyText";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { AltError } from "../components/altError";
import { MenuBar } from "../components/MenuBar";

import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <MenuBar />
        <div>
          <div className="flex flex-col mt-15 md:mt-20">
          <div className="">
            <SplitText
              text={`Hi, This is Siddhesh!`}
              className="md:text-[42px] text-[40px] mt-10 ml-8"
              delay={100}
              duration={1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
            <div className="fadeclass">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class text-[15px] md:text-[18px] ml-5 mt-3 p-2"
              >[ Developer, CS Major, a chill guy ]</GradientText>

              <ShinyText text={"I'm from Mumbai,India"} disabled={false} speed={3} className='custom-class text-[20px] ml-8 mt-10 text-[#505050] md:text-[22px]' /> <br />
              <ShinyText text={"and i code sometimes"} disabled={false} speed={3} className='custom-class text-[20px] ml-8 text-[#505050] md:text-[22px]' />

            </div>
              <a className="sayhibtn flex flex-row gap-1 md:w-[130px] w-[120px] text-[18px] ml-8 mt-10 p-3 md:p-4 text-white transition duration-500 ease-in-out transform active:scale-115 hover:scale-105" href="mailto:siddheshsarang0811@gmail.com">
                <button className="cursor-pointer">Say Hi</button>
                <CiMail size={25} />
              </a>
            </div>
          </div>
        
        <div className="mt-40">
          <p className="text-[20px] md:text-2xl md:ml-8 ml-6 mt-10 mb-5">Some numbers</p> <br className="hidden md:flex"/>
          <div className="md:flex md:gap-8">
            <p className="ml-8 mb-2 text-[#404040] md:hidden">Github</p> <br />
            <img className="ml-3 md:h-[500px] md:w-[500px]" src="https://github-readme-streak-stats.herokuapp.com/?user=SIDDHESHUMESHSARANG&theme=transparent&hide_border=true" alt={<AltError/>} height='350px' width='340px' /><br />
            <br /><p className="ml-8 mb-2 text-[#404040] md:hidden">Leetcode</p> <br />
            <img className="ml-3 md:h-[500px] md:w-[500px] p-2" src="https://leetcard.jacoblin.cool/sid-08?&theme=transparent" alt={<AltError/>} height='350px' width='340px' /><br />
          </div>
          <div className="hidden md:flex ml-13">
            <p className=" text-[#404040] text-2xl ml-50">Github</p>
            <p className="text-[#404040] text-2xl ml-120">Leetcode</p>
          </div>
        </div>

        <p className="text-[25px] ml-6 mt-30">Trying to contact me?</p>
        <p className="ml-6 text-[#505050]">checkout for these</p>
        <div className="md:flex md:flex-row md:gap-5 scrollable md:h-0 w-80 md:w-120 m-5">
          <div className="flex mt-10 md:mt-5">
            <SiGmail size={25} color={"#ccc"}/>
            <a href="mailto:siddheshsarang0811@gmail.com" target="_blank">
              <p id="links" className="text-[17px] text-[#ccc]">&nbsp;siddheshsarang0811@gmail.com</p>
            </a>
          </div>
          <br /><br />
          <div className="flex md:mt-5">
            <FaGithub size={25} color={"#ccc"} />
            <a href="https://github.com/SIDDHESHUMESHSARANG" target="_blank">
              <p id="links" className="text-[17px] text-[#ccc]">&nbsp;SIDDHESHUMESHSARANG</p>
            </a>
          </div>
          <br /><br />
          <div className="flex md:mt-5">
            <FaXTwitter size={25} color={"#ccc"} />
            <a href="https://x.com/iamsid08_" target="_blank">
              <p id="links" className="text-[17px] text-[#ccc]">&nbsp;iamsid08_</p>
            </a>
          </div>
          <br /><br />
          <div className="flex md:mt-5">
            <FaInstagram size={25} color={"#ccc"} />
            <a href="https://instagram.com/iamsid08" target="_blank">
              <p id="links" className="text-[17px] text-[#ccc]">&nbsp;iamsid08</p>
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