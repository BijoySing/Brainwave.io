import React from 'react';
import reviewImage from '../assets/review.png';
import star from '../assets/Stars.png';

const Reviews = () => {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center md:items-start py-10 px-4 gap-8">
      
      {/* Image */}
      <div className="">
        <img src={reviewImage} alt="User Review" className="w-full h-auto" />
      </div>

      {/* Review Text */}
      <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start gap-4 w-full md:w-1/2">
        <img src={star} alt="Star Rating" className="w-20" />
        <div>
          <h1 className="text-base md:text-lg font-bold text-[var(--primary-color)] mb-4">
            "OMG! I cannot believe that I have got a brand new landing page,
            after getting albino. It is so easy to edit and publish."
          </h1>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-bold">Franklin Hicks</span> - Web Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;