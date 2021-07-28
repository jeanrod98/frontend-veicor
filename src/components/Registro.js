import Header from "./Header";
import Footer from "./Footer";
import "../css/loguin-registro.css";
import logopng2 from "../assets/logos/logopng2.png";

import { useState } from "react";
import { FormControl } from "react-bootstrap";
function Registro() {
  const expresiones = {
    nombreApellido: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,20}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10}$/, // 10 numeros.
    cedula: /^\d{10}$/, // 10 numeros.
    // celular: /^\d{10}$/, // 10 numeros.
    direccion: /^[a-zA-ÿ]+,[a-zA-Z0-9-\s]+.[a-zA-Z0-9-\s]{9,40}/, //direccion
  };

  // Estado para los campos
  const [usuario, guardarusuario] = useState({
    id_usuario: "",
    nombre_usu: "",
    apellido_usu: "",
    direccion_usu: "",
    celular_usu: "",
    convencional_usu: "",
    contrasenia_usu: "",
    contrasenia_usu_rep: "",
    contrasenia_usu_rep: "",
    correo_usu: "",
    
  });
  // Estado para la validacion
  //! nombre
  const [validNombre, setValidNombre] = useState(false);
  const [inValidNombre, setInValidNombre] = useState(false);
  //! apellido
  const [validApellido, setValidApellido] = useState(false);
  const [inValidApellido, setInValidApellido] = useState(false);
  //! cedula
  const [validCedula, setValidCedula] = useState(false);
  const [inValidCedula, setInValidCedula] = useState(false);
  //! correo
  const [validCorreo, setValidCorreo] = useState(false);
  const [inValidCorreo, setInValidCorreo] = useState(false);
  //! contraseña
  const [validContrasenia, setValidContrasenia] = useState(false);
  const [inValidContrasenia, setInValidContrasenia] = useState(false);
  //! repetir contraseña
  const [validContraseniaRep, setValidContraseniaRep] = useState(false);
  const [inValidContraseniaRep, setInValidContraseniaRep] = useState(false);
  //!celular
  const [validCelular, setValidCelular] = useState(false);
  const [inValidCelular, setInValidCelular] = useState(false);
  //!direccion
  const [validDireccion, setValidDireccion] = useState(false);
  const [inValidDireccion, setInValidDireccion] = useState(false);

  // validar campos
  const guardarState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    guardarusuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });

    // Validaciones de los campos utilizando el estado
    // nombre
    if (usuario.nombre_usu == "") {
      setInValidNombre(true);
    } else if (
      expresiones.nombreApellido.test(usuario.nombre_usu) ||
      expresiones.nombreApellido.test(usuario.apellido_usu)
    ) {
      setInValidNombre(false);
      setValidNombre(true);
    } else {
      setInValidNombre(true);
      setValidNombre(false);
    }
    // apellido
    if (usuario.apellido_usu == "") {
      setInValidApellido(true);
    } else if (expresiones.nombreApellido.test(usuario.apellido_usu)) {
      setInValidApellido(false);
      setValidApellido(true);
    } else {
      setInValidApellido(true);
      setValidApellido(false);
    }
    // cedula
    if (usuario.id_usuario == "") {
      setInValidCedula(true);
    } else if (expresiones.cedula.test(usuario.id_usuario)) {
      setInValidCedula(false);
      setValidCedula(true);
    } else {
      setInValidCedula(true);
      setValidCedula(false);
    }
    //correo
    if (usuario.correo_usu == "") {
        setInValidCorreo(true);
      } else if (expresiones.correo.test(usuario.correo_usu)) {
        setInValidCorreo(false);
        setValidCorreo(true);
      } else {
        setInValidCorreo(true);
        setValidCorreo(false);
      }
    //contraseña
    if (usuario.contrasenia_usu == "") {
        setInValidContrasenia(true);
      } else if (expresiones.password.test(usuario.contrasenia_usu)) {
        setInValidContrasenia(false);
        setValidContrasenia(true);
      } else {
        setInValidContrasenia(true);
        setValidContrasenia(false);
      }
    //contraseña repetir
    if (usuario.contrasenia_usu_rep != usuario.contrasenia_usu) {
        setInValidContraseniaRep(true);      
    } else {
        setInValidContraseniaRep(false);
        setValidContraseniaRep(true);
     }
    //celular
    if (usuario.celular_usu == "") {
        setInValidCelular(true);
      } else if (expresiones.telefono.test(usuario.celular_usu)) {
        setInValidCelular(false);
        setValidCelular(true);
      } else {
        setInValidCelular(true);
        setValidCelular(false);
      }
    //direccion
    if (usuario.direccion_usu == "") {
        setInValidDireccion(true);
      } else if (expresiones.direccion.test(usuario.direccion_usu)) {
        setInValidDireccion(false);
        setValidDireccion(true);
      } else {
        setInValidDireccion(true);
        setValidDireccion(false);
      }
  };

  return (
    <div className="Registro">
      <Header />
      <div className="container">
        <div className="div-registro">
          <div className="imagen-registro">
            <div className="descripcion-regis text-center">
              <img src={logopng2} />

              <h4>
                Contamos con variedad de productos para el hogar a los mejores
                precios del mercado.
              </h4>
              <h6>Productos de temporada</h6>
              <h6>Cristalería</h6>
              <h6>Juguetería</h6>
              <h6>Plasticos y Desechables</h6>
            </div>
          </div>

          <div className="form-registro">
            <form
              
              onFocusCapture={guardarState}
              onClick={guardarState}
            >
              <div class="form-row">
                <div class="">
                  <label for="nombres">Nombres:</label>
                  <FormControl
                    isValid={validNombre}
                    isInvalid={inValidNombre}
                    type="text"
                    onChange={guardarState}
                    name="nombre_usu"
                    class="form-control"
                    id="nombres"
                    placeholder="Ingrese sus nombres"
                    required
                    autoFocus
                  />
                    <div class="invalid-feedback">
                        Solo letras de la A a la Z.
                    </div>
                </div>
              </div>
              <div class="form-row">
                <div class="">
                  <label for="apellidos">Apellidos:</label>
                  <FormControl
                    isValid={validApellido}
                    isInvalid={inValidApellido}
                    type="text"
                    onChange={guardarState}
                    name="apellido_usu"
                    class="form-control"
                    id="apellidos"
                    placeholder="Ingrese sus apellidos"
                    required
                  />
                    <div class="invalid-feedback">
                        Solo letras de la A a la Z.
                    </div>
                </div>
              </div>
              <div class="form-row">
                <div class="">
                  <label for="cedula">Número de Cédula:</label>
                  <FormControl
                    isValid={validCedula} 
                    isInvalid={inValidCedula}
                    type="text"
                    onChange={guardarState}
                    name="id_usuario"
                    class="form-control"
                    id="cedula"
                    placeholder="Ingrese la cédula o pasaporte"
                    required
                  />
                    <div class="invalid-feedback">
                        La cédula debe tener 10 números.
                    </div>
                </div>
              </div>
              <div class="form-row">
                <div class="">
                  <label for="correo">Correo Electrónico:</label>
                  <FormControl
                    isValid={validCorreo} 
                    isInvalid={inValidCorreo}
                    type="email"
                    onChange={guardarState}
                    name="correo_usu"
                    class="form-control"
                    id="correo"
                    placeholder="Ingrese su correo electrónico"
                    required
                  />
                    <div class="invalid-feedback">
                        El correo debe tener "@" y "."
                    </div>
                </div>
              </div>
              <div class="form-row">
                <div class="">
                  <label for="contrasenia-regis">Contraseña:</label>
                  <FormControl
                    isValid={validContrasenia} 
                    isInvalid={inValidContrasenia}
                    type="password"
                    onChange={guardarState}
                    name="contrasenia_usu"
                    class="form-control"
                    id="contrasenia-regis"
                    placeholder="Ingrese su contraseña"
                    required
                  />
                    <div class="invalid-feedback">
                        Mínimo 4 caracteres y máximo 20.
                    </div>
                </div>
              </div>
              <div class="form-row">
                <div class="">
                  <label for="contrasenia-regis-conf">
                    Repita su Contraseña:
                  </label>
                  <FormControl
                    isValid={validContraseniaRep} 
                    isInvalid={inValidContraseniaRep}
                    type="password"
                    onChange={guardarState}
                    name="contrasenia_usu_rep"
                    class="form-control"
                    id="contrasenia-regis-conf"
                    placeholder="Repita su contraseña"
                    required
                  />
                    <div class="invalid-feedback">
                        Las contraseñas no coinciden.
                    </div>
                </div>
              </div>
              <div class="form-row">
                <div class="">
                  <label for="celular">Celular:</label>
                  <FormControl
                    isValid={validCelular} 
                    isInvalid={inValidCelular}
                    type="text"
                    onChange={guardarState}
                    name="celular_usu"
                    class="form-control"
                    id="celular"
                    placeholder="Ingrese su número telefónico"
                    required
                  />
                    <div class="invalid-feedback">
                        Debe tener 10 números.
                    </div>
                </div>
              </div>
              <div class="form-row">
                <div class="">
                  <label for="convencional">Convencional:</label>
                  <FormControl
                    type="text"
                    onChange={guardarState}
                    name="convencional_usu"
                    class="form-control"
                    id="convencional"
                    placeholder="Ingrese su número convencional"
                    required
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    Este campo es opcional.
                  </small>
                </div>
              </div>
              <div class="form-row">
                <div class="">
                  <label for="direccion">Dirección:</label>
                  <FormControl
                    isValid={validDireccion} 
                    isInvalid={inValidDireccion}
                    type="text"
                    onChange={guardarState}
                    name="direccion_usu"
                    class="form-control"
                    id="direccion"
                    placeholder="Ej: Manta, Av.123 entre calle 12 y 13"
                    required
                  />
                  <div class="invalid-feedback">
                        No se aceptan caracteres especiales.
                    </div>
                  <small id="emailHelp" class="form-text text-muted">
                    La dirección se utilizará para las entregas por DELIVERY.
                  </small>
                </div>
              </div>
              <div class="form-row">
                <FormControl
                  className="btn my-3"
                  type="submit"
                  id="enviar-registro"
                  value="REGISTRARME"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Registro;
