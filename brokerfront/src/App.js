//import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Inicio from "./pages/Inicio";
import ListarTransacciones from "./pages/ListarTransacciones";
import ListarBancos from "./pages/ListarBancos";
import AgregarBanco from "./pages/AgregarBanco";
import ListarRegistroEstado from "./pages/ListarRegistroEstado";
import { useState } from "react";
import Default from "./pages/Default";

function App() {
  const [apiData, setApiData] = useState([]);
  const handleDataUpload = (data) => {
    // Esta función se llama cuando se cargan datos en la API
    // Aquí puedes realizar cualquier acción adicional si es necesario
    // Luego, actualiza el estado apiData para desencadenar la recarga de la tabla.
    setApiData([...apiData, data]);
  };

  return (
    <div className="App">
      <br></br>
      <h1 id="titulo-pagina">Broker de Bancos</h1>
      <br></br>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="inicio" element={<Inicio />} />
          <Route path="bancos" element={<ListarBancos apiData={apiData} />} />
          <Route
            path="transacciones"
            element={<ListarTransacciones apiData={apiData} />}
          />
          <Route path="default" element={<Default />} />
          <Route
            path="AñadirBanco"
            element={<AgregarBanco upload={handleDataUpload} />}
          />
          <Route
            path="registroEstado"
            element={<ListarRegistroEstado apiData={apiData} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/*


import './App.css';
import { BrowserRouter,Route, Switch,Link } from 'react-router-dom';
import { Listar } from './components/Listar';
import { AgregarBanco } from './components/AgregarBanco';
import { useState } from 'react';

function App() {
  const [apiData, setApiData] = useState([]);

  const handleDataUpload = (data) => {
    // Esta función se llama cuando se cargan datos en la API
    // Aquí puedes realizar cualquier acción adicional si es necesario
    // Luego, actualiza el estado apiData para desencadenar la recarga de la tabla.
    setApiData([...apiData, data]);
  };

  return (
      <BrowserRouter>
        <header className="App-header">
          <h1 id="titulo-pagina">API Broker</h1>
          <Link to='/'>Home</Link>
          <Link to='/altaBanco'>altaBanco</Link>        
        </header>
        <Switch>
          <Route path='/'>
            <Listar apiData={apiData} />
          </Route>

          <Route path='/altaBanco'>
            <AgregarBanco upload={handleDataUpload} />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;




*/
