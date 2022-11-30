import React from 'react'
import profile from '../Components/profile.jpeg'
const About = () => {
  return (
    <>
     <div className='container about-container mb-5'>
     <div className='about-inner'>
       <div className='left'>
        <h2>Meet <span className='name'>Noman</span></h2>
        <p className='about-para'>Hello, I'am Noman Waseem. I'm Computer engineer.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aut placeat ab reiciendis repellat laborum magnam molestiae? Minus,
              similique. Iusto nostrum aliquam autem earum atque corporis eligendi a dicta,
              repudiandae necessitatibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
       </div>
       <div className='right'>
        <img src={profile} alt="" />
       </div>
     </div>

     </div>       
    </>
  )
}

export default About
