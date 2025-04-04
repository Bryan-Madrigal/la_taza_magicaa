import React from "react";
import "./Menu.css";
import Footer from "../components/Footer";
import cafe from "../assets/Menu1.jpg";
import capuchino from "../assets/Menu2.jpg";
import latte from "../assets/Menu3.jpg";
import teVerde from "../assets/Menu4.jpg";
import teChai from "../assets/Menu5.jpg";
import teNegro from "../assets/Menu6.jpg";
import jugoNaranja from "../assets/Menu7.jpg";
import jugoToronja from "../assets/Menu8.jpg";
import smoothie from "../assets/Menu9.jpg";
import desayuno from "../assets/Menu10.jpg";
import chilaquiles from "../assets/Menu11.jpg";
import omelette from "../assets/Menu12.jpg";
import sandwich from "../assets/Menu13.jpg";
import bagel from "../assets/Menu14.jpg";
import croissant from "../assets/Menu15.jpg";
import ensalada from "../assets/Menu16.jpg";
import nachos from "../assets/Menu17.jpg";
import papas from "../assets/Menu18.jpg";
import pastel from "../assets/Menu19.jpg";
import cheesecake from "../assets/Menu20.jpg";
import tarta from "../assets/Menu21.jpg";
import galletas from "../assets/Menu22.jpg";
import brownie from "../assets/Menu23.jpg";
import cupcake from "../assets/Menu24.jpg";

const Menu = () => {
  const categorias = [
    {
      nombre: "🥤 Bebidas",
      subcategorias: [
        {
          nombre: "Café",
          productos: [
            { id: 1, nombre: "Espresso", descripcion: "Café intenso y aromático.", imagen: cafe },
            { id: 2, nombre: "Capuchino", descripcion: "Café con leche espumosa.", imagen: capuchino },
            { id: 3, nombre: "Latte", descripcion: "Café suave con leche.", imagen: latte }
          ]
        },
        {
          nombre: "Tés e Infusiones",
          productos: [
            { id: 4, nombre: "Té Verde", descripcion: "Refrescante y antioxidante.", imagen: teVerde },
            { id: 5, nombre: "Té Chai", descripcion: "Con especias y leche.", imagen: teChai },
            { id: 6, nombre: "Té Negro", descripcion: "Clásico y aromático.", imagen: teNegro }
          ]
        },
        {
          nombre: "Bebidas frías",
          productos: [
            { id: 7, nombre: "Jugo de Naranja", descripcion: "Natural y fresco.", imagen: jugoNaranja },
            { id: 8, nombre: "Jugo de Toronja", descripcion: "Cítrico y refrescante.", imagen: jugoToronja },
            { id: 9, nombre: "Smoothie de Frutas", descripcion: "Fruta natural con yogurt.", imagen: smoothie }
          ]
        }
      ]
    },
    {
      nombre: "🍽️ Alimentos",
      subcategorias: [
        {
          nombre: "Desayunos",
          productos: [
            { id: 10, nombre: "Huevos al Gusto", descripcion: "Con acompañamiento.", imagen: desayuno },
            { id: 11, nombre: "Chilaquiles", descripcion: "Verdes o rojos con crema.", imagen: chilaquiles },
            { id: 12, nombre: "Omelette", descripcion: "Con queso y champiñones.", imagen: omelette }
          ]
        },
        {
          nombre: "Bocadillos",
          productos: [
            { id: 13, nombre: "Sándwich de Pollo", descripcion: "Con ensalada fresca.", imagen: sandwich },
            { id: 14, nombre: "Bagel de Salmón", descripcion: "Con queso crema.", imagen: bagel },
            { id: 15, nombre: "Croissant Relleno", descripcion: "Jamón y queso.", imagen: croissant }
          ]
        },
        {
          nombre: "Snacks",
          productos: [
            { id: 16, nombre: "Nachos", descripcion: "Con queso y jalapeños.", imagen: nachos },
            { id: 17, nombre: "Papas Fritas", descripcion: "Con salsa y queso.", imagen: papas },
            { id: 18, nombre: "Palomitas", descripcion: "Con mantequilla.", imagen: pastel }
          ]
        }
      ]
    },
    {
      nombre: "🍰 Postres",
      subcategorias: [
        {
          nombre: "Pasteles",
          productos: [
            { id: 19, nombre: "Pastel de Chocolate", descripcion: "Suave y cremoso.", imagen: pastel },
            { id: 20, nombre: "Cheesecake", descripcion: "Con frutos rojos.", imagen: cheesecake },
            { id: 21, nombre: "Tarta de Manzana", descripcion: "Con canela.", imagen: tarta }
          ]
        },
        {
          nombre: "Galletas y Brownies",
          productos: [
            { id: 22, nombre: "Galletas", descripcion: "Chispas de chocolate.", imagen: galletas },
            { id: 23, nombre: "Brownie", descripcion: "Con nuez y chocolate.", imagen: brownie },
            { id: 24, nombre: "Cupcake", descripcion: "Con frosting.", imagen: cupcake }
          ]
        }
      ]
    }
  ];

  return (
    <div className="menu-container">
      <h1>Nuestro Menú</h1>

      {categorias.map((categoria, index) => (
        <div key={index} className="categoria">
          <h2>{categoria.nombre}</h2>

          {categoria.subcategorias.map((subcategoria, subIndex) => (
            <div key={subIndex} className="subcategoria">
              <h3>{subcategoria.nombre}</h3>
              <div className="menu-grid">
                {subcategoria.productos.map((producto) => (
                  <div key={producto.id} className="tarjeta">
                    <img src={producto.imagen} alt={producto.nombre} />
                    <h4>{producto.nombre}</h4>
                    <p>{producto.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
<Footer />
      
    </div>
  );
};

export default Menu;
