import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Card, Button, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import "../css/adminOpciones.css";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

function AdminUsuarios() {
  const history = useHistory();

  //estado para capturar el input de busqueda
  const [filtrar, setFiltrar] = useState({
    buscar: "",
  });

  //estado para mostrar el usuario
  const [resultadoUsuario, setresultadoUsuario] = useState([]);

  const inputFiltrar = (e) => {
    e.preventDefault();
    setFiltrar({
      ...filtrar,
      buscar: e.target.value,
    });
    if (e.target.value == "") {
      setresultadoUsuario([]);
    }
  };

  //estado para los usuarios
  const [usuarios, setUsuarios] = useState([]);
  const [guardarConsulta, setguardarConsulta] = useState(true)
  useEffect(() => {
    // if(productos){
    // if(id !== 'newProduct' ){
    const consultarAPI = () => {
      clienteAxios
        .get(`/usuarios`)
        .then((respuesta) => {
          // console.log(respuesta.data);

          // Guardar en el state el resultado
          setUsuarios(respuesta.data);
          setguardarConsulta(false)
        })
        .catch((error) => {
          console.log(error);
          console.log("error en la consulta");
        });
    };
    consultarAPI();
    // }
    // }
  }, [guardarConsulta]);
  const filtrarUsuarios = (e) => {
    e.preventDefault();
    const filtrarValue = filtrar.buscar;
    if (filtrarValue != "") {
      //realizamos el filtrado
      // console.log(filtrarValue);
      const result = usuarios.filter(
        (usuario) => usuario.id_usuario === filtrarValue
      );
      //validar el resultado
      if (result.length > 0) {
        // console.log(result);
        setresultadoUsuario(result);
      } else {
        Swal.fire({
          icon: "error",
          title: "Usuario Invalido",
          text: "EL usuario ingresado no existe en la Base de Datos!",
          confirmButtonColor: "#f05416",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error de Busqueda",
        text: "EL campo de busqueda esta vacío, por favor introdusca la cédula de un usuario!",
        confirmButtonColor: "#f05416",
      });
    }
  };
   //Insertar Productos
   const insertarUsuario = e => {
    e.preventDefault();
    history.push('/perfil-admin/usuarios/CRUD/newUser')

}
  //Modificar usuarios
  const modificarUsuarios = (e) => {
    e.preventDefault();
    const elementoPadre = e.target.parentElement.parentElement.parentElement;
    const idUsuario = elementoPadre.querySelector("td").textContent;

    // console.log();
    history.push(`/perfil-admin/usuarios/CRUD/${idUsuario}`);
  };

  //Eliminar usuarios
  const eliminarUsuarios = async (e) => {
    e.preventDefault();
    const elementoPadre = e.target.parentElement.parentElement.parentElement;
    const idUsuario = elementoPadre.querySelector("td").textContent;
    console.log(idUsuario);
    // alerta para confirmar la eliminacion
    Swal.fire({
      title: "Eliminar Usuario?",
      text: "Una vez eliminado no se podra recuperar el usuario...",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#f05416",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        //axios para eliminar el producto
        clienteAxios.delete(`/usuario-delete/${idUsuario}`)
        .then(res => {
          console.log(res.data.msg);

          // setguardarConsulta(true)
          setguardarConsulta(true)

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El usuario fue eliminado con éxito!.',
            showConfirmButton: false,
            timer: 1500
          })

        })
        .catch(error => {
          console.log(error);
          Swal.fire({
          icon: 'error',
          title: 'Error de Eliminación',
          text: 'No se pudo eliminar el usuario de la base de datos!.',
          confirmButtonColor: "#f05416",

        })
        })
        // console.log("eliminado");
      }
    });
  };

  return (
    <div className="AdminUsuarios">
      <Header />
      <div className="container ">
        {/* Seccion de titulo y busqueda   */}
        <div>
          <Link to="/perfil-admin" className="btn-atras">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </Link>
        </div>
        <div className="container-adminUsuarios">
          <div className="usuarios-busqueda">
            <div className="tarjeta-usuario">
              <Card className="cards text-center">
                <Card.Body className="cards-body card-bodyAdmin">
                  <Card.Title className="cards-title">USUARIOS</Card.Title>
                </Card.Body>
                <div className="img-usuario">
                  <ion-icon name="person-add-outline"></ion-icon>
                </div>
              </Card>
            </div>

            <div className="buscador-addUsers">
              {/* <div className="buscador"> */}

              <div class="buscador-usuarios input-group">
                <input
                  onChange={inputFiltrar}
                  type="search"
                  class="search-input-usuarios form-control rounded"
                  placeholder="ID del Usuario..."
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <button
                  onClick={filtrarUsuarios}
                  id="btn-search-usuarios"
                  type="button"
                  class="btn"
                >
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>

              <div className="agregarUsuarios">
                <Button onClick={insertarUsuario} className="btn-agregarUsuarios">Crear Usuarios</Button>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* Seccion de los usuarios  */}
        <div className="usuarios-listado">
          <div className="titulo">
            <h2>TABLA DE USUARIOS</h2>
          </div>

          <Table responsive className="tabla-usuarios" bordered hover>
            <thead>
              <tr>
                <th>ID USUARIO</th>
                <th>NOMBRES</th>
                <th>APELLIDOS</th>
                <th>CORREO ELECTRÓNICO</th>
                <th>CELULAR</th>
                <th>TIPO DE USUARIO</th>
                <th>OPCIONES</th>
              </tr>
            </thead>
            <tbody>
              {resultadoUsuario.length > 0 ? (
                <>
                  {resultadoUsuario.map((user) => (
                    <tr>
                      <td>{user.id_usuario}</td>
                      <td>
                        <td>{user.nombre_usu}</td>
                      </td>
                      <td>{user.apellido_usu}</td>
                      <td>{user.correo_usu}</td>
                      <td>{user.celular_usu}</td>
                      <td>{user.tipo_usu}</td>
                      <td>
                        <div className="opciones-tabla-usuario">
                          <Button
                            onClick={modificarUsuarios}
                            className="btn btn-warning"
                          >
                            Modificar
                          </Button>
                          <Button
                            onClick={eliminarUsuarios}
                            className="btn btn-danger"
                          >
                            Eliminar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  {usuarios.map((usuario) => (
                    <tr>
                      <td>{usuario.id_usuario}</td>
                      <td>
                        <td>{usuario.nombre_usu}</td>
                      </td>
                      <td>{usuario.apellido_usu}</td>
                      <td>{usuario.correo_usu}</td>
                      <td>{usuario.celular_usu}</td>
                      <td>{usuario.tipo_usu}</td>
                      <td>
                        <div className="opciones-tabla-usuario">
                          <Button
                            onClick={modificarUsuarios}
                            className="btn btn-warning"
                          >
                            Modificar
                          </Button>
                          <Button
                            onClick={eliminarUsuarios}
                            className="btn btn-danger"
                          >
                            Eliminar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}

              {/* <tr>
                        <td>#</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>
                            <div className="opciones-tabla">
                                <Button className="btn btn-warning">Modificar</Button>
                                <Button className="btn btn-danger">Eliminar</Button>
                            </div>
                        </td>                        
                        
                        </tr> */}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminUsuarios;
