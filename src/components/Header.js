// import logo from '../../public/logohpng2.png';
import {Link} from 'react-router-dom';
function Header() {
    return (
      <div className= "Header">
       
        <nav class="header">
          
            <img src="logohpng2.png" className="logohpng2"/>
          
          <div className="opciones-navbar">
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