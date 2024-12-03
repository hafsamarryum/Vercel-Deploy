import React from 'react';


const AboutCards = (prop) => {

  return (
    <>
      <div className='about-card'>
        <div className='about-Cardouter'>
          <div className='Aboutimg-wrapper'>
            <img src={prop.img} alt='not found' />
          </div>
          <h6>{prop.heading}</h6>
          <p>
          {prop.para}
          </p>
          <img className='img-arrow' src={prop.arrow} />
        </div>
      </div>
    </>
  );
};

export default AboutCards;
