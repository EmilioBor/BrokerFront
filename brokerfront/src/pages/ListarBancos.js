import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export const ListarBancos = ({apiData}) => {

    const [bancos,setBancos] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7033/WebApi/Banco/listar')
        .then((response)=> { setBancos(response.data);})
        .catch((error)=>{console.error(error);})
    },[apiData]);  

    return (
        <div className="lista">
          <br></br>
          <h2 id="lista-titulo">Lista de bancos</h2>
          <br></br>
          <div className='boton'>
            <Link to="/AñadirBanco">
                      <button>Agregar banco</button>
            </Link>
          </div>
          <br></br>
          {
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope="col">Razon Social</th>
                  <th scope="col">Estado</th>    
                  <th scope="col">Numero</th>
                  <th scope="col">Editar</th>
                </tr>
              </thead>
              <tbody className='Tabla'>
              {bancos?.map((banco) => (  
                <tr key={banco.id}> 
                  <td>{banco.id}</td>
                  <td>{banco.razonSocial}</td>
                  <td>{banco.nombreEstadoBanco}</td>
                  <td>{banco.numero}</td>
                  <td> 
                    {/* <button onClick={EditarEstadoBanco()}></button> */}
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          }
        </div>
      );
};

export default ListarBancos;