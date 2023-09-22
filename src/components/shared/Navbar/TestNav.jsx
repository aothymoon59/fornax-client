import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineBars } from 'react-icons/ai'


const TestNav = () => {
    const [isActive, setActive] = useState('false')

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <div className='block lg:hidden'>
            <div className='bg-blue-50 text-gray-800 flex justify-between lg:hidden sticky top-0'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        logo
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-blue-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 flex flex-col justify-between overflow-x-hidden bg-blue-50 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  lg:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Branding & Profile Info */}
                    <div>
                        <div className="w-full flex py-2 justify-center items-center mx-auto">
                            <Link to="/">
                                Bar Logo
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            <NavLink
                                to="/"
                                aria-label="Home"
                                title="Home"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-blue-300 text-black ${isActive ? "bg-blue-300" : "bg-transparent"}`
                                }
                            >

                                <span className="mx-4 font-medium">Home</span>
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestNav
