import logo from './logo.svg';
import './App.css';
import { Listar } from './components/Listar';

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
        <Listar  apiData={apiData}/>
      </header>
    </div>
  );
}

export default App;
