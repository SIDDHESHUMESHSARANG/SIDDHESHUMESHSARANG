import Header from "../components/Header"
import Navbar from "../components/Navbar"
import SetNotification from "../components/NotificationHandler/SetNotification"
import { Link } from "react-router-dom"

import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <div>
            <p className="text-[40px] mt-30 ml-8">Hi,This is Siddhesh</p>
            <p className="text-[15px] ml-6 mt-3">[ Developer, CS Major, a chill guy ]</p>
            <p className="text-[20px] ml-6 mt-10 text-[#505050]">I'm from Mumbai,India <br />and i code sometimes</p>

        <p className="text-[25px] ml-6 mt-30">Notification Hub</p>
        <div className="scrollable h-80 max-h-80 w-80 md:w-120 m-5 border border-dotted overflow-y-auto">
          <SetNotification
            Purpose={'New Project Added:'}
            title={'Only\nLinks'}
            link={'/projects'}
          />
            <SetNotification
              Purpose={'New Project Added:'}
              title={'Sweeper'}
              link={'/projects'}
            />
          <SetNotification
            Purpose={'New Project Added:'}
            title={'Erklaren'}
            link={'/projects'}
          />
        </div>
        <br />
        <Link to={'/about'} className="flex justify-end mr-[35px] text-[20px]">
          Next &gt;
        </Link>
        <div className="mt-20">
          <Footer />
        </div>
        </div>
    </div>
  )
}

export default Home