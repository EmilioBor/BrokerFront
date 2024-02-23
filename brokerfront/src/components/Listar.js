import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Listar = ({apiData}) => {

    const [transacciones,setTransacciones] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:5001/WebApi/Transaccion/listar')
        .then((response)=> { setTransacciones(response.data);})
        .catch((error)=>{console.error(error);})
    },[apiData]);  

    return (
        <div className="lista">
          <h2 id="lista-titulo">Lista de transacciones</h2>
          {
            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Año</th>
                  <th scope="col">Desarrollador</th>
                  <th scope="col">Peso (GB)</th>
                </tr>
              </thead>
              <tbody>
              {transacciones.map((transaccion) => (  
                <tr key={transaccion.Id}>
                  <td>{transaccion.Monto}</td>
                  <td>{transaccion.FechaHora}</td>
                  <td>{transaccion.IdCuentaDestinoNavigation}</td>
                  <td>{transaccion.IdCuentaOrigenNavigation}</td>
                  <td>{transaccion.IdCuentaOrigenNavigation}</td>
                  <td>{transaccion.IdTipoNavigation}</td>
                  <td>{transaccion.IdValidacionEstadoNavigation}</td>
                  <td>{transaccion.Registroestado}</td>
                  Registroestado
                </tr>
                ))}
              </tbody>
            </table>
          }
        </div>
      );
}