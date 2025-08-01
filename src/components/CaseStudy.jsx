import React from 'react';
import aura from '../assets/aura.png';
import mega from '../assets/mega.png';
import ab from '../assets/ab.png';
import webs from '../assets/webs.png';

const CaseStudy = () => {
    return (
        <section className="py-3 mx-auto text-center mt-10 ">
            <p className="text-sm uppercase font-semibold text-red-500 tracking-widest my-4">Case Studies</p>
            <h2 className="text-xl md:text-3xl font-bold mb-12">
                Our works describe why we are  <br className="block" />
                the best in the industry
            </h2>
            <div className='flex flex-col md:flex-row justify-center items-center gap-16 text-left bg-red-00 my-8 px-8 pt-6 rounded-lg'>
                <div>
                    <div>
                        <img src={aura} alt="" className='w-100 object-cover rounded-lg shadow-md' />
                        <p className='text-sm text-gray-400 px-4 pt-4 pb-2'>Graphics Design</p>
                        <h1 className='text-lg font-semibold px-4 mb-10'> Aura Branding Design</h1>
                    </div>
                    <div>
                        <img src={webs} alt="" className='w-100 object-cover rounded-lg shadow-md' />
                        <p className='text-sm text-gray-400 px-4 pt-4 pb-2'>Web Development</p>
                        <h1 className='text-lg font-semibold px-4 '> Gradient Web Development</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={ab} alt="" className='w-100 object-cover rounded-lg shadow-md' />
                        <p className='text-sm text-gray-400 px-4 pt-4 pb-2'>Graphics Design</p>
                        <h1 className='text-lg font-semibold px-4 mb-10'> AB.S Snacks Packaging</h1>

                    </div>
                    <div>
                        <img src={mega} alt="" className='w-100 object-cover rounded-lg shadow-md' />
                        <p className='text-sm text-gray-400 px-4 pt-4 pb-2'>Content Writing</p>
                        <h1 className='text-lg font-semibold px-4 '> Megazine Content Writing  </h1>

                    </div>
                </div>
            </div>
            <div className="">
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1 mb-10"
        >
          See all works <span>→</span>
        </a>
      </div>
            
        </section>
    );
};

export default CaseStudy;