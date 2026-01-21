import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button"; // your custom button component
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
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
                                to="/about"
                                className="text-gray-700 hover:text-blue-600 font-medium transition"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/shop"
                                className="text-gray-700 hover:text-blue-600 font-medium transition"
                            >
                                Shop
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Register Button */}
                <div className="flex items-center gap-5">
                    <ShoppingCart size={36} className="text-blue-500 cursor-pointer" />
                    <Button text="Register Now" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
