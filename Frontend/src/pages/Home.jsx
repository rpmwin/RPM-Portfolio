import React from 'react';
import './Home.css';
import HeroHeader from '../Components/HeroHeader';
import HeroAbout from '../Components/HeroAbout';

function Home() {
  
  return (
    <div className=" ">
      <HeroHeader />
      <HeroAbout />
    </div>
  );
}

export default Home;
