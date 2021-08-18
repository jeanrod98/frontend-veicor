import React, { useState, useEffect } from 'react'

import Header from './Header';
import Footer from './Footer';

import { Link, useHistory } from "react-router-dom";
import {Card, Button, ListGroup, Form} from 'react-bootstrap'

import '../css/adminOpciones.css'
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

function AdminFacturas() {
    const history = useHistory();
    //guardar consultar
    const [guardarConsultar, setguardarConsultar] = useState(true)

    const [DataFactPendiente, setDataFactPendiente] = useState([]);

  useEffect(() => {
    if(guardarConsultar){
        const consultarAPI = () => {
            // datos de factura pendiente
            clienteAxios
              .get(`/facturas-pendientes`)
              .then((respuesta) => {
                // console.log(respuesta.data);
      
                // Guardar en el state el resultado
                setDataFactPendiente(respuesta.data);
                setguardarConsultar(false);
              })
              .catch((error) => {
                console.log(error);
              });
      
          };
          consultarAPI();
    }
    // }
  }, [guardarConsultar]);

//*actualizarEstadoFac
const actualizarEstadoFac = e =>{
    e.preventDefault();
    // const newEstado = document.querySelector('.select-card-lista').value
    // const url = document.querySelector('link-card-listado').href
    // const id_factura = document.querySelector('link-card-listado').href
    const elemento = e.target.parentElement.parentElement
    // console.log(elemento.querySelector('p').textContent);
    // console.log(elemento.querySelector('.cedula-card h6').textContent);
    // console.log(elemento.querySelector('.fecha-card h6').textContent);
    // console.log(elemento.querySelector('.estado-card select').value);
    // console.log(elemento.querySelector('.url-card a').href);
    const fecha = new Date();
    const fechaActual = fecha.toUTCString()

    const codigo_fac = parseInt(elemento.querySelector('p').textContent)
    const facturaActualizada = {
        // codigo_fac: parseInt(elemento.querySelector('p').textContent),
        // id_usuario: elemento.querySelector('.cedula-card h6').textContent,
        // url_fac: elemento.querySelector('.url-card a').href,
        // fechaReg_fac: fechaActual,
        estado_fac: elemento.querySelector('.estado-card select').value,

    }

    // console.log(facturaActualizada);
    clienteAxios.put(`/estado-factura/${codigo_fac}`, facturaActualizada)
    .then(respuesta => {
        console.log(respuesta);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'La factura se actualizó con éxito!',
            showConfirmButton: false,
            timer: 1500
          })
          setguardarConsultar(true)
        setTimeout(() => {
            history.push('/perfil-admin/facturas')
        }, 1550);
          
    })
    .catch(error => {
        console.log(error);
    })
  
    

}
const redireccionar = e => {
    e.preventDefault()
    const usuarioTipo = JSON.parse(localStorage.getItem('dataUser'))
    if(usuarioTipo.tipo_usu == 'Operativo'){
        history.push('/perfil-operativo')

    }else{
        history.push('/perfil-admin')
    }
}
    
    return (
        <div className="AdminFacturas">
            <Header/>
            <div className="container">

            <div>
                <Link onClick={redireccionar} className="btn-atras">
                    <ion-icon name="arrow-back-circle-outline"></ion-icon>
                </Link>
            </div>
            <div className="container contenedor-adminListFact">
                <div className="titulo-listado-facturas">
                    <ion-icon name="newspaper-outline"></ion-icon>
                    <h2>FACTURAS PENDIENTES</h2>
                </div>
                <div className="listado-facturas-pendientes">

                    {/* <div className="productos-noexisten">

                        <h1>No hay facturas para mostrar</h1>
                        <div className="text-center">

                            <ion-icon name="alert-circle-outline"></ion-icon>
                        </div>
                    </div> */}

                    {/* Cuando existen facturas con delivery se muestran  */}
                    {/* formato */}
                    <div className="contenedor-lista-fact">
                        {DataFactPendiente.map(factura => (

                        <Card className="card-lista-fact">
                        <Card.Body>
                            <Card.Title className="card-titulo-lista" >Factura # 00 <p>{factura.codigo_fac}</p></Card.Title>
                            <ListGroup className="contenido-fact">
                                <Card.Text className="cedula-card">
                                <strong>Cédula Cliente:</strong>
                                    <br />
                                    <h6>{factura.id_usuario}</h6>
                                </Card.Text>
                                <Card.Text className="fecha-card">
                                <strong>Fecha de Factura:</strong>
                                    <br />
                                    <h6>{factura.fechaReg_fac}</h6>
                                </Card.Text>
                                
                                <Card.Text className="estado-card">
                                <strong>Estado/Factura: </strong>
                                    <br />
                                    <select class="form-select select-card-lista">
                                        <option>{factura.estado_fac}</option>
                                        <option>Pagado (entregado)</option>
                                    </select>
                                </Card.Text>
                                <Card.Text className="url-card">
                                    <Card.Link className="link-card-listado" href={factura.url_fac} target="_blank">Ver Factura</Card.Link>
                                </Card.Text>
                                <Button className="btn-card-listado" onClick={actualizarEstadoFac}>Guardar Cambios</Button>
                            </ListGroup>
                        </Card.Body>
                        </Card>
                        ))}

                        
                    </div>
                

                </div>
                
            </div>
            </div>

            <Footer/>
            
        </div>
    )
}

export default AdminFacturas
