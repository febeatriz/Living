import React from 'react';
import '../App.css';
import './MainSection.css';

function MainSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/mainHD.mp4' autoPlay loop muted />
      <h1>
        <span className="living-background">Living</span>
      </h1>
      <p>Mais que imóveis, projeto de vida!</p>
    </div>
  );
}

export default MainSection;