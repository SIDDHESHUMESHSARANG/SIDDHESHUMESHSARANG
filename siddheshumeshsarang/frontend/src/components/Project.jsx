import { FiGithub } from "react-icons/fi";
import { GrDeploy } from "react-icons/gr";
export function Project({ title, Gitlink, deployStatus, deployLink, desc, langTag }) {
    return (
        <>
            <div className="bg-[#151515] border border-[#404040] h-auto w-[100%] p-4 hover:scale-102 transition-transform duration-300 ease-in-out">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl">{title}</h3>
                    <p className="bg-[#202020] px-3 py-1 rounded text-sm text-[#a0a0a0]">{langTag}</p>
                </div> <br />
                <p className="text-[#808080] mb-4">{desc}</p>
                <hr className="border-[#404040]" />
                <br />
                <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-4 text-[#c0c0c0] cursor-pointer">
                    <a className={deployStatus ? `hover:underline flex gap-2` : `text-[#404040] flex gap-2`} href={deployStatus ? deployLink : null} title={!deployStatus ? "Not deployed yet" : undefined} target="_blank">Deployment <GrDeploy size={20} /></a>
                    <a className="flex gap-2 hover:underline" href={Gitlink} target="_blank">Repository <FiGithub size={20} /></a>
                </div>
            </div>
        </>
    );
}