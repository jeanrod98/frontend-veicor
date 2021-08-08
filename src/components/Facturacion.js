import React from 'react'
import Header from './Header';
import Footer from './Footer';

import { Link } from "react-router-dom";
import {Form} from 'react-bootstrap'

import '../css/facturas.css'

function Facturacion() {

    const addProductFactura = e => {
        e.preventDefault()
        // console.log('Se agrego una seccion');

        const divPadre = document.getElementById('contenedor-producto-factura');

        const divHijo = document.createElement('div');
        divHijo.classList.add('producto-fact');
        divHijo.innerHTML=`
        <div class="tl-cod form-group" >
                                        
            <input class="form-control" type="text" placeholder="Ej: PROH098" />
        </div>

        <div class="tl-nom form-group" >
            
            <input class="form-control" type="text" disabled={true}/>
        </div>

        <div class="tl-des form-group" >
            
            <input class="form-control" type="text" disabled={true} />
        </div>

        <div class="tl-pre form-group" >
            
            <input class="in-pre form-control" type="text" disabled={true} />
        </div>

        <div class="tl-can form-group" >
            
            <input class="in-can form-control" type="text" disabled={true} />
        </div>
        
        `;
        divPadre.appendChild(divHijo);
        console.log('se esta insertando');

    }

    return (
        <div className="Facturacion">
            <Header/>
            <div className="container contenedor-fact">
                <div className="adminFactura-titulo">
                    <ion-icon name="newspaper-outline"></ion-icon>
                    <h2>FACTURACIÓN</h2>

                </div>
                <div className="container-adminFactura">

                    <div className="adminFactura">
                        {/* cabecera del cliente  */}
                        <div className="headerCliente">
                            <h4>DATOS DEL CLIENTE</h4>
                        </div>
                        <div className="datos-cliente">
                            {/* Buscador de cliente  */}
                            <div className="contenedor-buscador-fact">

                                <div class="buscador-cliente-factura input-group">
                                    <input type="search" class="search-input-cliente-fact form-control rounded" placeholder="ID del cliente..." aria-label="Search"
                                        aria-describedby="search-addon" />
                                    <button id="btn-search-cliente-fact" type="button" class="btn"><ion-icon name="search-outline"></ion-icon></button>
                                </div>
                            </div>
                            {/* Formulario del cliente  */}
                            <div className="form-cliente-fact">
                                
                                <Form className="form-factura-cliente">
                                    <Form.Group className="mx-3" controlId="form-fact-nombres">
                                        <Form.Label>Nombres Completos:</Form.Label>
                                        <Form.Control id="form-fact-nombres" type="text" placeholder="Ingrese los nombres" />                                        
                                    </Form.Group>

                                    <Form.Group className="mx-3" controlId="form-fact-cedula">
                                        <Form.Label>Cédula o Pasaporte:</Form.Label>
                                        <Form.Control id="form-fact-cedula" type="text" placeholder="Ingrese la cédula" />                                        
                                    </Form.Group>

                                    <Form.Group className="mx-3" controlId="form-fact-nombres">
                                        <Form.Label>Correo Electrónico:</Form.Label>
                                        <Form.Control id="form-fact-correo" type="email" placeholder="example@example.com" />                                        
                                    </Form.Group>

                                    <Form.Group className="mx-3" controlId="form-fact-direccion">
                                        <Form.Label>Dirección:</Form.Label>
                                        <Form.Control id="form-fact-direccion" type="text" placeholder="Manta, Calle 123 Av.23" />
                                    </Form.Group>

                                    <Form.Group className="mx-3" controlId="form-fact-telf">
                                        <Form.Label>Número de Tlf:</Form.Label>
                                        <Form.Control id="form-fact-telf" type="text" placeholder="Ej: 099999999" />
                                    </Form.Group>

                                
                                
                                </Form>

                            </div>

                        </div>

                        
                        {/* cabecera del producto  */}
                        <div className="headerProducto">
                            <h4>DATOS DE LA FACTURA</h4>
                        </div>
                        <div className="datos-producto">

                            <div id="contenedor-producto-factura" className="contenedor-producto-factura">
                                <div className="titulos-productos-fact">
                                    <h5 className="tl-cod">Código</h5>
                                    <h5 className="tl-nom">Nombre</h5>
                                    <h5 className="tl-des">Descripción Corta</h5>
                                    <h5 className="tl-pre">Precio Unitario</h5>
                                    <h5 className="tl-can">Cantidad</h5>


                                </div>
                                
                                <div className="producto-fact">

                                    <Form.Group className="tl-cod" >
                                        {/* <Form.Label>Código:</Form.Label> */}
                                        <Form.Control type="text" placeholder="Ej: PROH098" />
                                    </Form.Group>

                                    <Form.Group className="tl-nom" >
                                        {/* <Form.Label>Nombre:</Form.Label> */}
                                        <Form.Control type="text" disabled={true}/>
                                    </Form.Group>

                                    <Form.Group className="tl-des" >
                                        {/* <Form.Label>Descripción:</Form.Label> */}
                                        <Form.Control type="text" disabled={true} />
                                    </Form.Group>

                                    <Form.Group className="tl-pre" >
                                        {/* <Form.Label>Precio Unitario:</Form.Label> */}
                                        <Form.Control className="in-pre" type="text" disabled={true} />
                                    </Form.Group>

                                    <Form.Group className="tl-can" >
                                        {/* <Form.Label>Precio Unitario:</Form.Label> */}
                                        <Form.Control className="in-can" type="text" disabled={true} />
                                    </Form.Group>
                                </div>
                           

                            </div>
                            {/* Boton para agregar mas productos */}
                            <div className="footer-producto-fact">

                                <div className="btn-addProducto-fact" onClick={addProductFactura}>
                                    <ion-icon name="add-circle-outline"></ion-icon>
                                    <h4>Agregar más productos</h4>
                                </div>
                            </div>

                        </div>

                        {/* totales  */}
                        <div className="totalFactura">
                            <div className="btn-impimir-factura">
                                {/* <button className="btn btn-generar-fact">
                                    ENVIAR FACTURA POR CORREO
                                </button> */}
                                
                                <button className="btn btn-generar-fact mx-4">
                                    IMPRIMIR FACTURA
                                </button>

                              

                                
                            </div>
                            <div className="contenedor-totales">

                                <div className="subtotal-factura">
                                    <h4>SUBTOTAL:</h4>
                                    <div className="alineacion">
                                        <h4>100</h4>
                                    </div>
                                </div>
                                <div className="impuesto-factura">
                                    <h4>IMPUESTOS:</h4>
                                    <div className="alineacion">
                                        <h4>12%</h4>
                                    </div>
                                </div>
                                <div className="total-factura">
                                    <h1>TOTAL:</h1>
                                    <div className="alineacion">
                                        <h1>112</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        



                    </div>

                </div>

            </div>

            <Footer/>
            
            
        </div>
    )
}

export default Facturacion
