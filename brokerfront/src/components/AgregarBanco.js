import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';


export const AgregarBanco = ({upload}) => {
  const [banco, setBanco] = useState({
    norazonSocial: '',
    numero: '',
  });
  const [mensaje, setMensaje] = useState('');
  const [mensajeTipo, setMensajeTipo] = useState('success'); // Agrega estado para manejar el tipo de mensaje
 

  const agregarBanco = async () => {
    try{
      const respuesta = await axios.post('https://localhost:7033/WebApi/Banco/', banco);
      upload(respuesta.data);

      if (respuesta.status === 201) {
        setMensajeTipo('success'); // Establecer tipo de mensaje a éxito
        setMensaje('Agregado exitoso.');
        setTimeout(() => {
          setMensaje('');
        }, 3000); // Borra el mensaje después de 3 segundos
      }
    }
    catch {
      setMensajeTipo('error'); // Establecer tipo de mensaje a error
      setMensaje('Error al agregar.');
      setTimeout(() => {
        setMensaje('');
      }, 3000); // Borra el mensaje después de 3 segundos
    }
  };


  return (
  /*  <div>
    <h1>Hola desde el componente de prueba</h1>
    <p>Este es un componente de prueba muy sencillo.</p>
  </div> */
    <div className="container">
      <div className='row'>
        <div className="col-md-6 offset-md-3 agregar">
          <div id="titulo">Agregar Banco</div>
          <div className={`notificacion ${mensajeTipo === 'success' ? 'success' : 'error'}`}>{mensaje}</div>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <div id="card-content">
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Razon Social
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="razonSocial"
                  id="razonSocial"
                  placeholder="Ingrese razon social"
                  onChange={(e) => setBanco({ ...banco, razonSocial: e.target.value })}/>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h5 className="card-title"></h5>
            <div id="card-content">
              <div className="mb-3">
                <label htmlFor="numero" className="form-label">
                  Numero
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="numero"
                  id="numero"
                  placeholder="Ingrese numero"
                  onChange={(e) => setBanco({ ...banco, numero: e.target.value })}/>
              </div>
            </div>
          </div>
          
          <button className="btn btn-success" onClick={agregarBanco}>
            Agregar
          </button>
        </div>
      </div>
    </div>
 
  );
};
