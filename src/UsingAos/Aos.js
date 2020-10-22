import React from 'react'
// import "./about.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// import undraw_nature from '.././undraw_nature.svg';
// ..
// import undraw_nature from '../u.';
import comp from './../images/comp.png';
import './../App.css';
import free from './../images/freeimg.jpg'

AOS.init();
const About = () => {
    return (
        <div className="main" id="about" style={{paddingTop:"10px"}}>
        <div className="skills-main-div">
        <div data-aos="flip-left" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
          <div className="skills-image-div" style={{marginTop:"20px", }}>
            <img alt="Loading" src={comp} style={{height:"250px", marginRight:"90%" , marginTop:"30px", marginLeft:"10px" }}/>
          </div>
        </div>
  
        <div data-aos="zoom" data-aos-duration="3000">
          <div className="skills-text-div">
            <h1 className="skills-heading" style={{color: "white"}}><b> Technology in 2020</b></h1>
            {/* <p className="Text" style={{color:"white"}}><b></b></p> */}
            <p className="subTitle" style={{color: "white", textAlign:"center", marginBottom:"30px", paddingBottom:"20px"}}>In 2020, emotion recognition and computer vision will scale and AI will have a breakout moment in manufacturing. U.S. startups Vicarious, Kindred, and Osaro stand out in using AI technologies for manufacturing. Kindred's technology is used to automate part of distribution for apparel brands such as GAP.</p>
            <p className="softwareSkil">
            
             
             
            </p>
            <div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }

export default About

