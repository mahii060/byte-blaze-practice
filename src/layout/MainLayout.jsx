import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <>
            <header className="h-[76px]">
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="text-xl font-black">Footer</footer>
        </>
    );
};

export default MainLayout;