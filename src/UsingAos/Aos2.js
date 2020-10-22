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
import picture from './../images/picture.png'
import Typewriter from 'typewriter-effect';

AOS.init();
const About2 = () => {
    return (
        <div className="main2" id="about" style={{paddingTop:"30px"}}>
        <div className="skills-main-div">
        <div data-aos="flip-up" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
          <div className="skills-image-div" style={{marginTop:"20px", }}>
            <img alt="Loading" src={picture} style={{height:"250px", marginRight:"90%" , marginTop:"10px", marginLeft:"10px"}}/>
          </div>
        </div>
  
        <div data-aos="flip-down" data-aos-duration="3000">
          <div className="skills-text-div">
            <h1 className="skills-heading" style={{paddingBottom:'30px'}}> <Typewriter
   options={{
     strings: ['Major Impact of Social Media'],
     autoStart: true,
     loop: true,
   }}
 /> </h1>






            {/* <p className="Text"><b>How mobile phones are impactiong our lives in 2020 </b></p> */}
            <p className="subTitle" style={{color: "white", textAlign:"center"}}><b>Social media can be very influential on society in both positive and negative ways. It gives people a way to stay in touch with people who live far away. It lets people share fun, interesting and informative content. It gives businesses a way to engage with customers</b></p>
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

export default About2

