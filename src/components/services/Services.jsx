import React from 'react'
import "./services.css"

const Services = () => {
  return (
    <div className='services' id='services'>
        <h3 className='servicesh'>services</h3>
        <div className="servicecontent">
    <div className='servicebox'>
            <img src="./assets/frontend.webp" alt="" className='serviceimg'/>
            <p className='servicetext'>Frontend</p>
    </div>
    <div className='servicebox'>
        <img src="./assets/backend.jpeg" alt="" className='serviceimg'/>
            <p className='servicetext'>Backend</p>
    </div>
    <div className='servicebox'>
        <img src="./assets/UI.jpeg" alt="" className='serviceimg'/>
            <p className='servicetext'>UI/UX</p>
    </div>
    <div className='servicebox'>
        <img src="./assets/data.jpeg" alt="" className='serviceimg'/>
            <p className='servicetext'>Data Science</p>
    </div>
        <div className='servicebox'>
        <img src="./assets/mobile.jpeg" alt="" className='serviceimg'/>
            <p className='servicetext'>Mobile Development</p>
    </div>
    <div className='servicebox'>
        <img src="./assets/Digital.jpeg" alt="" className='serviceimg'/>
            <p className='servicetext'>Digital Marketing</p>
    </div>
        </div>
    </div>
  )
}

export default Services