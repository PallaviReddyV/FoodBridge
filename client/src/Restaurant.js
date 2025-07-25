/*{import React from "react";

import Resnavbar from "./Resnavbar";
import Footer from "./Footer";

const Restaurant=()=>{
return(
<div className="mainRes">
<Resnavbar />
<h1>
    hiii 
    
</h1>
<Footer />
</div>
);
}
export default Restaurant;
}*/

/*{import React from "react";
import Resnavbar from "./Resnavbar";
import Footer from "./Footer";

import backgroundImage from './images/cover.jpeg';

const Restaurant = () => {
  const mainResStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
  };

  const quoteBoxStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '10px',
  };

  const quoteTextStyle = {
    fontStyle: 'italic',
    fontSize: '18px',
  };

  return (
    <div style={mainResStyle}>
      <Resnavbar />
      <h1>hiii</h1>
      <div style={quoteBoxStyle}>
        <p style={quoteTextStyle}>
          "THERE ARE PEOPLE IN THE WORLD SO HUNGRY, THAT GOD CANNOT APPEAR TO THEM EXCEPT IN THE FORM OF FOOD"
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Restaurant;
}*/

/*{
import React from "react";
import Resnavbar from "./Resnavbar";
import Footer from "./Footer";

import backgroundImage from './images/contact.jpeg';

const Restaurant = () => {
  // Adjusting the main style to fill the page and position items
  const mainResStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Ensure it covers the full height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Adjusted for space distribution
    color: 'white',
    textAlign: 'center',
  };

  const contentStyle = {
    flexGrow: 1, // Allows the content to fill available space, pushing the footer down
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center the quote box vertically
    alignItems: 'center', // Center the quote box horizontally
  };

  const quoteBoxStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px 0', // Ensure some space around the quote box
  };

  const quoteTextStyle = {
    fontStyle: 'italic',
    fontSize: '18px',
  };

  return (
    <div style={mainResStyle}>
      <Resnavbar />
      <div style={contentStyle}>
        
        <div style={quoteBoxStyle}>
          <p style={quoteTextStyle}>
            "THERE ARE PEOPLE IN THE WORLD SO HUNGRY, THAT GOD CANNOT APPEAR TO THEM EXCEPT IN THE FORM OF FOOD"
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Restaurant;
}*/

import React from "react";
import Resnavbar from "./Resnavbar";
import Footer from "./Footer";
import backgroundImage from './images/contact.jpeg';

const Restaurant = () => {
  const mainResStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Change to 'height' to ensure it covers exactly the viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'white',
    textAlign: 'center',
  };

  const contentStyle = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const quoteBoxStyle = {
    backgroundColor: '#ADD8E6', // Light blue with some transparency for contrast
    padding: '20px',
    borderRadius: '10px',
    margin: '20px 0',
  };

  const quoteTextStyle = {
    fontStyle: 'italic',
    fontSize: '18px',
    color:'black',
  };

  return (
    <>
      <div style={mainResStyle}>
        <Resnavbar />
        <div style={contentStyle}>
          <div style={quoteBoxStyle}>
            <p style={quoteTextStyle}>
              "THERE ARE PEOPLE IN THE WORLD SO HUNGRY, THAT GOD CANNOT APPEAR TO THEM EXCEPT IN THE FORM OF FOOD"
            </p>
          </div>
        </div>
        {/* Removed Footer from here */}
      </div>
      {/* Footer is now outside the mainResStyle div */}
      <Footer />
    </>
  );
};

export default Restaurant;

