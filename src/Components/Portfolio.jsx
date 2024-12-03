import React from 'react'
import '../Css/portfolio.css'
import ios from '../assest/portfolio/ios.svg'
import android from '../assest/portfolio/android.svg'
import flutter from '../assest/portfolio/flutter.svg'
import kotlin from '../assest/portfolio/kotlin.svg'
import swift from '../assest/portfolio/swift.svg'
import xamarin from '../assest/portfolio/xamarin.svg'
import html from '../assest/portfolio/htmlCss.png'
import native from '../assest/portfolio/react-native.png'
import js from '../assest/portfolio/JS.png'
import bootstrap from '../assest/portfolio/bootstrap.png'
import react from '../assest/portfolio/react.png'
import angular from '../assest/portfolio/angular.png'
import node from '../assest/portfolio/node.png'
import c from '../assest/portfolio/C.png'
import cPlus from '../assest/portfolio/C++.png'
import python from '../assest/portfolio/python.png'

const Portfolio = () => {
  return (
    <div className="portfolio-parent">
        <div className="portfolio-outer">
        <div class="Section-4-contianer">
      <div class="S4-heading">
        <h1>Our Core Technologies</h1>
      </div>
      <div class="S4-technologies">
        <div class="S4-technologies-content">
          <h4 id="S4-mobile">Mobile</h4>
          <h4>Web</h4>
          <h4>Backend</h4>
          <h4>Frontend</h4>
          <h4>DataBase</h4>
          <h4>Cloud</h4>
          <h4>Graphic Design</h4>
          <h4>QA</h4>
        </div>
      </div>
    </div>
    <div class="s4-icons-div">
      <div class="s4-container">
        <div class="s4-box">
          <img src={ios} alt="" srcset="" />
          <p>IOS</p>
        </div>
        <div class="s4-box" id="android">
          <img src={android} alt="" srcset="" />
          <p>Android</p>
        </div>
        <div class="s4-box" id="native">
          <img src={native} alt="" srcset="" />
          <p>React Native</p>
        </div>
        <div class="s4-box"  id="flutter">
          <img src={flutter} />
          <p>Flutter</p>
        </div>
        <div class="s4-box"  id="kotlin">
          <img src={kotlin} />
          <p>kotlin</p>
        </div>
        <div class="s4-box">
          <img src={swift} />
          <p>Swift</p>
        </div>
        <div class="s4-box" id="html">
          <img src={html} />
          <p>HTML</p>
        </div>
        <div class="s4-box" id="js">
          <img src={js}/>
          <p>JS</p>
        </div>
        <div class="s4-box" id="bootstrap">
          <img src={bootstrap} />
          <p>Bootstrap</p>
        </div>
        <div class="s4-box" id="react">
          <img src={react} />
          <p>React</p>
        </div>
        <div class="s4-box" id="angular">
          <img src={angular} />
          <p>Angular</p>
        </div>
        <div class="s4-box" id="node">
          <img src={node} />
          <p>Node</p>
        </div>
        <div class="s4-box" id="c">
          <img src={c} />
          <p>C</p>
        </div>
        <div class="s4-box" id="cPlus">
          <img src={cPlus} />
          <p>C++</p>
        </div>
        <div class="s4-box" id="python">
          <img src={python} />
          <p>Python</p>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Portfolio