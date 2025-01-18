import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Logo/ispoc.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <a href='#/home' className='navbar-logo'>
          <img src={logo} alt="Logo" />
        </a>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <div className="navbar-line">
            <a href="#bibliotecas">Bibliotecas</a>
            <a href="#ispoc-dit">ISPOC DIT</a>
            <a href="#e-servicos">E-Serviços</a>
            <a href="#loja-online">Loja Online</a>
          </div>
          <div className="navbar-line">
            <a href="#o-ispoc" className="navbar-line-two">O ISPOC</a>
            <a href="#ensino" className="navbar-line-two">Ensino</a>
            <a href="#pesquisa-inovacao" className="navbar-line-two">Pesquisa e Inovação</a>
            <a href="#contacto" className="navbar-line-two">Contacto</a>
            <input type="text" placeholder="Pesquisar..." />
          </div>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
