import React from 'react'
import { MenuBar } from '../components/MenuBar'
import { Certifications } from '../components/Certifications'
import Footer from '../components/Footer'

export const Certs = () => {
  return (
    <div>
      <MenuBar/>
          <p className="text-2xl p-10 mt-5">Certifications</p>

          <div>
              <div className="flex flex-col md:flex-row gap-5 md:gap-0 mb-15">
          {/* <Certifications img={'https://www.oracle.com/a/ocom/img/social-og-ou-1200x628.png'} name={'OCI DevOps Professional (2025)'} issuedBy={'Oracle University'} status={'Pending'} /> */}
          <Certifications img={'https://media.geeksforgeeks.org/img-practice/prod/courses/875/Web/Content/automation_testing_webp_1739771605.webp'} name={'Automation Testing'} issuedBy={'GeeksForGeeks'} status={'Pending'} ETC={"Early 2026"} />
          <Certifications img={'https://cdn.worldvectorlogo.com/logos/ms-cit-1.svg'} name={'MS-CIT'} status={'Completed'} issuedBy={'Maharashtra Knowledge Corporation Limited (MKCL)'} issueDate={'August 2024'} credentialID={'23-6732413'} skills={['MS Office', 'AI Literacy']} />
              </div>
        <Footer className=""/>
          </div>
    </div>
  )
}
