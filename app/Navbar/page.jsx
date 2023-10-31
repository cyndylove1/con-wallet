'use client'
import {FaGoogleWallet} from 'react-icons/fa6'
import Link from 'next/link';
//  import { useState } from 'react'

export default function Navbar() {
    // const  [color, setColor] = useState(false)
    //  const changeColor = () =>{
    //     if(window.scrollY >= 90){
    //         setColor(true)
    //    }else{
    //         setColor(false)
    //     }

    //  }
    // window.addEventListener('scroll', changeColor)

    

    return(
        <header className>
            
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
                    

                    <li><a href='/'>Home</a></li>
                    <li><a href='/About'>About</a></li>
                    <li><a href='/service'>Services</a></li>
                    <li><a href='/blog'>WhyUs</a></li>
                    <li><a href='/Team'>Team</a></li>
                    <li><a href='/Testimonial'>Testimonial</a></li>
                                                            
                    <Link href="/form">
                        <button className='btn'>Login</button>
                    </Link>
                    
                </ul>

            </nav>



           
        
    </header> 
    
    )
}