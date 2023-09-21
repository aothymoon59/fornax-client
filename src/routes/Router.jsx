import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import ShareMarket from "../pages/ShareMarket/ShareMarket";
import Nft from "../pages/NFT/Nft";
import P2p from "../pages/P2P/P2p";
import AboutUs from "../pages/AboutUs/AboutUs";
import Team from "../pages/Team/Team";
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/share-market',
                element: <ShareMarket />
            },
            {
                path: '/nft',
                element: <Nft />
            },
            {
                path: '/p2p',
                element: <P2p />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/team',
                element: <Team />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sign-up',
                element: <Signup />
            },

        ]
    },
]);
