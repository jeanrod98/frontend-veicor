import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Form, FormControl, Button } from "react-bootstrap";
import {Link, useParams} from 'react-router-dom'
import { useEffect } from "react";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

function UsuariosCRUD() {
  
  const {id} =  useParams()
  // console.log(id);
  // traer el usuario de la bd 
   //estado para habilitar el boton
   const [btnHabilitar, setbtnHabilitar] = useState(true)
    //nuevo estado para el usuario encontrado
  const [usuarioFiltrado, setusuarioFiltrado] = useState([])
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
    tipo_usu: "",
  });
  useEffect( ()  => {
    // if(productos){

      if(id !== 'newUser' ){
      const consultarAPI = () => {
         clienteAxios
          .get(`/usuarios/${id}`)
          .then((respuesta) => {
            // console.log(respuesta.data);
            
            // Guardar en el state el resultado
            setusuarioFiltrado(respuesta.data);
            // guardarusuario({
            //   ...usuario,
            //   id_usuario: respuesta.data.id_usuario,             
            //   nombre_usu: respuesta.data.nombre_usu,
            //   apellido_usu: respuesta.data.apellido_usu,
            //   direccion_usu: respuesta.data.direccion_usu,
            //   celular_usu: respuesta.data.celular_usu,
            //   convencional_usu: respuesta.data.convencional_usu,
            //   contrasenia_usu: respuesta.data.contraseña_usu,
            //   correo_usu: respuesta.data.correo_usu,
            //   tipo_usu: respuesta.data.tipo_usu,
            // });
          })
          .catch((error) => {
            console.log(error);
            console.log('error en la consulta');
          });
        };
        consultarAPI();
        
      }
      // }
    }, []);

  const expresiones = {
    nombreApellido: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,20}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10}$/, // 10 numeros.
    cedula: /^\d{10}$/, // 10 numeros.
    // celular: /^\d{10}$/, // 10 numeros.
    direccion: /^[a-zA-ÿ]+,[a-zA-Z0-9-\s]+.[a-zA-Z0-9-\s]{9,40}/, //direccion
  };

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
    // setbtnHabilitar(false)
    
  };
  
  //guardarUsuario
  const guardarUsuario = e => {
    e.preventDefault();
    //validamos que sea insertar o actualizar
    console.log(usuarioFiltrado.length == 0);
    if (usuarioFiltrado.length == 0){
      //preguntar si quiere guarda el registro
      //insertar 
      Swal.fire({
        title: 'Guardar Cambios?',
        text: "Se agregará un nuevo usaurio en la base de datos!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f05416',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Guardar!'
      }).then((result) => {
        if (result.isConfirmed) {
  //se envian los datos del usuario
          clienteAxios.post('/usuarios', usuario)
          .then(res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'El usuario fue agregado!.',
              showConfirmButton: false,
              timer: 1500
            })
            
      
          })
          .catch(error => {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Error de Usuario',
              text: 'El Usuario no fue agregado, asegurese de llenar bien el formulario.',
              confirmButtonColor: "#f05416",
              
            })
          })
        }
      })

    }else{
      //update Actualizar

//preguntar si quiere guarda el registro
     
Swal.fire({
  title: 'Guardar Cambios?',
  text: "Los cambios no se podran revertir!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#f05416',
  cancelButtonColor: '#d33',
  cancelButtonText: 'Cancelar',
  confirmButtonText: 'Guardar!'
}).then((result) => {
  if (result.isConfirmed) {
//se envian los datos del usuario
    clienteAxios.put(`/usuarios/${id}`, usuario)
    .then(res => {
      console.log(res);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Los datos del usuario fueron actualizados!.',
        showConfirmButton: false,
        timer: 1500
      })
      

    })
    .catch(error => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error de Actualización',
        text: 'Los datos no se actualizaron.',
        confirmButtonColor: "#f05416",
        
      })
    })
  }
})

      
    }
  }
  return (
    <div className="UsuariosCRUD" onMouseMove={guardarState}>
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
                onChange={guardarState}
                className="form-crud-usuario"
                
              >
                <Form.Group className="contenido-form-usuario-crud">
                  <Form.Label>N. Cédula:</Form.Label>
                  <div>
                    <FormControl
                      isValid={validCedula}
                      isInvalid={inValidCedula}
                      type="text"
                      defaultValue={usuarioFiltrado.id_usuario}
                      onChange={guardarState}
                      // onMouseMoveCapture={guardarState}
                      // onFocusCapture={guardarState}
                      name="id_usuario"
                      class="form-control"
                      id="cedula"
                      placeholder="Ingrese la cédula o pasaporte"
                      // autoFocus
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
                      // onMouseMoveCapture={guardarState}
                      defaultValue={usuarioFiltrado.nombre_usu}
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
                      defaultValue={usuarioFiltrado.apellido_usu}
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
                      defaultValue={usuarioFiltrado.direccion_usu}
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
                      defaultValue={usuarioFiltrado.convencional_usu}
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
                      defaultValue={usuarioFiltrado.celular_usu}
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
                      defaultValue={usuarioFiltrado.correo_usu}
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
                      defaultValue={usuarioFiltrado.contraseña_usu}
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
                    // disabled={true}
                    // defaultValue={usuario.tipo_usu}
                  >
                    {usuarioFiltrado.tipo_usu == 'Cliente' 
                    &&
                    <option value={usuarioFiltrado.tipo_usu} >{usuarioFiltrado.tipo_usu}</option>                  
                    
                    }
                    {usuarioFiltrado.tipo_usu == 'Operativo' 
                    &&
                    <>
                    <option value={usuarioFiltrado.tipo_usu} >{usuarioFiltrado.tipo_usu}</option> 
                    <option value="Administrador" >Administrador</option>                  
                    </>
                    
                    }
                    {usuarioFiltrado.tipo_usu === 'Administrador' 
                    &&
                    <>
                    <option value={usuarioFiltrado.tipo_usu} >{usuarioFiltrado.tipo_usu}</option> 
                    <option value="Operativo" >Operativo</option>                  
                    </>
                    
                    }
                    {!usuarioFiltrado.tipo_usu  
                    &&
                    <>
                    <option value="Operativo" >Operativo</option>                  
                    <option value="Administrador" >Administrador</option>  
                    </>
                    
                    }
                  </select>
                </Form.Group>
              </Form>
            </div>
            <div className="btn-usuarios-crud">
              <Button  onClick={guardarUsuario}>Guardar</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UsuariosCRUD;
