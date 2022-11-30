import React from 'react'

const Footer = () => {
 
 const year = new Date().getFullYear()
 
  return (
    <>
      <div className='footer-background pt-4 '>
        <div className='d-flex justify-content-around align-items-center flex-wrap'>
          <div className='div-1'>
            <h4 className='text-white text-center'>Noman Waseem</h4>
            <p className='text-white text-center'> @ {year} Noman Waseem All rights Reserved</p>
            <div className='d-flex justify-content-around align-items-center '>
              <a href="https://github.com/nomanwaseem111" target="_blank"><i class="fa-brands fa-github fs-4  socialLink"></i></a>
              <a href="https://www.linkedin.com/in/noman-waseem-6b847b245/" target="_blank"><i class="fa-brands fa-linkedin fs-4 socialLink"></i></a>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><i class="fa-regular fa-envelope fs-4"></i></a>
              <a href="https://www.facebook.com/noman.waseem.965/" target="_blank"><i class="fa-brands fa-facebook fs-4 socialLink"></i></a>
            </div>
          </div>
          <div className='div-2'>
            <h2 className='text-white text-center'>Get in Touch</h2>
            <p className='text-white text-center'>nomanwaseem@gmail.com</p>
            <p className='text-white text-center'>0312-2833671</p>
          </div>
          <div className='div-3'>
            <h2 className='text-white'>About</h2>
            <h4 className='text-white'>Resume</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
