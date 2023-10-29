 import Image from "next/image"
 import about from '@/public/images/hey wallet.png';
 import {TbBinaryTree2} from "react-icons/tb"
import {TbBiohazard} from "react-icons/tb"
import {TbAssembly} from "react-icons/tb"
import {TbAsterisk} from "react-icons/tb"
import {TbAward} from "react-icons/tb"
import {TbBadgeFilled} from "react-icons/tb"



 export default function About () {
    return(
        <div>
            <div className="about">
                <div className="about-us">
                    <h2>HeyWallet Features</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Esse, autem.</p>
                </div>
                <div className="about-container">

                    <div className="about-img">
                        <Image src={about} alt="heywallet image"  className="img5"/>
                    </div>
                    
                <div className="about-section">
                    <div className="about-text">
                        <div className="about-info">
                            <div className="icon">
                                <h2><TbBinaryTree2/></h2>
                            </div>
                            <div className="content">
                                <h5>Non-custodial</h5>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime  sint blanditiis eos alias?</h6>
                                

                            </div>

                            

                        </div>
                        <div className="about-info">
                            <div className="icon">
                                <h2><TbBiohazard/></h2>
                            </div>
                            <div className="content">
                                <h5>HeyWallet</h5>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime sint blanditiis eos alias?</h6>


                            </div>

                            

                        </div>
                        <div className="about-info">
                            <div className="icon">
                                <h2><TbAssembly/></h2>
                            </div>
                            <div className="content">
                                <h5>Exchange</h5>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime sint blanditiis eos alias?</h6>


                            </div>

                            

                        </div>
                    </div>
                </div>
                <div className="about-section2">
                    <div className="about-content">
                        <div className="about-info">
                            <div className="icon">
                                <h2><TbAsterisk/></h2>
                            </div>
                            <div className="content">
                                <h5>Adding Money</h5>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime sint blanditiis eos alias?</h6>
                                 
                                

                            </div>

                            

                        </div>
                        <div className="about-info">
                            <div className="icon">
                                <h2><TbBadgeFilled/></h2>
                            </div>
                            <div className="content">
                                <h5>Trade from Wallet</h5>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime sint blanditiis eos alias?</h6>


                            </div>

                            

                        </div>
                        <div className="about-info">
                            <div className="icon">
                                <h2><TbAward/></h2>
                            </div>
                            <div className="content">
                                <h5>Earn from Wallet</h5>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime sint blanditiis eos alias?</h6>


                            </div>

                            

                        </div>
                    </div>
                </div>
               
                    

                    



                </div>
                
            </div>
               
        
        </div>
    )
}