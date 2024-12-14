import React from 'react'
import '../Css/client.css'
import ClientCards from './ClientCards';
import Himg1 from '../assest/client/Himg1.png';
import Himg2 from '../assest/client/Himg2.png';
import Himg3 from '../assest/client/Himg3.png';
import Himg4 from '../assest/client/Himg4.png';
import Himg5 from '../assest/client/Himg5.png';
import Himg6 from '../assest/client/Himg6.png';
import Himg7 from '../assest/client/Himg7.png';
import Himg8 from '../assest/client/Himg8.png';
import Himg9 from '../assest/client/Himg9.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Client = () => {

  const ClientCardsData = [
    {
      id: 1,
      title: ' Sofia K ',
      para: 'Working with Sired Bits was a game changer for our business. Their team understood our vision and delivered a seamless, high-performing mobile app that exceeded our expectations.',
      img: Himg1,

      des: ' Digital Marketing',
    },
    {
      id: 2,
      title: "John Samuel",
      para: 'Their creative and data-driven approach to digital strategy helped us engage with our audience in new and meaningful ways. Sired Bits is not just a service provider; they are a true partner committed to our growth.',
      img: Himg2,

      des: 'CEO',
    },
    {
      id: 3,
      title: 'Michaell',
      para: 'Sired Bits is by far the best partner for IT projects in Europe. The team’s ability to combine European values with technological excellence made our project a success.',
      img: Himg3,
      des: 'Co-Founder',
    },
    {
      id: 4,
      title: 'Jennifer Stance',
      para: 'We faced challenges with scalability until we partnered with Sired Bits. Their full-stack development expertise delivered a system that performs flawlessly, even under high traffic. We are incredibly grateful!.',
      img: Himg4,

      des: 'Mobile App Developer',
    },
    {
      id: 5,
      title: 'Omar Tahir',
      para: 'From start to finish, Sired Bits showcased their technical brilliance and creative. They made complex problems seem effortless and gave us a solution we’re proud to present to our customers.',
      img: Himg5,
      des: 'Business Manager',
    },
    {
      id: 6,
      title: 'Charles Max',
      para: 'The team at Sired Bits was attentive to our specific requirements and delivered a product that fit perfectly with our business processes. The level of customization they offer is second to none.',
      img: Himg6,
      des: 'UX/UI Designer',
    },
    {
      id: 7,
      title: 'Isabelle Joseph',
      para: 'Sired Bits provides top tier solutions without exceeding our budget. Their balance of affordability and quality is something you rarely see in the industry. Highly recommended!.',
      img: Himg7,
      des: 'Operations Manager',
    },
    {
      id: 8,
      title: 'Kevin Fox',
      para: 'What stood out most was their ability to meet deadlines without compromising quality. Sired Bits is a team you can rely on, even for the most challenging projects.',
      img: Himg8,
      des: 'Project Manager',
    },
    {
      id: 9,
      title: 'Alex Adam',
      para: 'What sets Sired Bits apart is their unwavering commitment to delivering exceptional results on time. Their team is not just skilled but also dependable.',
      img: Himg9,
      des: 'Senior Team Lead',
    },
  ];
  const settings = {
    dots: true,                  
    speed: 500,                   
    slidesToShow: 3,              
    slidesToScroll: 3,           
    infinite: true,                
    autoplay: true,               
    autoplaySpeed: 2000,           
    pauseOnHover: true,            
    responsive: [
        {
            breakpoint: 1024,
            settings: { // Adjust for larger screens
                slidesToShow: 2,  
                slidesToScroll: 2,
                speed: 900,    
                autoplaySpeed: 3000,  
                dots: false,     
            }
        },
        {
            breakpoint: 600,
            settings: {  // Adjust for mobile screens
                slidesToShow: 1, 
                dots: false,    
                slidesToScroll: 1,
            }
        }
    ]
};



  return (
    <div className="client-parent">
      <div className="client-outer">
        <div className='client-upper'>
          <p>
            <span>Our Testimonial</span>
          </p>
          <div className='outer'>
            <p id='said'>
              What they said <br /> about SiredBits
            </p>
            <p id='para'>
              At <span className='About-sired'>SiredBits</span> we don't just build apps and solutions, we craft experiences. Our clients trust us because we listen, adapt, and deliver solutions that meet their evolving needs. Whether it's a web app, mobile app, a digital strategy, or full-stack development, our goal is always to drive results that empower businesses and help them grow in the digital landscape.
            </p>
          </div>
        </div>
        <div className='client-lower'>
          <Slider {...settings}>
            {ClientCardsData.map((ele, index) => {
              return (
                <ClientCards
                  icon={ele.icon}
                  para={ele.para}
                  img={ele.img}
                  key={index}
                  title={ele.title}
                  des={ele.des}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Client
