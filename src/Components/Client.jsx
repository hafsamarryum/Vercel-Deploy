import React from 'react'
import '../Css/client.css'
import ClientCards from './ClientCards';
import Himg1 from '../assest/client/Himg1.png';
import Himg2 from '../assest/client/Himg2.png';
import Himg3 from '../assest/client/Himg3.png';
import Himg4 from '../assest/client/Himg4.png';
import Himg5 from '../assest/client/Himg5.png';
import icon from '../assest/client/icon.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Client = () => {

  const ClientCardsData = [
    {
      id: 1,
      title: 'John Samuel ',
      para: 'Working with Sired Bits was a game changer for our business. Their team understood our vision and delivered a seamless, high-performing mobile app that exceeded our expectations.',
      img: Himg1,
      icon: icon,
      des: 'CEO',
    },
    {
      id: 2,
      title: "Sofia K",
      para: 'Their creative and data-driven approach to digital strategy helped us engage with our audience in new and meaningful ways. Sired Bits is not just a service provider; they are a true partner committed to our growth.',
      img: Himg5,
      icon: icon,
      des: 'Digital Marketing',
    },
    {
      id: 3,
      title: 'Michaell',
      para: 'Sired Bits is by far the best partner for IT projects in Europe. The team’s ability to combine European values with technological excellence made our project a success.',
      img: Himg3,
      icon: icon,
      des: 'Co-Founder',
    },
    {
      id: 4,
      title: 'Jennifer Stance',
      para: 'We faced challenges with scalability until we partnered with Sired Bits. Their full-stack development expertise delivered a system that performs flawlessly, even under high traffic. We are incredibly grateful!.',
      img: Himg4,
      icon: icon,
      des: 'Mobile App Developer',
    },
    {
      id: 5,
      title: 'Omar Tahir',
      para: 'From start to finish, Sired Bits showcased their technical brilliance and creative. They made complex problems seem effortless and gave us a solution we’re proud to present to our customers.',
      img: Himg5,
      icon: icon,
      des: 'Business Manager',
    },
    {
      id: 6,
      title: 'Ketrine K',
      para: 'The team at Sired Bits was attentive to our specific requirements and delivered a product that fit perfectly with our business processes. The level of customization they offer is second to none.',
      img: Himg3,
      icon: icon,
      des: 'UX/UI Designer',
    },
    {
      id: 7,
      title: 'Isabelle Joseph',
      para: 'Sired Bits provides top tier solutions without exceeding our budget. Their balance of affordability and quality is something you rarely see in the industry. Highly recommended!.',
      img: Himg5,
      icon: icon,
      des: 'Operations Manager',
    },
    {
      id: 8,
      title: 'Sarah Lee',
      para: 'What stood out most was their ability to meet deadlines without compromising quality. Sired Bits is a team you can rely on, even for the most challenging projects.',
      img: Himg1,
      icon: icon,
      des: 'Project Manager',
    },
  ];
  const settings = {
    dots: true,
    // speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    // infinite: true,
    // autoplay: true,
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
              What they said <br /> about Sired Bit's
            </p>
            <p id='para'>
            At <span className='About-sired'>Sired Bit's</span> we don't just build apps and solutions; we craft experiences. Our clients trust us because we listen, adapt, and deliver solutions that meet their evolving needs. Whether it's a mobile app, a digital strategy, or full-stack development, our goal is always to drive results that empower businesses and help them grow in the digital landscape.
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
