import { Link, Outlet } from "react-router-dom";
import '../App.css';

const Layout = () =>{
    return <div>
        <nav class="nav-bar">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/bancos">Bancos</Link>
                </li>
                <li>
                    <Link to="/transacciones">Transacciones</Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>
}

export default Layout;