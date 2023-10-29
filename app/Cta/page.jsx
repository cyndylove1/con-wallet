import Image from "next/image"
import cta from "@/public/images/laptop.png"
export default function Cta (){
    return(
        <div>
            <div className="cta">
                <div className="cta-container">
                    <div className="cta-section">
                        <div className="cta-text">
                            <h4>You can securely store your cryptocurrency in Heywallet <br /> Crypto Wallet</h4>
                        </div>
                        <div className="cta-image"> 
                            <Image src={cta} className="cta-img"/>
                        </div>
                        <div className="cta-btn">
                            <button className="cta-btn2">Start use now</button>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}