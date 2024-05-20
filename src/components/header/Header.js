import React from 'react'
import {Link} from "react-router-dom"
import navLogoImage from "../images/navlogo.png"
import "../style/style.css"

const Header = () => {
  return (
    <div className='nav-container'>
        <nav className='nav-main'>
          <div>
          <Link className='nav-link' to='/'><img src={navLogoImage} height={"40px"} alt='logo'/>envato <span className="green-text">Market</span></Link>
          </div>
          

           <div className='nav-btn-main'>
            <button className='buy-btn'>Buy Now</button>
           </div>
          
        </nav>
      
    </div>
  )
}

export default Header