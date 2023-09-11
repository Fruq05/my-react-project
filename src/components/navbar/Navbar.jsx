import React from 'react'
import "./Nav.css"
const Navbar = () => {
  return (
    <nav>
        <div className='first'>
          <img src="./assets/schooled.jpeg" alt="" className='logo' />
          </div>
        <div className='second'>
            <a href="" className='links'>Home</a>
            <a href="#about" className='links'>About</a>
            <a href="#services" className='links'>Services</a>
            <a href="" className='links'>Testimonial</a>
            <a href="" className='links'>Contact</a>
        </div>
        <div className='third'>
            <i className="fa-solid fa-phone icon"></i>
            <i className="fa-solid fa-envelope icon"></i>
            <i className="fa-brands fa-github icon"></i>
            <i className="fa-brands fa-linkedin icon"></i>
        </div>
    </nav>
  )
}

export default Navbar