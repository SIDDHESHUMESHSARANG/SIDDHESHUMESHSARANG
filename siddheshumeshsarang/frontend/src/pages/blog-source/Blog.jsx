import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import BlogPosts from "./BlogPosts"

const Blog = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex flex-col gap-5">
        <p className="text-2xl ml-10 mt-10">Blog</p>
        <div className="w-90 md:w-300 md:ml-10 ml-2 md:mt-5">
          <div>
            <BlogPosts />
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog