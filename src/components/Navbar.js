import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll) {
        setIsNavbarVisible(false); // Esconde a navbar ao rolar para baixo
      } else {
        setIsNavbarVisible(true); // Mostra a navbar ao rolar para cima
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isNavbarVisible ? "" : "hidden"}`}>
      <div className="navbar-logo">
        <NavLink to="/" end>
          <img src="/logo.png" alt="Logo" />
        </NavLink>
      </div>

      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Página Inicial
          </NavLink>
        </li>
        <li>
          <NavLink to="/empreendimentos" className={({ isActive }) => (isActive ? "active" : "")}>
            Empreendimentos
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre" className={({ isActive }) => (isActive ? "active" : "")}>
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/cliente" className={({ isActive }) => (isActive ? "active" : "")}>
            Já sou cliente
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;