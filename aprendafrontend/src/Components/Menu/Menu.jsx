import React from 'react';
import './index.css';  

const Menu = () => {
  return (
    <nav className="menu-nav">
      <ul className="menu-ul">
        <li className="menu-li"><a href="#home" className="menu-a">Home</a></li>
        <li className="menu-li"><a href="#about" className="menu-a">Sobre</a></li>
        <li className="menu-li"><a href="#services" className="menu-a">Serviços</a></li>
        <li className="menu-li"><a href="#contact" className="menu-a">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
