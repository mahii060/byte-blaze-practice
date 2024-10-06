import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content text-center">
                <div className="max-w-7xl">
                    <h1 className="text-5xl font-bold">Welcome to&nbsp;
                        <span
                            className="bg-gradient-to-r from-secondary via-violet-500 to-primary text-transparent bg-clip-text animate-gradient bg-300%"
                        >ByteBlaze
                        </span>
                    </h1>
                    <p className="py-6">
                        ByteBlaze is the bridge between the complex world of technology and <br />the curious minds eager to understand it
                    </p>
                    <div className="space-x-4">
                        <Link to='/blogs' className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
                            <span className="relative text-black group-hover:text-base-100">Read Blogs</span>
                        </Link>
                        <Link to='/bookmarks' className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-secondary"></span>
                            <span className="relative text-black group-hover:text-base-100">Read Blogs</span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;