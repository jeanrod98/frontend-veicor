import React from 'react'
import Header from './Header';
import Footer from './Footer';
import {Card, Button, Table} from 'react-bootstrap';
import img from '../assets/imguso.jpg'
import { Link } from "react-router-dom";

import '../css/adminOpciones.css'
function AdminProductos() {
    return (
        <div className="AdminProductos">
            <Header/>
            <div className="container">

                {/* Seccion de titulo y busqueda   */}
                <div>
                    <Link to="/perfil-admin" className="btn-atras">
                        <ion-icon name="arrow-back-circle-outline"></ion-icon>
                    </Link>
                </div>
                <div className="container-adminProductos">

                    <div className="productos-busqueda">

                        <div className="tarjeta-producto">
                            <Card className='cards text-center'>
                                
                                <Card.Body className='cards-body card-bodyAdmin'>
                                    <Card.Title className='cards-title'>PRODUCTOS</Card.Title>
                                    
                                </Card.Body>
                                <div className="img-producto"><ion-icon name="storefront-outline"></ion-icon></div>
                            </Card>

                        </div>

                        <div className="buscador-addProducts">

                        {/* <div className="buscador"> */}
                        
                                <div class="buscador-productos input-group">
                                    <input type="search" class="search-input-productos form-control rounded" placeholder="Código de Producto..." aria-label="Search"
                                        aria-describedby="search-addon" />
                                    <button id="btn-search-productos" type="button" class="btn"><ion-icon name="search-outline"></ion-icon></button>
                                </div>

                        {/* </div> */}

                        {/* <div className="agregar-productos"> */}
                            <div className="agregarProducto">
                                <Button className="btn-agregarProductos">Agregar Productos</Button>
                            </div>
                        {/* </div> */}

                        </div>
                    </div>
                </div>

                {/* Seccion de los productos  */}
                <div className="productos-listado">
                    <div className="titulo">

                        <h2>TABLA DE PRODUCTOS</h2>
                    </div>
                
                <Table responsive className="tabla-productos" bordered hover>
                    <thead>
                        <tr>
                        <th>CÓDIGO</th>
                        <th>IMAGEN</th>
                        <th>NOMBRE</th>
                        <th>DESCRIPCIÓN</th>
                        <th>PRECIO</th>
                        <th>STOCK</th>
                        <th>OPCIONES</th>

                        
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>PH009D8D</td>
                        <td><img src={img} width="100" height="auto" alt="" /></td>
                        <td>Ollas de Metal Unco</td>
                        <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur atque itaque laborum quidem hic modi. Assumenda quibusdam iusto numquam magnam adipisci, ratione, placeat, quae exercitationem ipsam sit aut ad.</td>
                        <td>$5.99</td>
                        <td>100</td>
                        <td >
                            <div className="opciones-tabla">
                                <Button className="btn btn-warning">Modificar</Button>
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
            <Footer/>
        </div>
    )
}

export default AdminProductos

