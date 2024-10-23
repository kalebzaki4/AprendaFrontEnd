import React from 'react';
import './index.css';  
import Logo from "../../assets/React-Logo.png"

const Menu = () => {
  return (
    <nav className="menu-nav">
      <div className="menu-logo">
        <a href="#home" className="menu-a">
          <img width={50} src={Logo} alt="Logo" />
        </a>
      </div>
      <ul className="menu-ul">
        <li className="menu-li"><a href="#workshops" className="menu-a">Workshops</a></li>
        <li className="menu-li"><a href="#miniprojetos" className="menu-a">Mini Projetos</a></li>
        <li className="menu-li"><a href="#trilhas" className="menu-a">Trilhas</a></li>
        <li className="menu-li"><a href="#pro" className="menu-a" style={{color: '#facc15', border: '1px solid #facc15', padding: '5px 10px', borderRadius: '5px'}}>Seja PRO</a></li>
      </ul>
      <button className="toggle-button">
        Login →
      </button>
    </nav>
  );
};

export default Menu;
