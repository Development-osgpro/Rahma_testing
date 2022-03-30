import React from 'react'
import RahmaLogo from '../Assets/images/rahmaLogo.png'

const Footer = () => {

    var year = new Date().getFullYear()

    return (
        <>
            <div className="Footer">
                <div className='container'>
                    <div className='footer-children'>
                        <div className='usful-links'>
                            <ul>
                                <li>Home</li>
                                <li>Our Work</li>
                                <li>Where We Work</li>
                                <li>News</li>
                                <li>Programs</li>
                                <li>About Us</li>
                            </ul>
                        </div>

                        <div className='contact'>
                            <h5>Contact</h5>
                            <br />
                            <a href="mailto:info@rahmaww.org" rel='noopener noreferrer'>
                                <i className="fa-solid fa-envelope"></i> info@rahmaww.org</a>
                            <br />
                            <a href="tel:+2485663111" rel='noopener noreferrer'>
                                <i className="fa-solid fa-phone-volume"></i> +(248) 566 3111</a>
                            <br />
                            <a href="https://www.google.ru/maps/place/Google+Building+41,+Mountain+View,+CA+94043,+USA/@37.4224082,-122.0877973,17z/data=!3m1!4b1!4m5!3m4!1s0x808fba02f3d60bc5:0x6bc3b76cb42de9de!8m2!3d37.4224082!4d-122.0856086" rel='noopener noreferrer'>
                                <i className="fa-solid fa-location-dot"></i> 31333 Southfield Rd. STE 100
                                Beverly Hills, MI 48025
                            </a>
                        </div>

                        <div className='rahma-message'>
                            <img src={RahmaLogo} alt="Rahma Logo" />
                            <h5>We’d love to hear from you.</h5>
                            <h5>Just choose the most convenient method and
                                we’ll get back to you as soon as we can.</h5>
                            <h5>Rahma Worldwide is a 501 (c) (3)
                                Nonprofit Organization (Tax ID 47-1304361)</h5>
                            <h5>View IRS Letter</h5>
                            <div className='social-icons'>
                                <a href='https://www.facebook.com/RahmaWorldwide/' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-facebook-f"></i></a>
                                <a href='https://www.instagram.com/rahmaworldwide/' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-instagram"></i></a>
                                <a href='https://twitter.com/rahmaworldwide' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-twitter"></i></a>
                                <a href='https://www.youtube.com/c/RahmaWorldwide' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className='footer-sign-up'>
                        <h2>Sign up for our Newsletter</h2>
                        <form>
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <input type="submit" placeholder='Subscribe' />
                        </form>
                    </div>
                </div>
            </div>

            <div className='copyright'>
                <p>Copyright © {year} Rahma Worldwide, All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer