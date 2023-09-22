import { Link } from "react-router-dom";
import Container from "../../container/Container";
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-[#07172B]">
            <Container>
                <footer className="font-montserrat">
                    <div className="py-24 mx-auto flex sm:items-center md:items-start sm:flex-row sm:flex-nowrap flex-wrap flex-col">
                        <div className="flex-grow flex flex-wrap -mb-10 sm:mt-0 mt-10 sm:text-left text-center">
                            <div className="md:w-1/4 sm:w-1/2 w-full">
                                <h5 className="text-xl font-bold leading-[30px] text-white text-left">Navigation</h5>
                                <hr className="border border-[#173250] mt-[15px]" />
                                <nav className="list-none mb-10">
                                    <li>
                                        <Link>Home</Link>
                                    </li>
                                    <li>
                                        <Link>Share Market</Link>
                                    </li>
                                    <li>
                                        <Link>NFT</Link>
                                    </li>
                                    <li>
                                        <Link>P2P</Link>
                                    </li>
                                    <li>
                                        <Link>About</Link>
                                    </li>
                                </nav>
                            </div>
                            <div className="md:w-1/4 sm:w-1/2 w-full px-4">
                                <h5 className="footer-title-cs">Important</h5>
                                <hr className="border border-[#173250] mt-[15px]" />
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="md:w-1/4 sm:w-1/2 w-full px-4">
                                <h5 className="footer-title-cs">Important</h5>
                                <hr className="border border-[#173250] mt-[15px]" />
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="md:w-1/4 sm:w-1/2 w-full px-4">
                                <h2 className="footer-title-cs">Legal</h2>
                                <hr className="border border-[#173250] mt-[15px]" />
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="bg-[#07172B]">
                        <div className="mx-auto py-4 flex flex-wrap flex-col sm:flex-row">
                            <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
                                <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                            </p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <a className="text-gray-500">
                                    Fb
                                </a>
                                <a className="ml-3 text-gray-500">
                                    X
                                </a>
                                <a className="ml-3 text-gray-500">
                                    Insta
                                </a>
                                <a className="ml-3 text-gray-500">
                                    Linkedin
                                </a>
                            </span>
                        </div>
                    </div>
                </footer>
            </Container>

        </div>
    );
};

export default Footer;