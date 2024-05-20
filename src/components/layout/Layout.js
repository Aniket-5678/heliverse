import React from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import "../style/style.css"
import ParticlesComponent from '../particle/Particle'



const Layout = ({children}) => {
  return (
    <div className='layout-container'>
      <ParticlesComponent/>
    <Header/>
   
   <main>
    {children}
   </main>
    <Footer/>
    </div>
  )
}

export default Layout