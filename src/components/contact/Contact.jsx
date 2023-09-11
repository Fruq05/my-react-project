import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='container'>
        <h3>Contact Us</h3>
        <form action="">
        <label for="name">Name:</label>
            <input type="text" name="name" required className='ipt'/>

            <label for="email">Email:</label>
            <input type="email" name="email" required  className='ipt'/>

            <label for="message">Message:</label>
            <textarea id="message" name="message" required className='ipt'></textarea>

            <input type="submit" value="Submit" className='sub'/>
        </form>
    </div>
  )
}

export default Contact
