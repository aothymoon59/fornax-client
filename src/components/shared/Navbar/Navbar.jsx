import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "../../container/Container";
import logo1 from '../../../assets/logo-1.png'
import aboutIcon from '../../../assets/navbar/about-us.png'
import teamIcon from '../../../assets/navbar/Team.png'
import './Navbar.css'
import { useEffect, useRef, useState } from "react";

// TODO: responsive needed for small device

const Navbar = () => {
    // State to track if the mobile menu is open or closed
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    // Function to toggle the mobile menu state
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    // Prevent the label's click event from propagating
    const preventPropagation = (e) => {
        e.stopPropagation();
    };

    // Add an event listener to the document to handle clicks outside the mobile menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMobileMenuOpen &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target)
            ) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <div className="w-full dark-bg z-50">
            <Container>
                <div className="navbar px-0 h-24 justify-between">
                    <div className="flex-start">
                        <Link to="/">
                            <img src={logo1} alt="Logo" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        {/* large device menu items  */}
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
                            <li>
                                <div className="dropdown dropdown-hover lg-dropdown">
                                    <label tabIndex={0} className="default">About Us</label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-[10px] rounded-xl bg-[#102642] w-[250px] top-[35px] left-[-7px]">
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
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* small device menu */}
                    <div className="flex-end md:hidden">
                        <div className="dropdown" ref={mobileMenuRef} onClick={preventPropagation}>
                            <label tabIndex={0} onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    // If the mobile menu is open, display the cross icon
                                    <FaTimes className="text-[#49658A]" />
                                ) : (
                                    // If the mobile menu is closed, display the FaBars icon
                                    <FaBars className="text-[#49658A]" />
                                )}
                            </label>


                            {/* small device menu items  */}
                            {isMobileMenuOpen &&
                                <ul
                                    tabIndex={0}
                                    className="menu menu-compact right-0 dropdown-content mt-3 p-2 shadow bg-[#102642] rounded-box w-52 uppercase"
                                >

                                    <li>
                                        <NavLink
                                            to="/"
                                            aria-label="Home"
                                            title="Home"
                                            className={({ isActive }) => (isActive ? "active font-manrope" : "default font-montserrat")}
                                            onClick={closeMobileMenu}
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
                                            onClick={closeMobileMenu}
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
                                            onClick={closeMobileMenu}
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
                                            onClick={closeMobileMenu}
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
                                            onClick={closeMobileMenu}
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
                                            onClick={closeMobileMenu}
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
                                            onClick={closeMobileMenu}
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
                                </ul>}
                        </div>
                    </div>
                    <div className="flex-end gap-5 font-montserrat hidden md:flex">
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