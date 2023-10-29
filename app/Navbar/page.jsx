'use client'
import {FaGoogleWallet} from 'react-icons/fa6'
import Link from 'next/link';
 import { useState } from 'react'

export default function Navbar() {
    const  [color, setColor] = useState(false)
     const changeColor = () =>{
        if(window.scrollY >= 90){
            setColor(true)
       }else{
            setColor(false)
        }

     }
    window.addEventListener('scroll', changeColor)

    

    return(
        <header className={color ? 'header' : 'header'}>
            
             <div className='logo'>
                 <h2><span className='fa'><FaGoogleWallet/></span>HEYWALLET</h2>

            </div>


            <nav class="navbar">
                <ul>
                    {/* <Link href="/">Home</Link>
                    <Link href="/About">About</Link>
                    <Link href="/service">Services</Link>
                    <Link href="/blog">WhyUs</Link>
                    <Link href="/Team">Team</Link>
                    <Link href="/Testimonial">Testimonial</Link> */}
                    

                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>WhyUs</a></li>
                    <li><a href='#'>Team</a></li>
                    <li><a href='#'>Testimonial</a></li>
                                                            
                    <Link href="/form">
                        <button className='btn'>Login</button>
                    </Link>
                    
                </ul>

            </nav>



            <nav>
            
            <div class="nav-mobile">
                <div class="nav brand">
                    <div class="logo1">
                    <h2><span className='fa1'><FaGoogleWallet/></span>HEYWALLET</h2>
                       
        
                    </div>
                </div>
                    <div class="hamburger-container animate__rotateOut" onclick="addandremove()">
                        <div class="menu"></div>
                    </div>
                    <div class="mobile-container">
                        <div class="mobile-links">
                            <ul>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>About</a></li>
                                <li><a href='#'>Services</a></li>
                                <li><a href='#'>WhyUs</a></li>
                                <li><a href='#'>Team</a></li>
                                <li><a href='#'>Testimonial</a></li>
                                
                            </ul>

                        </div>
                        

                    </div>

                    

                
            </div>
        </nav>
                
        
    </header> 
    
    )
}