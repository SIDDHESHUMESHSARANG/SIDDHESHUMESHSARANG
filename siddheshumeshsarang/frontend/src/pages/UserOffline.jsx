import { IoCloudOfflineOutline } from "react-icons/io5";
const UserOffline = () => {
  return (
    <div className="offline flex flex-col gap-5 items-center justify-center h-[100vh] border-2 border-yellow-500 md:border-0">
    <a href="/">
        <img src="/image.png" alt="" height='60px' width='60px' className="hover:scale-80 active:scale-100 transition duration-300 cursor-pointer" />
    </a>
    <div className="flex gap-5">
        <i><IoCloudOfflineOutline size={35}/></i>
        <p className="text-[20px] text-[md:40px]">You're Offline</p>
    </div>
    <div className="">
      <p className="text-[#404040] underline underline-offset-4">steps to reconnect : </p>
        <ol className="text-[#404040]">
          <li>1. Check your internet <br />status</li>
          <li>2. If alright,<br />Click on the logo to <br />refresh</li>
        </ol>
    </div>
    </div>
  )
}

export default UserOffline

/* 

Haha, you might be thinking why i made this?,
actually my neighbourhood is having an powercut for a while.
So as im not able to work on other pages because of the powercut, 
i decided to make this page. I hope you like this. ❤️
nvm.

*/