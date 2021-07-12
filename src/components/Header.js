// import logo from '../../public/logohpng2.png';
import {Link} from 'react-router-dom';
function Header() {
    return (
      <div className= "Header">
       
       <nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="/"><img class="navbar-brand" src="/img/logos/logohpng2.png" className="logohpng2"/></a>
  <button class="navbar-toggler mx-4" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <Link class="nav-link mx-3" to="/">Inicio</Link>
                      
    <Link class="nav-link mx-3" to="#">Catálogo</Link>
                        
    <Link class="nav-link mx-3" to="loguin">Iniciar Sesión</Link>
                              
    <Link class="nav-link mx-3" to="registro">Registrarse</Link>
          
    </div>
  </div>
</nav>

        
          
      </div>
    );
  }
  
  export default Header;