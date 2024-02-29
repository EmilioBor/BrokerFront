import React, { useEffect, useState } from "react";
import axios from "axios";

export const ListarRegistroEstado = ({ apiData }) => {
  const [registros, setRegistros] = useState([]);
  const [numeroTransaccion, setNumeroTransaccion] = useState([]);

  const buscarRegistros = () => {
    axios
      .get(
        `https://localhost:7033/WebApi/RegistroEstado/listarRegistrosPorTransaccion/${numeroTransaccion}`
      )
      .then((response) => {
        setRegistros(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h2>Registros de la transacción seleccionada</h2>
      <input
        type="text"
        value={numeroTransaccion}
        onChange={(e) => setNumeroTransaccion(e.target.value)}
        placeholder="Número de transacción"
      />
      <button
        className="btn btn-info"
        onClick={buscarRegistros(numeroTransaccion)}
      >
        Obtener Registros
      </button>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Fecha (DD/MM/AAAA)</th>
            <th scope="col">Numero Transaccion</th>
            <th scope="col">Estado de validación</th>
            <th scope="col">Esto Aceptada</th>
          </tr>
        </thead>
        <tbody className="Tabla">
          {registros?.map((registro) => (
            <tr key={registro.id}>
              <td>{new Date(registro.fechaHora).toLocaleDateString()}</td>
              <td>{registro.nombreTransaccion}</td>
              <td>{registro.nombreValidadoEstado}</td>
              <td>{registro.nombreAceptadoEstado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarRegistroEstado;
