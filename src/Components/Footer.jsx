import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='footer-background'>
                <div className='footer'>
                    <div className='footer-child1'>
                        <h1 className='contact'>Contact Us</h1>
                        <form>
                            <label className='label-name'>Your Name</label><br />
                            <input type="text" className='input_field' /><br />
                            <label className='label-name'>Your Email</label><br />
                            <input type="email" className='input_field' /><br />
                            <label className='label-name'>Subject</label><br />
                            <input type="text" className='input_field' /><br />
                            <label className='label-name '>Your Message (optional)</label><br />
                            <textarea name="" className='input_field' id="" cols="30" rows="10"></textarea><br />
                            <button className='submitBtn ' type='submit' >Submit</button>
                        </form>
                    </div>

                    <div className='footer-child2'>
                        <div id='footer-s'>
                            <h3 className='contact-details'>Contact Details</h3>
                            <p className='address_para'>194-N, P.E.C.H.S Block 2 PECHS, Karachi, Pakistan</p>

                            <p className='num'>(021) 37447307</p>
                            <a href="" id='send'>info@techmatterglobal.com</a>

                            <div className='parent-9'>
                                <span><i class="fa-brands fa-facebook fs-2"></i></span>
                                <span><i class="fa-brands fa-square-twitter fs-2"></i></span>
                                <span><i class="fa-brands fa-square-instagram fs-2"></i></span>
                                <span><i class="fa-brands fa-linkedin fs-2"></i></span>
                            </div>

                            <h5 className='quick-links'>QUICK LINKS</h5>
                            <div className='parent-10'>
                                <a href="" className='page-link'>IT Solutions</a><br />
                                <a href="" className='page-link'>Software Developement</a><br />
                                <a href="" className='page-link'>Medical Billing Services</a><br />
                                <a href="" className='page-link'>Credentialing Services</a><br />
                                <a href="" className='page-link'>SEO Services</a><br />

                                <a href="" className='page-link'>Pay Per Click</a><br />
                            </div>
                        </div>
                    </div>

                    <div className='footer-child3'>
                    
                        <h3 className='direction'>DIRECTIONS</h3>
                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0094933385203!2d67.05912091409715!3d24.86352535126005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3395a5ca43%3A0xbb199abfe2db29e!2sTech%20Matter%20(Pvt)%20Ltd.!5e0!3m2!1sen!2s!4v1670027099671!5m2!1sen!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer