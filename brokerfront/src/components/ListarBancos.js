import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ListarBancos = ({apiData}) => {

    const [bancos,setBancos] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7033/WebApi/Banco/listar')
        .then((response)=> { setBancos(response.data);})
        .catch((error)=>{console.error(error);})
    },[apiData]);  

    return (
        <div className="lista">
          <h2 id="lista-titulo">Lista de bancos</h2>
          {
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">Razon Social</th>
                  <th scope="col">Numero</th>
                  <th scope="col">Estado</th>    
                </tr>
              </thead>
              <tbody className='Tabla'>
              {bancos?.map((banco) => (  
                <tr key={bancos.id}> 
                  <td>{banco.Id}</td>
                  <td>{banco.RazonSocial}</td>
                  <td>{bancos.IdEstadoBanco}</td>
                  <td>{bancos.NombreEstadoBancoNavigation}</td>
                </tr>
                ))}
              </tbody>
            </table>
          }
        </div>
      );
};

