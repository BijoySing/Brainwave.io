

import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar.jsx';
import './index.css'; // Tailwind styles
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import OurStory from './components/OurStory.jsx';
import Testimonial from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';
import './App.css'; // Custom styles if any
import Reviews from './components/Reviews.jsx';
import CaseStudy from './components/CaseStudy.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
 



function App() {
  return (
    <div className="">
      {/* Your landing page components */}
      <Hero />
      <Services />
      <Reviews />
      <OurStory />
      <WhyChooseUs />
      <CaseStudy />
      <Testimonial />
      <Footer />
    </div>

  );
}

export default App;
