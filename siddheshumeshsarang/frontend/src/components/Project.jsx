export function Project({title, link}) {
    return (
        <a href={link} target="_blank">
            <img className="border border-dotted cursor-pointer h-[200px] w-[500px] md:h-[200px] md:w-[500px] transition duration-300 hover:scale-102" src={`https://github-readme-stats.vercel.app/api/pin/?username=SIDDHESHUMESHSARANG&repo=${title}&theme=transparent&hide_border=true`} alt="" />
        </a>
    );
}