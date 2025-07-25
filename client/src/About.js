import React from 'react';
import backgroundImage from './images/about.png'; // Adjust the path

const About = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Set to the full height of the viewport
    margin: 0,       // Remove default margin
    padding: 0,      // Remove default padding
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      {/* Your content goes here */}
    </div>
  );
};

export default About;
