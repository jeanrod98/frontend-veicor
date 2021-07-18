import {Link} from 'react-router-dom';
import css from '../css/loguin-registro.css'

import Header from './Header';
import Footer from './Footer';


function Loguin(props) {
    

    
    // Funcion para loguear el usuario 
    const loguin = e =>{
        // mandamos el estado del usuario si existe al storage 
        localStorage.removeItem('estado');
        localStorage.setItem('estado','iniciado')
        // redireccionamos al inicio pero logueado 
        props.history.push('/');

        
        // const [tipo, setTipo] = useState("cliente");
    };

    return (
      <div className= "Loguin">
       <Header/>
       <div className="div-loguin">
            <div className="form-loguin">
                
                <form className="formulario-loguin" action="#" method="">
                    <h2 className="my-4">INICIAR SESIÓN</h2>
                    <div class="form-row">
                        <div class="">
                            <label for="usuario">Usuario</label>
                            <input type="text" class="form-control" id="usuario" placeholder="Ingrese su correo electrónico"  required autoFocus/>
                        
                        </div>
                    </div>
                    <div class="form-row">
                        <div class=""> 
                            <label for="contrasenia">Contraseña</label>
                            <input type="password" class="form-control" id="contrasenia" placeholder="Ingrese su contraseña"  required/>
                        
                        </div>
                    </div>

                    <div class="form-row my-3">
                       <Link>¿Perdiste el Acceso?</Link>
                    </div>
                    <div class="form-row">
                        <input 
                        className="btn my-3" 
                        type="submit" 
                        id="enviar-loguin" 
                        value="ACCEDER"
                        onClick={loguin}/>
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