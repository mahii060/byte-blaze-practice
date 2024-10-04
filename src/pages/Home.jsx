import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="h-[76px]">
                <Navbar />
            </div>
            <h1 className="text-5l text-ceter">Homepage</h1>
        </div>
    );
};

export default Home;