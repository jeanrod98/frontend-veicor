// import logo from '../../public/logohpng2.png';
import {Link} from 'react-router-dom';
function Header() {
    return (
      <div className= "Header">
       
        <nav class="header">
          
            <img src="logohpng2.png" className="logohpng2"/>
          
          <div className="opciones-navbar">

          {/* <Link to='#' className="navbar-brand px-2" >Inicio</Link>
          <Link to='#' className="navbar-brand px-2" >Catálogo</Link>
          <Link to='#' className="navbar-brand px-2" >Iniciar Sesión</Link>
          <Link to='#' className="navbar-brand px-2" >Registrarse</Link> */}

          <ul class="nav justify-content-end">
            <li class="nav-item px-2">
              <Link class="nav-link" to="#">Inicio</Link>
            </li>
            <li class="nav-item px-2">
              <Link class="nav-link" to="#">Catálogo</Link>
            </li>
            <li class="nav-item px-2">
              <Link class="nav-link" to="#">Iniciar Sesión</Link>
            </li>
            <li class="nav-item px-2">
              <Link class="nav-link" to="#">Registrarse</Link>
            </li>
          </ul>
          
          </div>
          
        </nav>

        
          
      </div>
    );
  }
  
  export default Header;