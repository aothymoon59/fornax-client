import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
// import TestNav from "../components/shared/Navbar/TestNav";

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter =
        location.pathname.includes("login") || location.pathname.includes("sign-up");
    return (
        <>
            {noHeaderFooter || <Navbar></Navbar>}
            {/* {noHeaderFooter || <TestNav></TestNav>} */}
            <div>
                <Outlet></Outlet>
            </div>
            {noHeaderFooter || <Footer></Footer>}
        </>
    );
};

export default MainLayout;