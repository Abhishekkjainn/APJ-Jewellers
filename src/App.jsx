import { useState } from 'react';
import './App.css';
import Marquee from 'react-fast-marquee'; // ✅ import the component

function App() {
  const goldRate = 3500;

  return (
    <>
      <div className="carousel">
        <Marquee autoFill={true} speed={45} className="goldratemarquee">
          Today's Gold Rate - {goldRate}/gm &nbsp;&nbsp;&nbsp;{' '}
          <div className="carouselcircle"></div> &nbsp;&nbsp;&nbsp;
        </Marquee>
      </div>
      <div className="header">
        <img src="/amarsonslogo.png" alt="Amar Sons" className="logo" />
        <img src="/menu.png" alt="Menu" className="menu" />
      </div>
    </>
  );
}

export default App;
