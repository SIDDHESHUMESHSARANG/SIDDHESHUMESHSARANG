import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Project } from "../components/Project";

const Projects = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <p className="text-2xl ml-10 mt-10">Projects</p>
      <p className="text-[18px] text-[#505050] ml-10 mt-5">Pet-Projects</p>
      <div className="m-10">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-5 md:gap-4 mb-10">
          <Project title={'AI-PPT'} link={'https://github.com/SIDDHESHUMESHSARANG//AI-PPT'} />
          <Project title={'onlylinks'} link={'https://onlyylinks.web.app'}/>
          <Project title={'sweeper'} link={'https://marketplace.visualstudio.com/items?itemName=SiddheshUmeshSarang.sweeper'} />
          <Project title={'erklaren'} link={'https://github.com/SIDDHESHUMESHSARANG//erklaren'} />

        </div>

      </div>
      <p className="text-[18px] text-[#505050] ml-10 mt-15">Professional-Projects</p>
      <div className="h-[100px] w-[200px] flex items-center justify-center">
        <p className="ml-10 text-[#404040]">Not quite yet...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
