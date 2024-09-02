import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-background">
      <video className="background-video" autoPlay loop muted>
        <source src="https://cdn.pixabay.com/video/2022/03/31/112453-694704541_large.mp4" type="video/mp4" />
      </video>
      <div className="home-container">
        <h1 className="home-title">¡Bienvenido!</h1>
        <p className="home-description">
          Este es el proyecto 12 para ThePowerMBA: Un <span className="highlight">hub de juegos</span> desarrollado en React.js
        </p>
      </div>
    </div>
  );
}

export default Home;

