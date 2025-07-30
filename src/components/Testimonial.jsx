import React from 'react';
import bg from '../assets/BG1.png';
import lan from '../assets/lan.png';

const Testimonial = () => {
    return (
        <div>
            <section  className=" bg-cover bg-center bg-no-repeat pb-14"
                  style={{ backgroundImage: `url(${bg})` }}>
                <h2 className="flex justify-center uppercase items-center text-sm md:text-md font-semibold text-center text-[#68D585] pt-12 md:pt-40 ">
                    Testimonial
                </h2>
                <h1 className="text-lg md:text-2xl font-bold text-center text-gray-50 mt-4 px-4">
                    Simple the Best. Better than the Rest. 
                     I'd <br />recommend this product to beginners  <br />and experts users.
                </h1>
                <img src={lan} className="mx-auto mt-8" alt="" />
                <h1 className="text-md md:text-xl font-bold text-center text-white mt-2 px-4">
                    Lan Klein
                </h1>
                <p className="text-center text-white text-sm md:text-md px-4 mt-1">
                    Digital marketer
                 </p>
            </section>
        </div>
    );
};

export default Testimonial;