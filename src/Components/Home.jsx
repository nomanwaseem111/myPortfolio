import React from 'react'
import Profile from '../Components/image2.png'
const Home = () => {
    return (
        <>
            <div className='container home_container'>
                <div className='parent'>
                    <div className='left_div'>
                        <h2 className='heading'>Hi all, I'm <span className='name'>Noman</span> 👋</h2>
                        <p className='para'>A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</p>
                        <div className='social'>
                            <a href="https://github.com/nomanwaseem111" target="_blank"><i class="fa-brands fa-github fs-1 socialLink"></i></a>
                            <a href="https://www.linkedin.com/in/noman-waseem-6b847b245/" target="_blank"><i class="fa-brands fa-linkedin fs-1 socialLink"></i></a>
                            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><i class="fa-solid fa-envelope fs-1 socialLink"></i></a>
                            <a href="https://www.facebook.com/noman.waseem.965/" target="_blank"><i class="fa-brands fa-facebook fs-1 socialLink"></i></a>
                        </div>

                     <button id='btn-1'>CONTACT ME</button>   <button id='btn-2'>SEE MY RESUME</button>

                    </div>
                    <div className='right_div'>
                        <img src={Profile} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
