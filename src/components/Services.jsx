import React from 'react';
import designer from '../assets/Designer.png';
import developer from '../assets/webd.png';
import writer from '../assets/Notes.png';
import right from '../assets/tail-right.png';

const Services = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1163px] mx-auto text-center mb-16 px-4">
        <h2 className="text-sm font-semibold text-[var(--red)] tracking-wide mb-2">OUR SERVICES</h2>
        <h1 className="text-4xl font-bold leading-snug">
          We provide great services for our <br className="hidden md:block" />
          customers based on needs
        </h1>
      </div>

      {/* Responsive cards */}
      <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-2 md:px-4">
        
        {/* Service Card */}
        {[{
          title: 'Graphic Design',
          img: designer,
          color: 'bg-[var(--green)]'
        }, {
          title: 'Web Development',
          img: developer,
          color: 'bg-[var(--navy)]'
        }, {
          title: 'Content Writing',
          img: writer,
          color: 'bg-[var(--red)]'
        }].map((service, idx) => (
          <div
            key={idx}
            className={`${service.color} flex flex-col items-center text-center px-4 py-10 rounded-2xl w-full max-w-sm`}
          >
            <img src={service.img} alt={service.title} className="w-[120px] h-[120px] mb-6" />
            <h3 className="text-white text-lg font-bold mb-3">{service.title}</h3>
            <p className="text-white text-sm mb-6">
              With lots of unique blocks, you can <br />
              easily build a page without coding. <br />
              Build your next landing page.
            </p>
            <div className="flex items-center gap-2 font-semibold text-white cursor-pointer">
              <span>Learn more</span>
              <img src={right} alt="Arrow" className="w-4" />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;
