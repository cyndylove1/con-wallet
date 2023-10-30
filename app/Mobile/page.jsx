'use client'
import '../styles.css'
import '../globals.css'
import {GrMenu} from 'react-icons/gr'
import {FaGoogleWallet} from 'react-icons/fa6'
import Link from 'next/link'
export default function Mobile() {
    return(
        <div>

        <main>
            <div><GrMenu/></div>
           
            
            <div className='logo1'>
                <h2><span className='fa'><FaGoogleWallet/></span>HEYWALLET</h2>

           </div>


           <nav class="mobile">
               <ul>
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
       
   </main> 

        </div>
    )
}