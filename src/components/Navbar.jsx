import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Logo2.jpeg";  

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="La Taza Mágica" className="logo" />  
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/menu">Menú</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
};


export default Navbar;
