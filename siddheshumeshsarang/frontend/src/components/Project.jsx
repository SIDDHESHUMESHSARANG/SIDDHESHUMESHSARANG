import { FiGithub } from "react-icons/fi";
import { GrDeploy } from "react-icons/gr";
export function Project({ title, Gitlink, deployStatus, deployLink }) {
    return (
        <>
            <div className="bg-[#151515] border border-[#404040] h-auto w-[100%] p-4 hover:scale-102 transition-transform duration-300 ease-in-out">
                <h3 className="text-xl mb-10">{title}</h3>
                
                <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-4 p-1 text-[#c0c0c0] cursor-pointer">
                    <a className={deployStatus ? `hover:underline flex gap-2` : `text-[#404040] flex gap-2`} href={deployStatus ? deployLink : null} title={!deployStatus ? "Not deployed yet" : undefined} target="_blank">Deployment <GrDeploy size={20} /></a>
                    <a className="flex gap-2 hover:underline" href={Gitlink} target="_blank">Repository <FiGithub size={20} /></a>
                </div>
            </div>
        </>
    );
}