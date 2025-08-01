import React from 'react';
import man from '../assets/man.png';
import girl from '../assets/women.png';
import candy from '../assets/women2.png';
import dots from '../assets/fff.png'; // optional dot decoration

const OurStory = () => {
    return (
        <section className="bg-white py-20 max-w-[1163px] mx-auto">
            <div className="max-w-[1160px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-12">
                {/* Left Section: Text + Large Image */}
                <div className="flex-1 flex flex-col gap-14">
                    <div>
                        <p className="text-sm font-semibold text-[var(--red)] uppercase mb-4">Our Story</p>
                        <h2 className="text-xl md:text-2xl font-bold text-[var(--primary-color)] leading-snug">
                            We know how everything works <br />
                            and why your business is failing <br />
                            over and over again.
                        </h2>
                    </div>

                    <div className="">
                        <img
                            src={man}
                            alt="Colorful Portrait"
                            className=""
                        />
                    </div>
                </div>

                {/* Right Section: Two images and paragraph */}
                {/* <div className="flex- flex flex-col justify-between relative gap-6">
                    <div className="relative flex justify-start items-start gap-4">
                        <img
                            src={girl}
                            alt="Side profile"
                            className="rounded-xl w-[280px] h-auto"
                        />
                        <img
                            src={dots}
                            alt="Decoration"
                            className="absolute -top-4 -right-4 w-10 md:w-12"
                        />
                        <img
                            src={candy}
                            alt="Candy"
                            className="rounded-xl w-[100px] h-[100px] object-cover"
                        />
                    </div>

                    <p className="text-sm text-gray-600 max-w-md mt-6">
                        We share common trends and strategies for improving your rental income and making sure you stay in high demand. With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                    </p>
                </div> */}

                <div className="flex-1 flex flex-col justify-between relative md:gap-12">
                    <div className=" relative flex flex-col lg:flex-row  items-center gap-6 md:gap-16 " >
                        <div>
                            <img src={girl} alt="Side profile" className="" />
                            <img src={dots} alt="Decoration" className="absolute -top-9 -right-7      md:-top-12 md:right-28" />
                        </div>
                        <div>
                            <img src={candy} alt="Candy" className="rounded-xl w-[100px] h-[100px] object-cover" />
                        </div>

                    </div>
                    <div>
                        <p className="text-sm text-gray-600 max-w-md mt-6">
                            We share common trends and strategies for improving your rental income and making sure you stay in high demand. With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
                <div className="card *:bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold"> 1M+</h3>
                    <p className="text-sm text-gray-600 font-regular">Customer Visits omega every month to get their services.</p>
                </div>
                <div className="card *:bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold"> 92%</h3>
                    <p className="text-sm text-gray-600">Satisfaction Rate comes from our awesome customers.</p>
             </div>
                <div className="card *:bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold"> 4.9/5.0</h3>
                    <p className="text-sm text-gray-600">Customer Rating from our services all over the world.</p>
                </div>  
            </div>
        </section>
    );
};

export default OurStory;