import { IoCloudOfflineOutline } from "react-icons/io5";
const UserOffline = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-[100vh] ml-0 md:ml-[0px]">
    <img src="/image.png" alt="" height='50px' width='50px' />
    <div className="inline-flex gap-5">
        <i><IoCloudOfflineOutline size={35}/></i>
        <p className="text-[20px] text-[md:40px]">You're Offline</p>
    </div>
    </div>
  )
}

export default UserOffline