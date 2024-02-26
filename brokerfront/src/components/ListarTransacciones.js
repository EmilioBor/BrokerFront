import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ListarTransacciones = ({apiData}) => {

    const [transacciones,setTransacciones] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7033/WebApi/Transaccion/listar')
        .then((response)=> { setTransacciones(response.data);})
        .catch((error)=>{console.error(error);})
    },[apiData]);  

    return (
        <div className="lista">
          <h2 id="lista-titulo">Lista de transacciones</h2>
          {
            <table className="table table-hover table-dark">
              <thead>
                <tr>

                  <th scope="col">ID</th>
                  <th scope="col">Monto</th>
                  <th scope="col">FechaHora</th>
                  <th scope="col">Tipo Transaccion</th>
                  <th scope="col">Validacion Estado</th>
                  <th scope="col">Aceptado Estado</th>
                  <th scope="col">Cuenta Origen</th>
                  <th scope="col">Cuenta Destino</th>
                  <th scope="col">Registroestado</th>
                </tr>
              </thead>
              <tbody className='Tabla'>
              {transacciones?.map((transaccion) => (  
                <tr key={transaccion.id}> 
                  <td>{transaccion.id}</td>
                  <td>{transaccion.monto}</td>
                  <td>{transaccion.fechaHora}</td>
                  <td>{transaccion.idTipo}</td>
                  <td>{transaccion.idValidacionEstado}</td>
                  {/* <td>{transaccion.idAceptadoEstado}</td> */}
                  <td>{transaccion.idAceptadoEstado}</td>
                  <td>{transaccion.idCuentaOrigen}</td>
                  <td>{transaccion.idCuentaDestino}</td>
                  <td>{transaccion.registroEstado}</td>
                </tr>
                ))}
              </tbody>
            </table>
          }
        </div>
      );
};

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export const Listar = ({ apiData }) => {
//   const [transacciones, setTransacciones] = useState({
//      id : '',
//      monto: '',
//      fechaHora: '',
//      CuentaDestino: '',
//      CuentaOrigeno: '',
//      TipoTransaccion: '',
//      ValidacionEstado: '',
//      AceptadoEstado: '',
//      Registroestado: ''
//   });

//   useEffect(() => {
//     axios
//       .get('https://localhost:7033/WebApi/Transaccion/listar')
//       .then((response) => {
//         setTransacciones(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [apiData]);

//   return (
//     <div className="lista">
//       <h2 id="lista-titulo">Lista de transacciones</h2>
//       <table className="table table-hover table-dark">
//         <thead>
//           <tr>
//             <th scope="col">Monto</th>
//             <th scope="col">FechaHora</th>
//             <th scope="col">Cuenta Destino</th>
//             <th scope="col">Cuenta Origen</th>
//             <th scope="col">Tipo Transaccion</th>
//             <th scope="col">Validacion Estado</th>
//             <th scope="col">Aceptado Estado</th>
//             <th scope="col">Registroestado</th>
//           </tr>
//         </thead>
//         <tbody className="Tabla">
//           {transacciones?.map((transaccion) => (
//             <tr key={transaccion.id}>
             
//               <td>{transaccion.monto}</td>
//               <td>{transaccion.fechaHora}</td>
//               <td>{transaccion.CuentaDestino}</td>
//               <td>{transaccion.CuentaOrigeno}</td>
//               <td>{transaccion.TipoTransaccion}</td>
//               <td>{transaccion.ValidacionEstado}</td>
//               <td>{transaccion.AceptadoEstado}</td>
//               <td>{transaccion.Registroestado}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
