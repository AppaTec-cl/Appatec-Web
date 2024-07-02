import React from 'react';

const Download = () => {
    return (
        <section id="download" className="section bg-secondary">
            <div className="container">
                <h2>Descargar ACG</h2>
                <a href="downloads/ACGInstaller.exe" className="btn" download>Descargar para Windows</a>
            </div>
        </section>
    );
};

export default Download;
