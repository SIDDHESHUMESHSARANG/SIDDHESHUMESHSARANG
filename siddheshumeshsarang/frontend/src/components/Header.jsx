import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className='flex justify-between'>
      <p className='text-[1.5rem] md:text-3xl m-8 md:ml-8'>SIDDHESH UMESH SARANG</p>
      <div className="navbar mt-6 mr-8"><Navbar /></div>
    </header>
  );
};

export default Header;
