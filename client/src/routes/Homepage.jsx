import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";

import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
          <span>•</span>
          <span className="text-blue-800">Learn about SheSecure</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Welcome to SheSecure
          </h1>
          <p className="mt-8 text-md md:text-xl">
            
SheSecure is a one-stop educational and utility platform designed Learning about securty and using digital service more securely, offering seamless access to resources, events, and learning opportunities. It empowers Women with personalized tools to enhance their knowledge and  experience.
          </p>
        </div>
        {/* animated button */}
 
      </div>
        {/* CATEGORIES */}
        <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* POST LIST */}
      <div className="">
      <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
      <PostList/>

      </div>






    </div>
  )
}

export default Homepage;