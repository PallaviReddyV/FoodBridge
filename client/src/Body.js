/*{import React from 'react'
import './Style.css';
import { useNavigate } from 'react-router-dom';
import Bodynavbar from './Bodynavbar';
function Body() {

    const navigate = useNavigate();

  const handleNGO = () => {
    navigate('/Home');
  };
  const handleRest=()=>{
    navigate('/Home');
  }

  return (
    

  <div style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Bodynavbar />  
        
    <div className="bodybox" style={{flexDirection: 'column',alignItems: 'center',
     justifyContent: 'center'}}>
      <div className='heading' style={{position:'relative',left:'50px'}} >
          <h1 > Donate Food !! </h1>
      </div>
      
      <button className='btns' onClick={handleNGO}>
          NGO
      </button>
      <button className='btna'onClick={handleRest}>
           Restaurants
      </button>
    </div>
       
  </div>  
        
  )
}

export default Body
}*/
import React from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';
import Bodynavbar from './Bodynavbar';
import Footer from './Footer';

// Import your background image
import backgroundImage from './images/cover.jpeg';

function Body() {
  const navigate = useNavigate();

  const handleNGO = () => {
    navigate('/NgoHome');
  };

  const handleRest = () => {
    navigate('/ResHome');
  };

  return (
    <div>
      <Bodynavbar />
    <div
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Adjust the height as needed
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      
    <div
        className="bodybox"
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
         >
          

        <div className='heading'style={{ position:'relative',left:'150px'}} >
          <h1 style={{ background:'lightblue',width:'300px',color:'black'}}>Food For Life !!</h1>
        </div>

        <button className='btns' onClick={handleNGO}>
          NGO
        </button>
        <button className='btna' onClick={handleRest}>
          Restaurants
        </button>
      </div>
    </div>
    <Footer />
  </div>
   
  );
}

export default Body;
