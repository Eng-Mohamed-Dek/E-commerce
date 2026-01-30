import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./Button"; // your custom button component
import { ShoppingCart } from "lucide-react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
    const  { cartTotal } = useContext(AppContext)
    
    return (
        <header className="bg-white">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                
                {/* Logo */}
                <div className="flex items-center">
                    <img src="./logo.png" alt="Logo" className="h-10 cursor-pointer" />
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-blue-600 font-medium transition"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="text-gray-700 hover:text-blue-600 font-medium transition"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Products"
                                className="text-gray-700 hover:text-blue-600 font-medium transition"
                            >
                                Products
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Register Button */}
                <div className="flex items-center gap-5">
                    <span className="h-8 w-8 rounded-full bg-blue-500/80 flex justify-center items-center text-xl p-3 text-white">{cartTotal}</span>
                    <Link to="/cart"><ShoppingCart size={36} className="text-blue-500 cursor-pointer" /></Link>
                    <Link to="/signup"><Button text="Register Now" /></Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
