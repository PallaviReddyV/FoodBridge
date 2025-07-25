import React from 'react'
import { Link } from 'react-router-dom'

const ResHome = () => {
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
                        
                        <Link to='/Resregister' className="btn-btn-pr">
                            Sign Up</Link>&nbsp;&nbsp;&nbsp;
                        <Link to='/Reslogin' className="btn-btn-success"> 
                            Sign In</Link>
                        
                </section>
            </center>
            
        </div>
        
    )
}

export default ResHome;


