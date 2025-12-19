import { useEffect, useState } from "react";
import SeasonalApp from "./SeasonalSnow";
import Navbar from "./Navbar";

const Header = () => {

  const [isWinter, setWinter] = useState(false)
  const checkSeason = () => {
    const month = new Date().getMonth();
    setWinter(month === 11 || month === 0);
  };

  useEffect(() => {
    checkSeason();
  }, []);

  return (
    <header className='flex justify-between items-center'>
      <div className="flex">
        <p className='text-[1.26rem] md:text-3xl m-8 md:ml-8 flex items-center'>
          {isWinter && (<span className="mr-3"><img className="md:h-[30px] md:w-[30px] h-[25px] w-[25px]" src="https://emojis.slackmojis.com/emojis/images/1701762050/80008/santahatq.png?1701762050" /></span>)}SIDDHESH UMESH SARANG
      </p>
      </div>
      <div className="navbar mt-6 mr-8"><Navbar /></div>
    </header>
  );
};

export default Header;
