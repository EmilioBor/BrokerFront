//import logo from './logo.svg';
import './App.css';
import { ListarTransacciones } from './components/ListarTransacciones';
import { ListarBancos } from './components/ListarBancos';
import { useState } from 'react';
import { AgregarBanco } from './components/AgregarBanco';

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
      <header className="App-header">
        <h1 id="titulo-pagina">API Broker</h1>
        <ListarTransacciones  apiData={apiData}/>
        <AgregarBanco upload={handleDataUpload}/>
        <ListarBancos  apiData={apiData}/>
      </header>
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