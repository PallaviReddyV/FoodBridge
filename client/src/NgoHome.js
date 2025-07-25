import React from 'react'
import { Link } from 'react-router-dom'

const NgoHome = () => {
    return (
        <div>
            <center>

                {/* <Logo /> */}
                
               
                <section  style={{"marginTop":"170px"}}>
                    
                        <h1 >Food For Life</h1>
                          <p >
                          Lets Donate Food!
                            give a life to needy!!
                        </p>
                        
                        <Link to='/Ngoregister' className="btn-btn-pr">
                            Sign Up</Link>&nbsp;&nbsp;&nbsp;
                        <Link to='/Ngologin' className="btn-btn-success"> 
                            Sign In</Link>
                        
                </section>
            </center>
            
        </div>
        
    )
}

export default NgoHome;


