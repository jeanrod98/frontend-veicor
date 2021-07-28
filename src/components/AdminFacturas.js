import React from 'react'
import Header from './Header';
import Footer from './Footer';

import { Link } from "react-router-dom";
import {Card, Button, ListGroup, Form} from 'react-bootstrap'

import '../css/adminOpciones.css'

function AdminFacturas() {


    
    return (
        <div className="AdminFacturas">
            <Header/>
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
                        <Card className="card-lista-fact">
                        <Card.Body>
                            <Card.Title className="card-titulo-lista" >Factura #0001</Card.Title>
                            <ListGroup className="contenido-fact">
                                <Card.Text>
                                <strong>Nombres:</strong>
                                    <br />
                                    Jean Carlos Rodriguez Choez
                                </Card.Text>
                                <Card.Text>
                                <strong>Producto:</strong>
                                    <br />
                                    Olla unco dos piezas
                                </Card.Text>
                                
                                <Card.Text>
                                <strong>Estado/Factura: </strong>
                                    <br />
                                    <select class="form-select select-card-lista">
                                        <option>Pendiente Entrega</option>
                                        <option>Entregado</option>
                                    </select>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link className="link-card-listado" href="#">Ver Factura</Card.Link>
                                </Card.Text>
                                <Button className="btn-card-listado">Guardar Cambios</Button>
                            </ListGroup>
                        </Card.Body>
                        </Card>

                        <Card className="card-lista-fact">
                        <Card.Body>
                            <Card.Title className="card-titulo-lista">Factura #0001</Card.Title>
                            <ListGroup className="contenido-fact">
                                <Card.Text>
                                <strong>Nombres:</strong>
                                    <br />
                                    Jean Carlos Rodriguez Choez
                                </Card.Text>
                                <Card.Text>
                                <strong>Producto:</strong>
                                    <br />
                                    Olla unco dos piezas
                                </Card.Text>
                                
                                <Card.Text>
                                <strong>Estado/Factura: </strong>
                                    <br />
                                    <select class="form-select select-card-lista">
                                        <option>Pendiente Entrega</option>
                                        <option>Entregado</option>
                                    </select>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link className="link-card-listado" href="#">Ver Factura</Card.Link>
                                </Card.Text>
                                <Button className="btn-card-listado">Guardar Cambios</Button>
                            </ListGroup>
                        </Card.Body>
                        </Card>

                        

                    </div>
                

                </div>
                
            </div>

            <Footer/>
            
        </div>
    )
}

export default AdminFacturas
