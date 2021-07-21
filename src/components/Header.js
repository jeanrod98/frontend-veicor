// import logo from '../../public/logohpng2.png';
import {Link, withRouter} from 'react-router-dom';
import {useState} from 'react';
import '../css/app.css'
import '../css/estilos-navbar.css'
import logohpng2 from '../assets/logos/logohpng2.png'

function Header(props) {

let ruta = '/perfil-usuario'


// traemos los nuevos datos 
const objetoUsuario = localStorage.getItem('usuario');
const newEestado_sesion = JSON.parse(objetoUsuario);


// evento para cerrar sesion 
const cerrar_sesion = e =>{
 
  localStorage.removeItem('usuario');
  props.history.push('/');
}



// enlace deshabilitado 
const desabilitado = e =>{

  
  if (newEestado_sesion != null){
    if (newEestado_sesion.tipo == 'Administrador'){
      props.history.push('/perfil-admin');
      // e.preventDefault()
    }else if (newEestado_sesion.tipo == 'Usuario'){
      props.history.push('/perfil-usuario');
    }
  
  }
}

    return (
      <div className= "Header">
       
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand" href="/"><img class="navbar-brand" src={logohpng2} className="logohpng2"/></a>
          <button class="navbar-toggler mx-4" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              {/* validamos el estado de la sesion para mostrar opciones de navegacion  */}
              { newEestado_sesion == null  && <Link class="nav-link mx-3" to="/">Inicio</Link>} 
                                
              { newEestado_sesion == null &&  <Link class="nav-link mx-3" to="catalogo">Catálogo</Link>}
                                  
              { newEestado_sesion == null && <Link class="nav-link mx-3" to="loguin">Iniciar Sesión</Link>}
                                        
              { newEestado_sesion == null && <Link class="nav-link mx-3" to="registro">Registrarse</Link>}


              { newEestado_sesion != null && <Link class="nav-link mx-3" to="/">Inicio</Link>}
              { newEestado_sesion != null && <Link class="nav-link mx-3" to="/catalogo">Catálogo</Link>}              
              { newEestado_sesion != null && <ion-icon id="icono-usuario" name="person-circle-outline"></ion-icon>}

              { newEestado_sesion != null && 
              
                <div className="contenedor-navUsuario"> <Link onClick={desabilitado} className="nav-link link-usuario" >{newEestado_sesion.usuario}</Link><span className="usuario-span">{newEestado_sesion.tipo}</span></div>
              }

              { newEestado_sesion != null && <Link class="nav-link mx-3" id="carrito" to="/carrito"><ion-icon name="cart-outline"></ion-icon></Link>}
              { newEestado_sesion != null && <button id="cerrar_sesion" class="nav-link mx-3" onClick={cerrar_sesion} ><ion-icon id="cerrar-sesion-icono" name="log-out"></ion-icon></button>}
              
            
            </div>
          </div>
        </nav>        
          
      </div>
    );
  }
  
  export default withRouter(Header);