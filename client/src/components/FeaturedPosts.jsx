import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
    return ( 
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* First */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* image */}
            <Image src="/womc.jpeg" className="rounded-3xl object-cover" width={895} height={500} />

            
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold lg:text-lg">01.</h1>
                <Link className="text-blue-800 lg:text-lg"> BRACU FEST</Link>
                

                
                <span className="text-gray-500">1 day ago</span>

            </div>

            {/* title */}
            <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">  Women is cyber security! </Link>
            
            </div>
            {/* other */}

        </div>


    )
}

export default FeaturedPosts;