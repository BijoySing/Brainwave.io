import React from 'react';
import men from '../assets/bus-man.png';
import task from '../assets/task.png';
import ic from '../assets/ic.png';
import chat from '../assets/chat.png';


const WhyChooseUs = () => {
    return (
        <section className="py-3 mx-auto text-center bg-[#F4F7FA] ">
            <p className="text-sm uppercase font-semibold text-red-500 tracking-widest my-4">Why Choose Us</p>
            <h2 className="text-xl md:text-3xl font-bold mb-12">
                People choose us because we <br className="block" />
                serve the best for everyone
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-start gap-16 text-left bg-red-00 my-8 px-8 py-6 rounded-lg border-b border-gray-200">
                <div className='flex flex-col gap-8 px-4'>
                    <div className="flex gap-6 pb-8">
                        <div>
                            <div className="bg-indigo-100 py-3 px-4 rounded-md flex justify-center items-center">
                                <img src={men} alt="Icon" className="text-center" />
                            </div>
                        </div>
                        <div className="">  
                            <h3 className="font-semibold text-lg mb-2">Dedicated project manager</h3>
                            <p className="text-gray-500 text-sm">
                                With lots of unique blocks, you can <br /> easily build a page without coding.<br />
                                Build your next landing page.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <div className="bg-red-100 py-3 mt-1 px-4 rounded-md flex justify-center items-center">
                                <img src={task} alt="Icon" className="text-center" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Organized Tasks</h3>
                            <p className="text-gray-500 text-sm">
                                With lots of unique blocks, you can <br /> easily build a page without coding.<br />
                                Build your next landing page.
                            </p>
                        </div>
                    </div> </div>
                <div className='flex flex-col gap-8 px-4'>
                    <div className="flex gap-6 ">
                        <div>
                            <div className="bg-green-100 py-3 px-4 rounded-md flex justify-center items-center">
                                <img src={chat} alt="Icon" className="text-center" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2"> Easy Feedback Sharing </h3>
                            <p className="text-gray-500 text-sm">
                                With lots of unique blocks, you can <br /> easily build a page without coding.<br />
                                Build your next landing page.
                            </p>
                        </div>
                    </div>  <div className="flex gap-6 py-8 ">
                        <div>
                            <div className="bg-gray-100 py-3 px-4 rounded-md flex justify-center items-center">
                                <img src={ic} alt="Icon" className="text-center" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Never Miss Deadline</h3>
                            <p className="text-gray-500 text-sm">
                                With lots of unique blocks, you can <br /> easily build a page without coding.<br />
                                Build your next landing page.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* CTA Section */}
            <div className="mt-10  pt-10 flex flex-col md:flex-row justify-evenly items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-3">Ready to launch your next project?</h3>
                    <p className="text-gray-500 py-2 text-sm">
                        With lots of unique blocks, you can easily build a page without <br /> coding.
                        Build your next landing page.
                    </p>
                </div>
                <button className="bg-[var(--secondary-color)] text-white px-4 py-2 text-sm font-semibold rounded ">
                        Get Started a project
                    </button>
            </div>
        </section>
    );
};

export default WhyChooseUs;
