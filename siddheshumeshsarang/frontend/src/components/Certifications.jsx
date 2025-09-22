export const Certifications = ({img, name, status, issuedBy, issueDate, credentialID, skills, ETC}) => {
  return (
    <div className='bg-[#151515] border border-[#404040] h-auto w-[80%] md:w-[30%] ml-10 p-4 hover:scale-102 transition-transform duration-300 ease-in-out'>
        {img && (
            <img src={img} alt="certificate image" height={200} width={200} />
        )}
        <div className='ml-1'>
            <p className='mt-4 text-2xl inline-flex'>{name} 
            <span className={`text-[15px] mt-1.5 ml-4 ${status === "Completed" ? "text-[green]" : "text-[yellow]"}`}>{status}</span></p>
        {issuedBy && (
            <>
                <p className='text-[#505050]'>{issuedBy}</p> <br />
                {issueDate && (
                <>
                <code className='text-[#c0c0c0] mt-2'>Issued on {issueDate}</code>
                <p className='text-[#c0c0c0] mt-2'>Credential ID: {credentialID}</p>
                </>
                )}
            </>
        )}
        </div>

        {skills && (
              <div className='ml-1 mt-2'>
                  <p>Skills learned : </p>
                  <div className='flex flex-wrap gap-2 mt-2'>
                      {skills && skills.map((skill, index) => (
                          <p key={index} className='p-2 bg-[#202020] rounded-full text-[14px]'>
                              {skill}
                          </p>
                      ))}
                  </div>
              </div>
        )}

        {
            ETC && (
                  <div className='ml-0 w-40 mt-2 bg-[#202020] p-0.3 rounded-full'>
                    <p className="text-[#606060] m-2">ETC: {ETC}</p>
                </div>
            )
        }
    </div>
  )
}
