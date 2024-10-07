import Hero from "../components/Hero";
import wave from "../assets/wave.svg"

const Home = () => {
    return (
        <div className="flex relative flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <Hero />
            <img className="w-full absolute bottom-0" src={wave} alt="" />
        </div>
    );
};

export default Home;