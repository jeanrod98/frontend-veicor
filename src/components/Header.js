// import logo from '../../public/logohpng2.png';
import { Link, withRouter, useHistory } from "react-router-dom";
import { useState } from "react";
import "../css/app.css";
import "../css/estilos-navbar.css";
import logohpng2 from "../assets/logos/logohpng2.png";
import useAuth from "../auth/useAuth";
import Swal from "sweetalert2";

function Header(props) {
  const auth = useAuth();
  // Consultamos en el storage los datos del usuario
  // const usuario = JSON.parse(localStorage.getItem('dataUser'));
  // console.log(usuario);

  // Funcion de cerrar cesion
  const cerrarSesion = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Seguro quiere cerrar la sesión?",
      text: "Se perderan los productos guardados en el carrito de compras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fc5c1b",
      cancelButtonColor: "#d33",
      cancelButtonText: "No, quiero quedarme!",
      confirmButtonText: "Sí, quiero salir!",
    }).then((result) => {
      if (result.isConfirmed) {
        let timerInterval;
        Swal.fire({
          title: "Cerrando la sesión...",
          // html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
              const content = Swal.getHtmlContainer();
              if (content) {
                const b = content.querySelector("b");
                if (b) {
                  b.textContent = Swal.getTimerLeft();
                }
              }
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            // console.log("I was closed by the timer");
            auth.logout();
            localStorage.removeItem("poductCarrito");
            props.history.push('/loguin')
          }
        });
        
      }
    });

    // console.log(auth.userExist == false);
  };
  return (
    <div className="Header">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="/">
          <img class="navbar-brand" src={logohpng2} className="logohpng2" />
        </a>
        <button
          class="navbar-toggler mx-4"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            {/* validamos el estado de la sesion para mostrar opciones de navegacion  */}
            <Link class="nav-link mx-3" to="/">
              Inicio
            </Link>

            <Link class="nav-link mx-3" to="catalogo">
              Catálogo
            </Link>

            {/* Enlaces Publicas */}

            {!auth.isLogged() && (
              <>
                <Link class="nav-link mx-3" to="loguin">
                  Iniciar Sesión
                </Link>

                <Link class="nav-link mx-3" to="registro">
                  Registrarse
                </Link>
              </>
            )}

            {/* Enlaces Privados */}
            {auth.isLogged() && (
              <>
                <ion-icon id="icono-usuario" name="person-circle-outline" />

                <div className="contenedor-navUsuario">
                  <Link className="nav-link link-usuario">
                    {auth.user.nombre_usu + " " + auth.user.apellido_usu}
                  </Link>
                  <span className="usuario-span">{auth.user.tipo_usu}</span>
                </div>

                <Link class="nav-link mx-3" id="carrito" to="/carrito">
                  <ion-icon name="cart-outline"></ion-icon>
                </Link>

                <button
                  onClick={cerrarSesion}
                  id="cerrar_sesion"
                  class="nav-link mx-3"
                >
                  <ion-icon id="cerrar-sesion-icono" name="log-out"></ion-icon>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Header);
