import {Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

function Loguin() {
    return (
      <div className= "Loguin">
       <Header/>
       <div className="div-loguin">
            <div className="form-loguin">
                
                <form className="formulario-loguin">
                    <h2 className="my-4">INICIAR SESIÓN</h2>
                    <div class="form-row">
                        <div class="">
                            <label for="usuario">Usuario</label>
                            <input type="text" class="form-control" id="usuario" placeholder="Ingrese su correo electrónico"  required/>
                        
                        </div>
                    </div>
                    <div class="form-row">
                        <div class=""> 
                            <label for="contrasenia">Contraseña</label>
                            <input type="password" class="form-control" id="contrasenia" placeholder="Ingrese su contraseña"  required/>
                        
                        </div>
                    </div>

                    <div class="form-row my-3">
                       <Link>¿Perdiste el Acceso?.</Link>
                    </div>
                    <div class="form-row">
                        <input className="btn my-3" type="submit" id="enviar-loguin" value="ACCEDER"/>
                    </div>
                </form>
            </div>

           <div className="logo-loguin">
               <img src="/img/logos/logo2.jpg" />

           </div>
       </div>
       <Footer/>
      </div>
    );
  }
  
  export default Loguin;