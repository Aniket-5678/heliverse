import React from "react";
import Layout from "../layout/Layout";
import motionLogoImage from "../images/motionlogo.png";
import "../style/style.css";
import navLogo from "../images/navlogo.png";
import ratingLogo from "../images/rating.png";
import crating from "../images/cratinglogo.png";
import Wlogo from "../images/wlogo.png";
import magicStick from "../images/magicstick.png"
import section from "../images/section.png"
import sectionPage from '../images/sectionpage.png'
import browserLogo from "../images/browser.png"
import light from "../images/light.png"
import moon from "../images/moon.png"
import thumb from "../images/thumb.png"
import Fade from 'react-reveal/Fade'

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <div className="purschase-now-main">
          <div className="motion-image">
            <img src={motionLogoImage} alt="motion-effect" />
          </div>

          <div>
            <button className="home-btn">purchase Now</button>
          </div>
        </div>

        <div className="tranform-main">
          <div className="transform-content">
            <div>
              <h3>Transform </h3>
              <h3>Your Website</h3>
            </div>
            <div className="transform-text">
              <h4>With Motion </h4>
              <h4>Art Effect</h4>
            </div>
          </div>
          <div className="tranform-side-main">
            <div>
              <h1>Attract Your Visitors </h1>
              <h1>Attention With Colorful</h1>
            </div>
            <div>
              <h2 className="motion-text">Motion Art Effect</h2>
            </div>
            <div className="parah-main">
              <p className="parah">
                Unleash the power of creativity with Motion Art for Elementor -
                your ultimate solution
              </p>
              <p>
                for seamlessly integrating captivating animations into your
                website.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="rating-main">
          <div>
            <h3 className="rating-text">
              Trusted by thousands of users around the world
            </h3>
          </div>

          <div className="rating-image-main">
            <Fade left>
            <div className="rating-logo">
              <div>
                <img src={navLogo} alt="rating-logo" />
              </div>
              <div className="rating-logo-content">
                <img src={ratingLogo} alt="logo" />
                <h3>4.5 Score, 9 Reviews</h3>
              </div>
            </div>
            <div className="rating-logo">
              <div>
                <img src={crating} alt="rating-logo" />
              </div>
              <div className="rating-logo-content">
                <img src={ratingLogo} alt="logo" />
                <h3>4.5 Score, 9 Reviews</h3>
              </div>
            </div>
            <div className="rating-logo">
              <div>
                <img src={Wlogo} alt="rating-logo" />
              </div>
              <div className="rating-logo-content">
                <img src={ratingLogo} alt="logo" />
                <h3>4.5 Score, 9 Reviews</h3>
              </div>
            </div>
            </Fade>
          </div>
          
        </div>

        <div className="colormagic-main">

          <div className="color-start-content">
             <div className="start-content">
                <h2>Turn Your Cursor Into A Colorful Magic</h2>
                <h2>Wand & Charm Your Visitors</h2>
             </div>
             <div className="start-second">
              <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse</p>
              <p>your website with visually stunning motion art elements.</p>
             </div>
             <div className="start-third">
              <button>Purchase From Envato</button>
             </div>
          </div>

          <div className="magicstick-logo">
         <img src={magicStick} alt='magic-stick' />
          </div>
         

        </div>

      <div className="section-main">
          <div className="section-heading" >
            <h2>Apply On Any Section Or Enable For</h2>
            <h2>Whole Page</h2>
          </div>
        
        <div className="section-content-main">
          <Fade left>
          <div className="section-box">
               <h3>Apply On Section</h3>
               <p>Apply on section is a game-changer, offering an unparalleled way to</p>
               <p>manage applications directly from your website</p>
               <img src={section} alt="section"/> 
            
          </div>
          <div className="section-box2">
          <h3>Apply On Page</h3>
               <p>Take your website to new heights with Motion Art for Elementor.</p>
               <p>Embrace the power of motion and animation.</p>
               <img src={sectionPage} alt="section"/> 
          </div>
          </Fade>

 </div>

    
      </div>
      

      <div className="popularbrowser-main">
           <div className="broswer-box">
           <div className="browser-content">
               <h3>Supported by All Popular Browsers</h3>
               <p>Rest assured, Motion Art is designed to be compatible</p>
               <p>with all major web browsers.</p>
           </div>
              
              <div className="broswer-logo-main">
              <img src={browserLogo} alt="browser" />
              </div>

           </div>
           
      </div>

        
      <div className="powerful-features-main">

        <div className="features-start">
          <h1>An All-Round Plugin With Powerful</h1>
          <h1>Features</h1>
          <p>Whether you're a seasoned web designer or just starting out, Motion Art for</p>
          <p>Elementor seamlessly integrates with the Elementor platform, providing you</p>
          <p>with a seamless and intuitive experience.</p>
        </div>
         
         <div className="features-end">
              <Fade left>
              <div className="featuresbox">
                   <img src={light}  alt="light"/>
                   <h2>Light Weight</h2>
                   <p>Motion Art for Elementor is designed to be</p>
                   <p>lightweight.</p>
              </div>
              <div className="featuresbox">
                   <img src={moon}  alt="light"/>
                   <h2>100% Responsive</h2>
                   <p>Create a consistent visual experience</p>
                   <p>across all devices.</p>
              </div>

              <div className="featuresbox">
                   <img src={thumb}  alt="light"/>
                   <h2>User Friendly Interface</h2>
                   <p>Ensure a smooth experience for both</p>
                   <p>applicants and administrators.</p>
              </div>
              </Fade>
         </div>
      

      </div>


      </div>
    </Layout>
  );
};

export default Home;
