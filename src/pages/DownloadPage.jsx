import React from 'react';
import './DownloadPage.css'; // Asegúrate de crear este archivo CSS

function DownloadPage() {
  return (
    <div className="download-container">
      <h1>Descarga ACG</h1>
      <p>ACG te permite gestionar tus contratos de forma eficiente y segura. Descarga ahora para comenzar a simplificar tu gestión contractual.</p>
      <button className="download-button">Descargar Ahora</button>
      <div className="installation-instructions">
        <h2>Instrucciones de Instalación</h2>
        <ol>
          <li>Descarga el archivo desde el botón arriba.</li>
          <li>Instala la aplicación siguiendo los pasos en tu dispositivo.</li>
          <li>Regístrate y comienza a gestionar tus contratos.</li>
        </ol>
      </div>
    </div>
  );
}

export default DownloadPage;
