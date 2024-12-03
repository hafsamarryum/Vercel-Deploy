import React from 'react'
import '../Css/home.css'
import girl from '../../src/assest/home/girl.png'
import square from '../../src/assest/home/square.png'
import triangle from '../../src/assest/home/triangle.png'


const Home = () => {

  return (
    <div
      className="home-parent"
    >
      <div className="home-outer">
        <div className="home-left">
          <h1>
            Sired<span className="son">Bit's</span> Tech Innovation
          </h1>
          <p className="suffered-para">
            At Sired, we specialize in delivering Full-Stack Development services for both mobile and web apps, creating seamless, scalable, and high-performance solutions.  <span className="suffered">Our team  </span>  of expert developers excels in building responsive, user-friendly applications that cater to diverse business needs.
          </p>
          <div className="home-btn">Contact Us</div>
          {/* <div class="pulsating-circle"></div> */}
        </div>
        <div className="home-right">
          <div className="home-girl-wrapper">
            <img src={girl} alt="not found" />
          </div>
          <img className="home-square" src={square} alt="not found" />
          <img className="home-triangle" src={triangle} alt="not found" />
        </div>
        {/* <div class="container">
          <div class="circle"></div>
        </div> */}

      </div>
    </div>
  );
};

export default Home;
