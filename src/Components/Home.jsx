import React from 'react'
import '../Css/home.css'
import girl from '../../src/assest/home/girl.png'
import square from '../../src/assest/home/square.png'
import triangle from '../../src/assest/home/triangle.png'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <div
      className="home-parent"
    >
      <div className="home-outer">
        <div className="home-left">
          <h1 className='home-h1'>
            Sired<span className="son">Bits</span> Tech Innovation
          </h1>
          <p className="suffered-para">
            At SiredBits, we specialize in delivering Full-Stack Development services for Mobile, Web Applications, UI/UX, AI, DevOps, and SaaS frameworks  creating seamless, scalable, and high-performance solutions. <span className="suffered">Our team of expert </span>developers excels in building responsive, user-friendly applications that cater to diverse business needs.
          </p>
          <Link to='/ContactUs' className="custom-link" >
          <div className="home-btn">Contact Us</div>
          </Link>
        </div>
        <div className="home-right">
          <div className="home-girl-wrapper">
            <img src={girl} alt="not found" />
          </div>
          <img className="home-square" src={square} alt="not found" />
          <img className="home-triangle" src={triangle} alt="not found" />
        </div>
      </div>
    </div>
  );
};

export default Home;
