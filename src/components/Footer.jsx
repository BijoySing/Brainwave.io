
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-[var(--primary-color)] py-2">
            <div className="pb-2 max-w-[1200px] mx-auto my-4 mb-10  pt-10 flex flex-col md:flex-row justify-around items-center  ">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-3 text-gray-50">Ready to launch your next project?</h3>
                    <p className="text-gray-50 py-2 text-sm ">
                        With lots of unique blocks, you can easily build a page without <br /> coding.
                        Build your next landing page.
                    </p>
                </div>
                <button className="bg-[var(--secondary-color)] text-white px-4 py-2 text-sm font-semibold rounded ">
                    Get Started a project
                </button>

            </div>
            <div className="max-w-[900px] mx-auto text-gray-50 text-sm mt-10 border-t pt-20     border-gray-700">

                <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Logo & Description */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Brainwave.io</h2>
                        <p className="text-xs text-gray-400">
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-green-400 hover:text-green-300">
                                <FaTwitter />
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xs font-semibold mb-4 text-gray-300">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white">About us</a></li>
                            <li><a href="#" className="hover:text-white">Contact us</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Press</a></li>
                        </ul>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-xs font-semibold mb-4 text-gray-300">Product</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">News</a></li>
                            <li><a href="#" className="hover:text-white">Help desk</a></li>
                            <li><a href="#" className="hover:text-white">Support</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xs font-semibold mb-4 text-gray-300">Services</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
                            <li><a href="#" className="hover:text-white">Content Writing</a></li>
                            <li><a href="#" className="hover:text-white">SEO for Business</a></li>
                            <li><a href="#" className="hover:text-white">UI Design</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-xs font-semibold mb-4 text-gray-300">Legal</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white">Return Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Footer;