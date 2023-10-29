'use client'
import '../styles.css'
import '../globals.css'
 import Navbar from '../Navbar/page'
 export default function Sign (){
    return(
        <div>
            <Navbar/>
            <div className="Sign-up">
                <div className="title">
                    <div className="Sign-title">
                        <h4>HeyWallet - Register</h4>

                    </div>
                    <div className="member">
                        <h6>Already a member - <span><a href="./form">Login</a></span></h6>

                    </div>
                    
                </div>
               
                <div className="Sign-page">
                    <form action="" className="Sign">
                        <label htmlFor="first" className="sign-label" >FirstName</label> 
                        <input type="text" className="sign-input"/>
                        <label htmlFor="last" className="sign-label">LastName</label> 
                        <input type="text" className="sign-input"/> <br />
                        <label htmlFor="email" className="sign-label">Email</label> 
                        <input type="text" className="sign-input"/>
                        <label htmlFor="mobile" className="sign-label">Mobile</label>
                        <input type="number" className="sign-input"/><br />

                        <label htmlFor="identification Type" className="sign-label">Identification Type</label>
                        
                        <select className="select">
                            <option value="">National ID</option>
                            <option value="">Driver's Lisence</option>
                        </select>

                        <label htmlFor="identification number" className="sign-label">identification number</label>
                        <input type="number" className="select" /> 
                        <label htmlFor="Address" className="sign-label">Address</label> <br />
                        <input type="text" className="address" />  <br/>
                        <label htmlFor="password" className="sign-label">Password</label> 
                        <input type="password" className="select" />
                        <label htmlFor="Confirm" className="sign-label">Confirm Password</label>
                        <input type="password" className="select"/> 

                        <button className="register">Register</button>
                        
                    </form>

                    
                    
                </div>
                
            </div>
        </div>
    )
}