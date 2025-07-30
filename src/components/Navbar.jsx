import React, { useState } from 'react';
import '../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <div className="max-w-[1163px] mx-auto px-4 flex items-center justify-between py-4">
                {/* Logo */}
                <h1 className="text-[#161C2D] font-bold text-2xl">Brainwave.io</h1>

                {/* Desktop Menu */}
                <nav className="hidden md:block">
                    <ul className="flex items-center space-x-8 text-sm">
                        <li><a href="#" className="text-[var(--primary-color)] font-bold">Demos</a></li>    
                         <li><a href="#" className="text-[var(--primary-color)] font-bold">Pages</a></li>
                        <li><a href="#" className="text-[var(--primary-color)] font-bold">Support</a></li>
                        <li><a href="#" className="text-[var(--primary-color)] font-bold">Contact</a></li>
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <button className="bg-[var(--secondary-color)] text-white px-4 py-2 text-sm font-semibold rounded">
                        Get Started a project
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl font-bold text-gray-800">
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col  px-4 space-y-4 py-6 text-sm font-bold text-[var(--primary-color)]">
                        <li><a href="#">Demos</a></li>
                         <li><a href="#">Pages</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Contact</a></li>
                        <li>
                            <button className="mt-2 bg-[var(--secondary-color)] text-white px-4 py-2 rounded">
                                Get Started a project
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
