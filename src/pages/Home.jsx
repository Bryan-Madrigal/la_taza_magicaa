import React from "react";
import "./Home.css";
import imagenFondo from '../assets/Home3.jpg';
import { FaCoffee } from "react-icons/fa"; 
import Footer from "../components/Footer";  
const Home = () => {
  return (
    
    <div className="home-container home-page">
      <div className="home-container">
      
     
      <div className="hero">
        <h2>El Gran Café de Chiapas</h2>
        <h1>La Taza Mágica</h1>
        <p>
          Estamos comprometidos en mantener en alto el café de Chiapas,
          conservando la pureza y calidad del café que consumen nuestros clientes.
        </p>
        <a href="/menu" className="btn">Explorar Menú</a>
      </div>

      
      <div className="fondo-imagen-seccion">
        <img src={imagenFondo} alt="Imagen flotante" />
        <div className="texto-seccion">
          <h2>Conócenos</h2>
          <p>
            Nos dedicamos a la producción de café de muy alta calidad, 
            aplicando siempre nuestros valores, desde cada cultivador e integrantes de la empresa, 
            originando una pasión y dedicación al arte de la cosecha de nuestro café, 
            esto se refleja que nuestro producto compita con cualquiera del mundo.
          </p>
        </div>
      </div>

     
      <div className="nosotros-container">
        <div className="nosotros">
          <h2>Nuestro compromiso con la </h2>
          <h1>Calidad de un café 100% Chiapaneco</h1>
          <p>
            En La Taza Mágica, tu café es procesado y empacado al momento de la compra, 
            asegurando que conserve todas sus características. Puedes elegir entre café en 
            grano entero o molido según tu preferencia (cafetera, prensa, espresso). 
            Empacamos en bolsas con cuatro sellos y válvula italiana para mantener su sabor y 
            aroma intactos hasta que llegue a tu domicilio.
          </p>
          <br></br>
          <br></br>
          <a href="/nosotros" className="btn">Nosotros</a>
        </div>
      </div>

      
      <div className="fondo-imagen-producto">
        <div className="icono-taza">
          <FaCoffee /> {/* Ícono de la taza */}
        </div>
        <div className="texto-producto">
          <h1>Productos Destacados</h1>
          <h2>Conoce nuestros productos, sabemos que te encantarán...</h2>
        </div>
      </div>


<div className="contacto-container">
  <div className="contacto">
    <h2>PRODUCIMOS EL MEJOR CAFÉ</h2>
    <h1>Café de Chiapas
    Exquisito</h1>
    <p>Café de la más alta calidad en distintas presentaciones para que puedas disfrutarlo.</p>
    <br></br>
    <br></br>
    <a href="/contacto" className="btn">Contacto</a>
  </div>
</div>
    </div>
    <Footer />
    </div>
  );
};

export default Home;
