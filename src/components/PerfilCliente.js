import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import clienteAxios from "../config/axios";
// import useAuth from "../auth/useAuth";
import {Card} from 'react-bootstrap';

function PerfilCliente() {
  const auth = JSON.parse(localStorage.getItem("dataUser"));
  const usuario_id = auth.id_usuario;

  //* Consultamos la API por los datos del usuario y facturas

  const [UsuarioData, setUsuarioData] = useState([]);
  const [UsuarioDataFact, setUsuarioDataFact] = useState([]);

  useEffect(() => {
    const consultarAPI = () => {
      //datos de usuario
      clienteAxios
        .get(`/usuarios/${usuario_id}`)
        .then((respuesta) => {
          // console.log(respuesta.data);

          // Guardar en el state el resultado
          setUsuarioData(respuesta.data);
        })
        .catch((error) => {
          console.log(error);
        });
      // datos de factura
      clienteAxios
        .get(`/facturas/${usuario_id}`)
        .then((respuesta) => {
          // console.log(respuesta.data);

          // Guardar en el state el resultado
          setUsuarioDataFact(respuesta.data);
        })
        .catch((error) => {
          console.log(error);
        });

    };
    consultarAPI();
    // }
  }, []);

//   estado para nombre de etiqueta segun la opcion seleccionada
const [etiqueta, setetiqueta] = useState('MIS FACTURAS')

//* funciones para el menu de opciones 
const misFacturas = e =>{
    e.preventDefault();
    setetiqueta('MIS FACTURAS')
}

const cambiarContrasenia = e => {
    e.preventDefault();
    setetiqueta('CAMBIAR CONTRASEÑA')
}

const eliminarCuenta = e => {
    e.preventDefault();
    setetiqueta('ELIMINAR CUENTA')
}

console.log(UsuarioDataFact);
  return (
    <div className="Perfil-Cliente">
      <Header />
      <div className="container contenedor-pefil-usuario">
        <div className="contenido-perfil">
          {/* Seccion de icono y menú de opciones  */}
          <div className="opciones-usuario">
            {/* imagen perfil  */}
            <div className="imagen">
              <ion-icon name="person-circle-outline"></ion-icon>
            </div>
            {/* menú  */}
            <div className="menu">
              <Link onClick={misFacturas}>Mis Facturas</Link>
              <Link onClick={cambiarContrasenia}>Cambiar Contraseña</Link>
              <Link onClick={eliminarCuenta} className="delete-cuenta">Eliminar Cuenta</Link>
            </div>
          </div>

          {/* Seccion de informacion del Usuario y muestra de componentes seleccionados  */}
          <div className="info-componentes">
            {/* informacion */}
                <div className="titulo-info-perfil-user">

                    <h4>DATOS DE USUARIO</h4>
                </div>
            <div className="informacion">
              <div className="labels">
                <label>
                  <strong>NOMBRES Y APELLIDOS:</strong> {UsuarioData.nombres}
                </label>
                <label>
                  <strong>NÚMERO DE CÉDULA:</strong> {UsuarioData.id_usuario}
                </label>
                <label>
                  <strong>CORREO ELECTRÓNICO:</strong> {UsuarioData.correo_usu}
                </label>
                <label>
                  <strong>NÚMERO DE TELEFONO:</strong> {UsuarioData.celular_usu}
                </label>
                <label>
                  <strong>DIRECCIÓN:</strong> {UsuarioData.direccion_usu}
                </label>
                <label>
                  <strong>TIPO DE USUARIO:</strong> {UsuarioData.tipo_usu}
                </label>
              </div>
            </div>
            {/* Componentes  */}
            <div className="titulo-info-perfil-user">

                    <h4>{etiqueta}</h4>
            </div>
            <div className="componentes">

                {etiqueta == 'ELIMINAR CUENTA' &&
                    <div className="text-center">
                        <h4>Eliminar Cuenta</h4>
                    </div>
                }

                {etiqueta == 'CAMBIAR CONTRASEÑA' &&
                    <div className="text-center">
                        <h4>CAMBIAR CONTRASEÑA</h4>
                    </div>
                }

                {etiqueta == 'MIS FACTURAS' &&
                <>
                {UsuarioDataFact.map(factura =>(

                    <div className="m-4">

                        <Card>
                          <Card.Header className="card-usuario-fac">
                            <p>Factura # 00 {factura.codigo_fac}</p>
                          </Card.Header>
                          <Card.Body  className="tarjeta-fact-cliente">
                            <div>
                            <strong><p>Fecha</p></strong>
                              <br/>
                              <p>{factura.fechaReg_fac}</p>

                            </div>
                            <div>
                              <strong><p>Cédula</p></strong>
                              <br/>
                              <p>{factura.id_usuario}</p>
                            </div>
                            <div>
                            <strong><p>URL Factura</p></strong>
                              <br/>
                              {/* <p></p> */}
                              {/* <Link to=></Link> */}
                              <a href={factura.url_fac} target="_blank">Ver Factura</a>
                            </div>
                            

                          </Card.Body>
                        </Card>
                    </div>
                ))}
                </>
                }

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PerfilCliente;
