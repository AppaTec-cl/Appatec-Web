import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Bienvenido a AppaTec</h1>
        <p>Tu solución para gestionar contratos de manera eficiente y segura.</p>
        <Link to="/download" className="button">Descarga ACG</Link>
      </section>
      <section className="features-section">
        <h2>Características</h2>
        <div className="features-container">
          <div className="feature">
            <img src="/path/to/feature1-icon.png" alt="Feature 1"/>
            <div>
              <h3>Facilidad de Uso</h3>
              <p>Gestiona tus contratos con una interfaz amigable.</p>
            </div>
          </div>
          <div className="feature">
            <img src="/path/to/feature2-icon.png" alt="Feature 2"/>
            <div>
              <h3>Seguridad</h3>
              <p>Tus contratos están seguros con encriptación avanzada.</p>
            </div>
          </div>
          {/* Más características */}
        </div>
      </section>
      <section className="testimonials-section">
        <h2>Testimonios</h2>
        {/* Agrega testimonios aquí */}
      </section>
      <section className="contact-section">
        <h2>Contacto</h2>
        {/* Formulario de contacto y detalles */}
      </section>
    </div>
  );
}

export default HomePage;
