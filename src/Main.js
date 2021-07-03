import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import LeftSection from './components/leftSection';
import Navigation from './components/navigation';
import Overview from './components/overviewsection/overview';

function Mains() {
  return (
    <div>
     <Navbar />
     <LeftSection />
      <Navigation />
      <Overview />
    </div>
  );
}

export default Mains;
