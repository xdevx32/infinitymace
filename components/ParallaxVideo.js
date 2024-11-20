// components/CustomParallax.js
import React from 'react';
import { Parallax, Background } from 'react-parallax';

export default function CustomParallax() {
  return (
    <Parallax strength={300}>
      <Background className="custom-bg">
        <img src="https://via.placeholder.com/1920x1080" alt="Custom Background" />
      </Background>
      <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          Parallax Effect Example
        </h1>
      </div>
    </Parallax>
  );
}
