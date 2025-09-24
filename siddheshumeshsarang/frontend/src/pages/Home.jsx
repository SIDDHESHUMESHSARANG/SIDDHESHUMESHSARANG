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
import BotpressChat from "../components/BotpressChat";

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
              <a className="sayhibtn flex flex-row gap-1 md:w-[130px] w-[120px] text-[18px] ml-8 mt-10 p-3 mdp-5 text-white transition duration-500 ease-in-out transform active:scale-115 hover:scale-105" href="mailto:siddheshsarang0811@gmail.com">
                <button className="cursor-pointer">Say Hi</button>
                <CiMail size={25} />
              </a>
            </div>
          </div>
        <div className="mt-40 md:ml-5">
          <div className="md:flex md:gap-8">
            <img className="border border-[#404040] stats ml-5 md:ml-0 md:h-auto md:w-auto p-2 w-[90%]" src="https://leetcard.jacoblin.cool/sid-08?&theme=dark&hide_border=true" alt={<AltError/>} height='auto' width='auto' /><br />
          </div>
        </div>

        <div>
          <BotpressChat />
        </div>
        <p className="text-[25px] ml-6 mt-20">Trying to contact me?</p>
        <p className="ml-6 text-[gray]">checkout for these</p>
        <div className="md:flex md:flex-row md:gap-5 scrollable md:h-0 w-80 md:w-120 m-7">
          <div className="flex mt-10 md:mt-5">
            <SiGmail size={25} color={"gray"}/>
            <a href="mailto:siddheshsarang0811@gmail.com" target="_blank">
              <p id="links" className="text-[17px] text-[gray]">&nbsp;siddheshsarang0811@gmail.com</p>
            </a>
          </div>
          <br /><br />
          <div className="flex md:mt-5">
            <FaGithub size={25} color={"gray"} />
            <a href="https://github.com/SIDDHESHUMESHSARANG" target="_blank">
              <p id="links" className="text-[17px] text-[gray]">&nbsp;SIDDHESHUMESHSARANG</p>
            </a>
          </div>
          <br /><br />
          <div className="flex md:mt-5">
            <FaXTwitter size={25} color={"gray"} />
            <a href="https://x.com/iamsid08_" target="_blank">
              <p id="links" className="text-[17px] text-[gray]">&nbsp;iamsid08_</p>
            </a>
          </div>
          <br /><br />
          <div className="flex md:mt-5">
            <FaInstagram size={25} color={"gray"} />
            <a href="https://instagram.com/iamsid08" target="_blank">
              <p id="links" className="text-[17px] text-[gray]">&nbsp;iamsid08</p>
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