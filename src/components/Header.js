// import logo from '../../public/logohpng2.png';
import {Link, withRouter} from 'react-router-dom';
import {useState} from 'react';

function Header(props) {

// preguntamos por el estado 
const estado_sesion = localStorage.getItem('estado');
// Si no existe lo creamos 
if (estado_sesion == null){
  
  localStorage.setItem('estado', 'no iniciado');
    
}
// traemos los nuevos datos 
const newEestado_sesion = localStorage.getItem('estado');

//constante para mostrar nombre de usuario (provicional)
const usuario_nombre = 'Jean Rodriguez';

// evento para cerrar sesion 
const cerrar_sesion = e =>{
 
  localStorage.removeItem('estado');
  props.history.push('/');
}

    return (
      <div className= "Header">
       
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand" href="/"><img class="navbar-brand" src="/img/logos/logohpng2.png" className="logohpng2"/></a>
          <button class="navbar-toggler mx-4" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              {/* validamos el estado de la sesion para mostrar opciones de navegacion  */}
              { newEestado_sesion == 'no iniciado'  && <Link class="nav-link mx-3" to="/">Inicio</Link>} 
                                
              { newEestado_sesion == 'no iniciado' &&  <Link class="nav-link mx-3" to="catalogo">Catálogo</Link>}
                                  
              { newEestado_sesion == 'no iniciado' && <Link class="nav-link mx-3" to="loguin">Iniciar Sesión</Link>}
                                        
              { newEestado_sesion == 'no iniciado' && <Link class="nav-link mx-3" to="registro">Registrarse</Link>}

              { newEestado_sesion == 'iniciado' && <Link class="nav-link mx-3" to="/">Inicio</Link>}
              { newEestado_sesion == 'iniciado' && <Link class="nav-link mx-3" to="/catalogo">Catálogo</Link>}
              
              { newEestado_sesion == 'iniciado' && <ion-icon id="icono-usuario" name="person-circle"></ion-icon>}
              { newEestado_sesion == 'iniciado' &&  <Link class="nav-link mx-3 link-usuario" to="/perfil">{usuario_nombre}</Link>}
              { newEestado_sesion == 'iniciado' && <Link class="nav-link mx-3" id="carrito" to="/carrito"><ion-icon name="cart"></ion-icon></Link>}
              { newEestado_sesion == 'iniciado' && <button id="cerrar_sesion" class="nav-link mx-3" onClick={cerrar_sesion} ><ion-icon id="cerrar-sesion-icono" name="log-out"></ion-icon></button>}
              
            
            </div>
          </div>
        </nav>        
          
      </div>
    );
  }
  
  export default withRouter(Header);