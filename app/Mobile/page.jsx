'use client'
import '../styles.css'
import '../globals.css'
import {GrMenu} from 'react-icons/gr'
import {FaGoogleWallet} from 'react-icons/fa6'
import Link from 'next/link'
export default function Mobile() {
    return(
        
        <main>
            

            <nav class="nav-mobile">
                <div class="nav-brand">
                    <div class="mobile-logo">
                        <i class="fa-regular fa-hand-lizard"></i>
                    </div>
                    <span>FoodPlug</span>
                </div>

                <div class="hamburger-container animate__animated animate__swing" onclick="addandremove()">
                    <div class="menu"></div>
                </div>
                <div class="mobile-links-container">
                    <div class="mobile-links-content">
                        <ul>
                            <a href="#"class="active-link"><li>home</li></a>
                            <a href="#aboutus"><li>about us</li></a>
                            <a href="#explorefoods"><li>explore foods</li></a>
                            <a href="#faq"><li>faq</li></a>
                        </ul>
                        <button class="btn">+1(090) 3402-3722</button>
                    </div>
        
        
                </div>
        
                </nav>
             
        </main>
        
    )
}