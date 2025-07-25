import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Body';
import NgoHome from './NgoHome';
import ResHome from './ResHome';
import Ngologin from './Ngologin';
import Ngoregister from './Ngoregister';
import Resregister from './Resregister';
import Reslogin from './Reslogin';
import About from './About';
import Contact from './Contact';
import Ngo from './Ngo';
import Restaurant from './Restaurant';
import DonationForm from './DonationForm';
import Thankyou from './Thankyou';
import Feedback from './Feedback';
import History from './History';
import Account from './Account';
import Track from './Track';


import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <ngonavbar />
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Body />}/>
          <Route path="/NgoHome" element={<NgoHome/>}/>
          <Route path="/ResHome" element={<ResHome/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Ngologin" element={<Ngologin/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Ngoregister" element={<Ngoregister/>}/>
          <Route path="/Resregister" element={<Resregister/>}/>
          <Route path="/Reslogin" element={<Reslogin />}/>
          <Route path="/Ngo" element={<Ngo />}/>
          <Route path="/Restaurant" element={<Restaurant />}/>
          <Route path="/DonationForm" element={<DonationForm />}/>
          <Route path="/Thankyou" element={<Thankyou/>}/>
          <Route path="/Feedback" element={<Feedback />}/>
          <Route path="/History" element={<History />}/>
          <Route path="/Account" element={<Account />}/>
          <Route path="/Track" element={<Track />}/>
          
          


          
         
        </Routes>
      </BrowserRouter>
    
    </div>
   
  );
}

export default App;
