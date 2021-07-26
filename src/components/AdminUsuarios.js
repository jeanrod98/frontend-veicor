import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Card, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/adminOpciones.css";

function AdminUsuarios() {
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
                <Card.Body className="cards-body">
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
                  type="search"
                  class="search-input-usuarios form-control rounded"
                  placeholder="ID del Usuario..."
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <button id="btn-search-usuarios" type="button" class="btn">
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>

              
              <div className="agregarUsuarios">
                <Button className="btn-agregarUsuarios" >
                  Crear Usuarios
                </Button>
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
              <tr>
                <td>1314042563</td>
                <td>
                <td>Jean Carlos</td>
                </td>
                <td>Rodriguez Choez</td>
                <td>
                  jcrod.jc@gmail.com
                </td>
                <td>0998297705</td>
                <td>Administrador</td>
                <td>
                  <div className="opciones-tabla-usuario">
                    <Button className="btn btn-warning" >Modificar</Button>
                    <Button className="btn btn-danger">Eliminar</Button>
                  </div>
                </td>
              </tr>

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
