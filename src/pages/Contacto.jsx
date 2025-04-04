import React from "react";
import "./Contacto.css";
import Footer from "../components/Footer";  
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contacto = () => {
  return (
    <>
      <section className="contacto2-container">
        <div className="texto-contacto">
          <br />
          <h2>Contacto</h2>
        </div>
        <div className="mapa-container">
          <iframe
            title="Mapa de La Taza Mágica"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.246329320202!2d-93.11558262591458!3d16.751761384159986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ1JzA2LjMiTiA5M8KwMDcnMDcuMyJX!5e0!3m2!1ses-419!2smx!4v1711812001933"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <br /><br />

        <div className="contacto-contenido">
          
          <div className="contacto-info">
            <h2>Datos de Contacto</h2>

            <div className="icono-titulo">
              <FaMapMarkerAlt />
              <strong>Dirección:</strong>
            </div>
            <p className="contacto-detalle">Av. Central Poniente, Núm. 961 entre 8va y 9na Pte., Colonia Centro</p>
            <hr />

            <div className="icono-titulo">
              <FaPhone />
              <strong>Teléfono:</strong>
            </div>
            <p className="contacto-detalle">961 216 4963</p>
            <hr />

            <div className="icono-titulo">
              <FaEnvelope />
              <strong>E-mail:</strong>
            </div>
            <p className="contacto-detalle">latazamagica@cafeunico.com</p>
          </div>
          <div className="contacto-formulario">
            <h1>Formulario de Contacto</h1>
            <p>Si tienes alguna duda puedes llamarnos o llenar el formulario, te daremos una respuesta a la brevedad, gracias.</p>

            <form>
              <label htmlFor="nombre">Nombre (requerido)</label>
              <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />

              <label htmlFor="email">Correo electrónico (requerido)</label>
              <input type="email" id="email" name="email" placeholder="Tu correo" required />

              <label htmlFor="whatsapp">Cel/WhatsApp</label>
              <input type="tel" id="whatsapp" name="whatsapp" placeholder="Tu número" />

              <label htmlFor="mensaje">Mensaje (requerido)</label>
              <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje" required></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contacto;
