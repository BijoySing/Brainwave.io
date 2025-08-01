import Navbar from './Navbar';
import bgImg from '../assets/BG.png';
import heroimg from '../assets/hero.png';
import wave from '../assets/waves.png';
import round from '../assets/round.png';
import fill from '../assets/ff.png';
import React from 'react';
export default function Hero() {
  return (
    <section
      className=" bg-cover bg-center bg-no-repeat min-h-[90vh]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Navbar />
      <div className="w-full max-w-[1163px] mx-auto flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between px-4 lg:px-0 pt-10 lg:h-[calc(100vh-70px)]">
        <div className="flex flex-col justify-center h-full text-center lg:text-left">
          <h1 className="text-sm font-semibold mb-7 text-[var(--red)]">LETS SHIFT YOUR BUSINESS</h1>
          <p className="text-4xl lg:text-6xl font-bold text-[var(--primary-color)] mb-6">
            Shift your business <br></br>fast and Shades Pro.
          </p>
          <p className="text-xs lg:text-lg text-gray-600 mb-10">
            With  lots  of unique blocks, you can easily build a page <br></br>
            without any coding. Build your next landing page with <br></br>
            Shades Pro and launch your project in no time.
          </p>
          <div>
            <button>
              <span className="text-white text-left text-sm font-semibold px-6 py-4 bg-[var(--secondary-color)] rounded">
                Get Started a project
              </span>
            </button>
          </div>
        </div>
        <div className="relative  ">

          <img
            src={heroimg}
            alt="Hero"
            className="z-10 "
          />
          <div className="flex z-0 items-center justify-between mt-8">
            <img src={wave} alt="Wave" className="absolute top-70 right-5 lg:top-85 lg:right-10" />
            <img src={round} alt="Round" className="absolute top-70 right-70 lg:top-85 lg:right-85" />
            <img src={fill} alt="Fill" className="absolute bottom-85 right-60 lg:bottom-105 lg:right-70  " />
          </div>
        </div>
       
      </div>

    </section>
  );
}