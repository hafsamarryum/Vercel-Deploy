import React from 'react';
import '../Css/services.css';
import Range from './Range';
import buliding from '../assest/services/buliding.png'
import projects from '../assest/services/projects.png'
import girl from '../assest/services/girl.jpg'


const Services = () => {
  return (
    <div className='services-parent'>
      <div className='services-outer'>
        <div className='services-left'>
          <p className='fortyFive'>10+ Year Of Experience</p>
          <h5>Our Services & Skills</h5>
          <div className='range-wrapper'>
            <Range />
          </div>
        {/* <div className="services-bottom">
            <div className="right">
                <img src={buliding} alt="" srcset="" />
                <div className="services-counter-wrapper">
                 <h1>35M</h1>
                 <p>Customer</p>
                </div>
            </div>
            <div className="left">
            <img src={projects} alt="" srcset="" />
                <div className="services-counter-wrapper">
                 <h1>70K</h1>
                 <p>Projects</p>
                </div>
            </div>
        </div> */}
        </div>
        <div className='services-right'>
         <img src={girl} alt="" />
         {/* <div className="green-outer">
          <p>Committed to excellence in software development, we provide the expertise you need. With a proven track record, skilled engineers, and extensive experience.
          </p>
          <p className='green-bottom-para'>In more than 10 years of IT outsourcing. We have successfully delivered over 20+ projects across 15 countries. </p>
          <p className='harry-waston'>Team SiredBits</p>
          <p className='abacus'>Your Tech Partner </p>
         </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
