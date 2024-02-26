import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ListarTransacciones = ({ apiData }) => {
    const [transacciones, setTransacciones] = useState([]);
    const [registros, setRegistros] = useState([]);
    const [modalAbierto, setModalAbierto] = useState(false);

    useEffect(() => {
        axios.get('https://localhost:7033/WebApi/Transaccion/listar')
            .then((response)=> { setTransacciones(response.data);})
            .catch((error)=>{console.error(error);})
    }, [apiData]);  

    // Manejar el clic en el botón para seleccionar una transacción y cargar registros asociados
    const handleTransaccionClick = async (transaccion) => {
        try {
            // Aquí realizamos la solicitud al endpoint del backend para obtener los registros asociados a la transacción
            const response = await axios.get(`https://localhost:7033/WebApi/RegistroEstado/${transaccion.id}`);
            setRegistros(response.data);
            // Abrir el modal
            setModalAbierto(true);
        } catch (error) {
            console.error('Error al obtener los registros asociados:', error);
        }
    };

    // Manejar el cierre del modal
    const cerrarModal = () => {
        // Limpiar los registros al cerrar el modal
        setRegistros([]);
        // Cerrar el modal
        setModalAbierto(false);
    };

    return (
        <div className="lista">
            <div className="tablas">
                <h2 id="lista-titulo">Lista de transacciones</h2>
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
                            <th scope="col">Acción</th>
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
                                <td>{transaccion.idAceptadoEstado}</td>
                                <td>{transaccion.idCuentaOrigen}</td>
                                <td>{transaccion.idCuentaDestino}</td>
                                <td>{transaccion.registroEstado}</td>
                                <td>
                                <button onClick={() => handleTransaccionClick(transaccion)} className="btn btn-info">Ver Registros Estado</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Modal para mostrar los registros */}
            {modalAbierto && (
                <div className="modal">
                    <div className="modal-contenido">
                        <span className="cerrar" onClick={cerrarModal}>X</span>
                        <h2>Registros de la transacción seleccionada</h2>
                        <table className="table table-hover table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Fecha y Hora</th>
                                    <th scope="col">Estado de validación</th>
                                    <th scope="col">Esto Aceptada</th>
                                </tr>
                            </thead>
                            <tbody className='Tabla'>
                                {registros?.map((registro) => (  
                                    <tr key={registro.id}>              
                                        <td>{registro.fechaHora}</td>
                                        <td>{registro.idValidacionEstado}</td>
                                        <td>{registro.idAceptadoEstado}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
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
