import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Container from "../../container/Container";
import logo1 from '../../../assets/logo-1.png'
import aboutIcon from '../../../assets/navbar/about-us.png'
import teamIcon from '../../../assets/navbar/Team.png'
import './Navbar.css'

// TODO: responsive needed for small device 

const Navbar = () => {

    return (
        <div className="w-full dark-bg z-50">
            <Container>
                <div className="navbar py-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <FaBars className="text-[#49658A]" />
                            </label>
                            {/* small device menu items  */}
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#102642] rounded-box w-52 uppercase"
                            >

                                <li>
                                    <NavLink
                                        to="/"
                                        aria-label="Home"
                                        title="Home"
                                        className={({ isActive }) => (isActive ? "active font-manrope" : "default font-montserrat")}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/share-market"
                                        aria-label="Share market"
                                        title="Share market"
                                        className={({ isActive }) => (isActive ? "active font-manrope" : "default font-montserrat")}
                                    >
                                        Share market
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/nft"
                                        aria-label="NFT"
                                        title="NFT"
                                        className={({ isActive }) => (isActive ? "active font-manrope" : "default font-montserrat")}
                                    >
                                        NFT
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/p2p"
                                        aria-label="P2P"
                                        title="P2P"
                                        className={({ isActive }) => (isActive ? "active font-manrope" : "default font-montserrat")}
                                    >
                                        P2P
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        aria-label="Contact"
                                        title="Contact"
                                        className={({ isActive }) => (isActive ? "active font-manrope" : "default font-montserrat")}
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about-us"
                                        aria-label="About Us"
                                        title="Contact"
                                        className={({ isActive }) => (isActive ? "active font-manrope" : "default font-montserrat")}
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/team"
                                        aria-label="Team"
                                        title="Team"
                                        className={({ isActive }) => (isActive ? "active font-manrope" : "default font-montserrat")}
                                    >
                                        Team
                                    </NavLink>
                                </li>
                                <li className="flex flex-col gap-5">
                                    <select className="default">
                                        <option value='usd'>USD $</option>
                                        <option value='euro'>EUR &euro;</option>
                                        <option value='bdt'>BDT &#2547;</option>
                                    </select>
                                    <Link to='/login' className="login-btn">
                                        Login
                                    </Link>
                                    <Link to='/sign-up' className="common-btn">
                                        Signup
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link to="/">
                            <img src={logo1} alt="Logo" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 uppercase">
                            <li>
                                <NavLink
                                    to="/"
                                    aria-label="Home"
                                    title="Home"
                                    className={({ isActive }) => (isActive ? "active font-manrope" : "default font-montserrat")}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/share-market"
                                    aria-label="Share market"
                                    title="Share market"
                                    className={({ isActive }) => (isActive ? "active font-manrope" : "default font-montserrat")}
                                >
                                    Share market
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/nft"
                                    aria-label="NFT"
                                    title="NFT"
                                    className={({ isActive }) => (isActive ? "active font-manrope" : "default font-montserrat")}
                                >
                                    NFT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/p2p"
                                    aria-label="P2P"
                                    title="P2P"
                                    className={({ isActive }) => (isActive ? "active font-manrope" : "default font-montserrat")}
                                >
                                    P2P
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    aria-label="Contact"
                                    title="Contact"
                                    className={({ isActive }) => (isActive ? "active font-manrope" : "default font-montserrat")}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            {/* large device about us  */}
                            <li tabIndex={0} className="hidden lg:block">
                                <details>
                                    <summary className="default">About Us</summary>
                                    <ul className="p-[10px] rounded-xl bg-[#102642] w-[250px]">
                                        <li>
                                            <Link to='/about-us' aria-label="About Us" title="Fornax or non-fungible tokens, are unique and irreplaceable" className='px-[10px] py-4 hover:bg-[#1D375899] rounded-[10px] flex items-center gap-[10px]'>
                                                <img src={aboutIcon} alt="About Icon" />
                                                <div>
                                                    <h4 className="font-bold text-sm font-montserrat leading-[18px] text-white">About us</h4>
                                                    <p className="leading-[26px] text-[#49658A] capitalize">Fornax or non-fungible...</p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/team' aria-label="Team" title="Team and irreplaceable tokens, are unique" className='px-[10px] py-4 hover:bg-[#1D375899] rounded-[10px] flex items-center gap-[10px]'>
                                                <img src={teamIcon} alt="Team Icon" />
                                                <div>
                                                    <h4 className="font-bold text-sm font-montserrat leading-[18px] text-white">Team</h4>
                                                    <p className="leading-[26px] text-[#49658A] capitalize">Team and irreplaceable...</p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-5 font-montserrat hidden lg:flex">
                        {/* currency change  */}
                        <select className="default">
                            <option value='usd'>USD $</option>
                            <option value='euro'>EUR &euro;</option>
                            <option value='bdt'>BDT &#2547;</option>
                        </select>
                        <Link to='/login' className="login-btn">
                            Login
                        </Link>
                        <Link to='/sign-up' className="common-btn">
                            Signup
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
