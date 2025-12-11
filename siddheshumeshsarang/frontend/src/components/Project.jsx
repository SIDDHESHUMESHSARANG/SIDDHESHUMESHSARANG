import { FiGithub } from "react-icons/fi";
import { GrDeploy } from "react-icons/gr";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";





export function Project({ title, Gitlink, deployStatus, deployLink, desc, langTag, id, isOpen, setOpenId }) {

    return (
        <>
            <div className="bg-[#151515] border border-[#404040] h-auto w-[100%] p-4 hover:scale-102 transition-transform duration-300 ease-in-out">
                {/* Desktop View - Normal Display */}
                <div className="hidden md:block">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl">{title}</h3>
                        <p className="bg-[#202020] px-3 py-1 rounded text-sm text-[#a0a0a0]">{langTag}</p>
                    </div>
                    <p className="text-[#808080] mb-4">{desc}</p>
                    <hr className="border-[#404040]" />
                    <br />
                    <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-4 text-[#c0c0c0] cursor-pointer">
                        <a className={deployStatus ? `hover:underline flex gap-2` : `text-[#404040] flex gap-2`} href={deployStatus ? deployLink : null} title={!deployStatus ? "Not deployed yet" : undefined} target="_blank">Deployment <GrDeploy size={20} /></a>
                        <a className="flex gap-2 hover:underline" href={Gitlink} target="_blank">Repository <FiGithub size={20} /></a>
                    </div>
                </div>

                {/* Mobile View - Accordion */}
                <div className="md:hidden">
                    <button
                        onClick={() => setOpenId(isOpen ? null : id)}
                        className="flex justify-between items-center w-full cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        <h3 className="text-xl">{title}</h3>
                        <div className="flex items-center gap-2">
                            <p className="bg-[#202020] px-3 py-1 rounded text-sm text-[#a0a0a0]">{langTag}</p>
                            <FiChevronDown size={20} className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                        <br />
                        <p className="text-[#808080] mb-4">{desc}</p>
                        <hr className="border-[#404040]" />
                        <br />
                        <div className="flex flex-col gap-4 text-[#c0c0c0] cursor-pointer">
                            <a className={deployStatus ? `hover:underline flex gap-2` : `text-[#404040] flex gap-2`} href={deployStatus ? deployLink : null} title={!deployStatus ? "Not deployed yet" : undefined} target="_blank">Deployment <GrDeploy size={20} /></a>
                            <a className="flex gap-2 hover:underline" href={Gitlink} target="_blank">Repository <FiGithub size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}