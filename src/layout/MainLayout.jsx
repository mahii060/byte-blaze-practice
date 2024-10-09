import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const MainLayout = () => {
    const navigation = useNavigation();

    if (navigation.state === 'loading') return <Loader />
    return (
        <>
            <header className="h-16">
                <Navbar />
            </header>
            <main className="min-h-[calc(100vh-116px)]">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;