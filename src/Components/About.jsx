import React from 'react';
import '../Css/about.css';
import uiUx from '../assest/about/uiUx.png';
import dev from '../assest/about/dev.png';
import appDesign from '../assest/about/appDesign.png';
import rightArrow from '../assest/about/rightArrow.png';
import AboutCards from './AboutCards';

const About = () => {
  const AboutCardData = [
    {
      id: 1,
      img: uiUx,
      heading: 'UI / UX Design',
      para: 'Our UI/UX Design services emphasize creating visually appealing, user-centered designs that enhance the overall user experience. By focusing on intuitive layouts, smooth navigation, and responsive design, we deliver digital products that are not only aesthetically pleasing but also easy to use. Through research-driven design processes, we ensure that our UI/UX solutions align with both business objectives and user needs, resulting in a seamless and engaging user journey.',
      arrow: rightArrow,
    },
    {
      id: 2,
      img: dev,
      heading: 'Web Development',
      para: 'We offer a comprehensive range of Web Development services, utilizing a diverse set of advanced technologies and methodologies. Our team specializes in creating responsive, scalable, and high-performance websites that cater to the unique needs of businesses. From front-end development using modern frameworks like React and Vue.js, to back-end solutions with Node.js and Python, we ensure seamless functionality and exceptional user experiences across all platforms.',
      arrow: rightArrow,
    },
    {
      id: 3,
      img: appDesign,
      heading: 'App Design',
      para: 'In Mobile Development, we focus on building native and cross-platform applications that provide optimal performance and user satisfaction. Our expertise in technologies like React Native, Flutter, Swift, and Kotlin enables us to deliver custom solutions for both iOS and Android. Whether developing mobile apps for startups or enterprises, we ensure your applications are scalable, secure, and intuitive, driving engagement and growth.',
      arrow: rightArrow,
    },
  ];
  const groupAboutCard = {
    right: [AboutCardData[0]],
    left: [AboutCardData[1], AboutCardData[2]],
  };
  return (
    <div className='about-parent'>
      <div className='about-outer'>
        <div className='about-right'>
          <div className='right'>
            {groupAboutCard.right.map((ele) => (
              <AboutCards
                key={ele.id}
                img={ele.img}
                heading={ele.heading}
                para={ele.para}
                arrow={ele.arrow}
              />
            ))}
          </div>
          <div className='left'>
            {groupAboutCard.left.map((ele) => (
              <AboutCards
                key={ele.id}
                img={ele.img}
                heading={ele.heading}
                para={ele.para}
                arrow={ele.arrow}
              />
            ))}
          </div>
        </div>
        <div className='about-left'>
          <div className='about-left-outer'>
            <p>
              <span className='basic-Info'>Basic info about company</span>
            </p>
            <h5>Digital Creator & Strategists</h5>
            <p className='about-para-top'>
            At our company, we specialize in crafting innovative digital strategies that drive results. Our team of digital creators and strategists work closely with clients to develop impactful, data driven solutions tailored to their business goals. We blend creativity with technology to create engaging and effective digital experiences that resonate with audiences.
            </p>
            <p className='about-para-bottom'>
            <span className='About-sired'>SiredBits</span>  is the probably the best place in EU to start a nearshore IT projects we share the European values and culture, we have a great IT infrastructure, we speak fluent English, we have a very good pool of IT engineers and we are easy to reach from any European country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
