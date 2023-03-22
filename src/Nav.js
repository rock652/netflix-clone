import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.addEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          alt=""
        />

        <img
          className="nav__avatar"
          src="https://tse3.mm.bing.net/th?id=OIP.gAoBZTchuV06h2zGCGTsPgAAAA&pid=Api&P=0"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
