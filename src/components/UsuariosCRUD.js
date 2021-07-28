import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Form, FormControl, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

function UsuariosCRUD() {
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
    correo_usu: "",
    tipo_usu: "Operativo",
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
    <div className="UsuariosCRUD">
      <Header />
      <div className="container contenedor-usuarios-crud">
        <div className="crud-contenido">
          <div>
            <Link to="/perfil-admin/usuarios" className="btn-atras">
              <ion-icon name="arrow-back-circle-outline"></ion-icon>
            </Link>
          </div>
          <div className="titulo-crud">
            <ion-icon name="create-outline"></ion-icon>
            <h2>CRUD DE USUARIOS</h2>
          </div>
          {/* SECCION 1  */}
          <div className="crud-seccion-usuarios">
            {/* seccion imagen producto  */}
            <div className="img-crud-usuarios">
              <ion-icon name="person-circle-outline"></ion-icon>
            </div>
            {/* seccion detalles usuarios  */}
            <div className="detalles-crud-usuarios">
              <Form
                onFocusCapture={guardarState}
                onClick={guardarState}
                className="form-crud-usuario"
              >
                <Form.Group className="contenido-form-usuario-crud">
                  <Form.Label>N. Cédula:</Form.Label>
                  <div>
                    <FormControl
                      isValid={validCedula}
                      isInvalid={inValidCedula}
                      type="text"
                      onChange={guardarState}
                      name="id_usuario"
                      class="form-control"
                      id="cedula"
                      placeholder="Ingrese la cédula o pasaporte"
                      autoFocus
                      required
                    />
                    <div class="invalid-feedback">
                      La cédula debe tener 10 números.
                    </div>
                  </div>
                </Form.Group>

                <Form.Group className="contenido-form-usuario-crud">
                  <Form.Label>Nombres:</Form.Label>

                  <div>
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
                    />
                    <div class="invalid-feedback">
                      Solo letras de la A a la Z.
                    </div>
                  </div>
                </Form.Group>

                <Form.Group className="contenido-form-usuario-crud">
                  <Form.Label>Apellidos:</Form.Label>
                  <div>
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
                </Form.Group>

                <Form.Group className="contenido-form-usuario-crud">
                  <Form.Label>Dirección:</Form.Label>
                  <div>
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
                  </div>
                </Form.Group>

                <Form.Group className="contenido-form-usuario-crud">
                  <Form.Label>Convencional:</Form.Label>
                  <div>
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
                </Form.Group>

                <Form.Group className="contenido-form-usuario-crud">
                  <Form.Label>N. Celular:</Form.Label>
                  <div>
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
                    <div class="invalid-feedback">Debe tener 10 números.</div>
                  </div>
                </Form.Group>

                <Form.Group className="contenido-form-usuario-crud">
                  <Form.Label>Correo Electrónico:</Form.Label>
                  <div>
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
                </Form.Group>
                <Form.Group className="contenido-form-usuario-crud">
                  <Form.Label>Contraseña:</Form.Label>
                  <div>
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
                </Form.Group>
                <Form.Group className="contenido-form-usuario-crud">
                  <Form.Label>Tipo de Usuario:</Form.Label>

                  <select
                    className="form-select select-crud-usuarios"
                    name="tipo_usu"
                    id="tipo_usu"
                    onSelect={guardarState}
                  >
                    <option value="Operativo">Operativo</option>
                    <option value="Administrador">Administrador</option>
                  </select>
                </Form.Group>
              </Form>
            </div>
            <div className="btn-usuarios-crud">
              <Button>Guardar</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UsuariosCRUD;
