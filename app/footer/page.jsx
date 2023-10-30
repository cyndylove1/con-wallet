import {FaGoogleWallet} from 'react-icons/fa6'
import {FaFacebookF} from "react-icons/fa6";
import {FaTwitter} from "react-icons/fa6";
import {FaLinkedinIn} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6"
export default function Footer (){
    return(
        <div>
            <div className='footer-section'>
                <div className='footer-container'>
                    <div className='logo2'>
                        <h2><span className='fa'><FaGoogleWallet/></span>HEYWALLET</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur  adipisicing elit. Eum doloremque, dolorem  assumenda labore animi aliquid?</p>
                        

                    </div>
                    <div className='footer-content'>
                        <h4>Socials</h4>
                        <h6>Josephineallard@gmail.com</h6>
                        <div className="social-footer"> 
                            <h5><FaFacebookF/></h5>
                            <h5><FaTwitter/></h5>
                            <h5><FaLinkedinIn/></h5>
                            <h5><FaInstagram/></h5>

                        </div>

                    </div>
                    <div className='quick-links'>
                    <h5>Quick Links</h5>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/About'>About</a></li>
                    <li><a href='/service'>Services</a></li>
                    <li><a href='/blog'>WhyUs</a></li>
                    <li><a href='/Team'>Team</a></li>
                    <li><a href='/Testimonial'>Testimonial</a></li>
                    <li><a href='/form'>Login</a></li>
                                                            
                    {/* <Link href="/form">
                        <button className='btn'>Login</button>
                    </Link>  */}
                        {/* <h5>Quick Links</h5>
                        <a href="/">Home</a>
                        <a href="/About">About</a>
                        <a href="/service">Service</a>
                        <a href="/blog">Why Us</a>
                        <a href="/Team">Team</a>
                        <a href="/Testimonial">Testimonial</a>
                        <a href="/form">Login</a> */}
                        {/* <h6>About</h6>
                        <h6>Service</h6>
                        <h6>Why Us</h6>
                        <h6>Team</h6>
                        <h6>Testimonial</h6>
                        <h6>Login</h6> */}

                        
                    </div>
                    <div className='location'>
                        <h5>Location & Contact</h5>
                        <p>2118 Thornridge Cir. Syracuse, <br/> Connecticut 35624 <br />(704) 555-0127</p>


                    </div>
                   

                </div>
                <p className='copy'>2022-2023  HeyWallet</p>
            </div>
        </div>
    )
        
    
}