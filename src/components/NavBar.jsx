import React, { useState } from 'react'
import icon1 from '../assets/logo1.png'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Define the menu items and links
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <nav className="flex items-center justify-between bg-gradient-to-r from-white to-gray-800 p-4">
        <div className="flex items-center">
            <img
                src={icon1}
                alt="DropNotch icon"
                className="h-[1.7rem] w-[5.9rem] mr-2"
            />
        </div>

        <div className="relative lg:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-800"
            >
                <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            {isMenuOpen && (
                <div className="absolute top-16 right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                    {menuItems.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.name}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-600 hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>

        <div className="hidden lg:flex items-center">
            {menuItems.map((item) => (
                <NavLink
                style={{fontFamily:'serif',font:'bold',text:20}}
                    to={item.path}
                    key={item.name}
                    className="text-white mr-4 hover:text-gray-300"
                >
                    {item.name}
                </NavLink>
            ))}
        </div>
    </nav>
    );
}

export default NavBar
