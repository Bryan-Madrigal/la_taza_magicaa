import React from "react";
import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTruck, FaHeadset, FaStar, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      
      <div className="footer-content">

       
        <div className="footer-section">
            <div className= "footer-contacto">
          <h3>Contáctanos</h3>
          <p><FaMapMarkerAlt /> Av. Central Poniente, Núm. 961 entre 8va y 9na Pte., Colonia Centro</p>
          <p><FaPhone /> 961 154 2067</p>
          <p><FaEnvelope /> divinocielocafe@franquiciasmagno.com</p>
          </div>
        </div>

   
        <div className="footer-section">
          <h3>Menú Principal</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

      
        <div className="footer-section about">
          <h3>Sobre Nosotros</h3>
          <p>
            Nos dedicamos a la producción de café de muy alta calidad, aplicando siempre nuestros valores, 
            desde cada cultivador e integrante de la empresa, originando una pasión y dedicación al arte de la cosecha. 
            Esto se refleja en que nuestro producto compita con cualquiera del mundo.
          </p>
        </div>
      </div>

      {/* Sección Iconos de servicios */}
      <div className="footer-services">
        <div className="service-item">
          <FaTruck className="icon" />
          <p>Envíos seguros<br />A todo el país</p>
        </div>
        <div className="service-item">
          <FaHeadset className="icon" />
          <p>Atención personalizada<br />Por teléfono o correo</p>
        </div>
        <div className="service-item">
          <FaStar className="icon" />
          <p>Alta calidad<br />Productos premium</p>
        </div>
        <div className="service-item">
          <FaClock className="icon" />
          <p>Siempre disponibles<br />Soporte continuo</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>Copyright © La Taza Mágica – Todos los derechos reservados</p>
      </div>

    </footer>
  );
};

export default Footer;
