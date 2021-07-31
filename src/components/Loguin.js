import { Link, useHistory } from "react-router-dom";
import "../css/loguin-registro.css";
import logo2 from "../assets/logos/logo2.jpg";

import Header from "./Header";
import Footer from "./Footer";
import { AuthContext } from "../auth/AuthProvider";
import useAuth from "../auth/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

function Loguin(props) {
  const history = useHistory();

  //Estado para cacturar el correo y la contraseña
  const [credenciales, setCredenciales] = useState({
    correo_usu: "",
    contrasenia_usu: "",
  });
  // funcion para capturar los datos del formulario
  const credencialesValues = (e) => {
    setCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value,
    });
  };
  //para utilizar la funcion de loguin llamamos al hook useAuth
  const auth = useAuth();
  // Funcion para loguear el usuario
  const handleLogin = (e) => {
    e.preventDefault();
    const { correo_usu, contrasenia_usu } = credenciales;
    // console.log(correo_usu);
    // console.log(contrasenia_usu);
    auth.login(correo_usu, contrasenia_usu).then((respuesta) => {
      // console.log(respuesta);

     setTimeout(() => {
         
         history.push(`${respuesta}`);
     }, 2000);
        
      
    });
    // localStorage.removeItem('usuario');
    // localStorage.setItem('usuario', JSON.stringify(objUsuario))

    // console.log(auth.userExist != false);
    // setTimeout(() => {

    //     if(auth.userExist == null || auth.userExist == false){
    //         console.log('El usuario no existe');
    //         // props.history.push('/loguin');
    //     }else if (auth.userExist == true){
    //         props.history.push('/catalogo');
    //     }
    // }, 2000);

    // const [tipo, setTipo] = useState("cliente");
    // auth.loguin();
  };

  return (
    <div className="Loguin">
      <Header />
      <div className="div-loguin">
        <div className="form-loguin">
          <form className="formulario-loguin">
            <h2 className="my-4">INICIAR SESIÓN</h2>
            <div class="form-row">
              <div class="">
                <label for="usuario">Usuario</label>
                <input
                  onChange={credencialesValues}
                  name="correo_usu"
                  type="email"
                  class="form-control"
                  id="usuario"
                  placeholder="Ingrese su correo electrónico"
                  required
                  autoFocus
                />
              </div>
            </div>
            <div class="form-row">
              <div class="">
                <label for="contrasenia">Contraseña</label>
                <input
                  onChange={credencialesValues}
                  name="contrasenia_usu"
                  type="password"
                  class="form-control"
                  id="contrasenia"
                  placeholder="Ingrese su contraseña"
                  required
                />
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
                onClick={handleLogin}
              />
            </div>
          </form>
        </div>

        <div className="logo-loguin">
          <img src={logo2} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Loguin;
