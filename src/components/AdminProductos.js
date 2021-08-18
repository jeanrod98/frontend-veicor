import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import {Card, Button, Table} from 'react-bootstrap';
import img from '../assets/imguso.jpg'
import { Link, useHistory, withRouter } from "react-router-dom";

import '../css/adminOpciones.css'
import Swal from 'sweetalert2';
import clienteAxios from '../config/axios';

function AdminProductos({productos, setguardarConsulta}) {

    const history = useHistory();

    // console.log(productos);
    //estado para capturar el input de busqueda
    const [filtrar, setFiltrar] = useState({
        buscar: ''
    })
    
    const inputFiltrar = e =>{
        e.preventDefault()
        setFiltrar({
            ...filtrar,
            buscar: e.target.value,
        })
        if(e.target.value == ''){

            setresultadoProducto([]);
        }
    }
    
    //estado para mostrar el producto
    const [resultadoProducto, setresultadoProducto] = useState([])

    const filtrarProductos  = e =>{
        e.preventDefault()
        const filtrarValue = filtrar.buscar
        if(filtrarValue != ''){
            //realizamos el filtrado
            // console.log(filtrarValue);
            const result = productos.filter((producto) => producto.id_producto === filtrarValue);
            //validar el resultado
            if(result.length > 0){

                // console.log(result);
                setresultadoProducto(result) 
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Producto Invalido',
                    text: 'EL producto ingresado no existe en la Base de Datos!',
                    confirmButtonColor: "#f05416"
                    
                  })
            }
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error de Busqueda',
                text: 'EL campo de busqueda esta vacío, por favor introdusca un código de producto!',
                confirmButtonColor: "#f05416"
                
              })
        }

    } 
    //Insertar Productos
    const insertarProductos = e => {
        e.preventDefault();
        history.push('/perfil-admin/productos/CRUD/newProduct')

    }
    //Modificar productos
    const modificarProductos = e => {
        e.preventDefault();
        const elementoPadre = e.target.parentElement.parentElement.parentElement;
        const idProducto = elementoPadre.querySelector('td').textContent

        // console.log();
        history.push(`/perfil-admin/productos/CRUD/${idProducto}`)
        

    }
    //Eliminar productos
    const eliminarProductos = async e => {
        e.preventDefault();
        const elementoPadre = e.target.parentElement.parentElement.parentElement;
        const idProducto = elementoPadre.querySelector('td').textContent
        console.log(idProducto);
        // alerta para confirmar la eliminacion
        Swal.fire({
            title: 'Eliminar Producto?',
            text: "Una vez eliminado no se podra recuperar el producto...",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#f05416',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                //axios para eliminar el producto
              clienteAxios.delete(`/productos-delete/${idProducto}`)
              .then(res => {
                console.log(res.data.msg);
                
                setguardarConsulta(true)
                               
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'El producto fue eliminado con éxito!.',
                  showConfirmButton: false,
                  timer: 1500
                })
                
                
              })
              .catch(error => {
                console.log(error);
                Swal.fire({
                icon: 'error',
                title: 'Error de Eliminación',
                text: 'No se pudo eliminar el producto de la base de datos!.',
                confirmButtonColor: "#f05416",
                
              })
              })
       
              
            }
          })
       
    }

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
                                    <input onChange={inputFiltrar} type="search" class="search-input-productos form-control rounded" placeholder="Código de Producto..." aria-label="Search"
                                        aria-describedby="search-addon" />
                                    <button onClick={filtrarProductos} id="btn-search-productos" type="button" class="btn"><ion-icon name="search-outline"></ion-icon></button>
                                </div>

                        {/* </div> */}

                        {/* <div className="agregar-productos"> */}
                            <div className="agregarProducto">
                                <Button onClick={insertarProductos} className="btn-agregarProductos">Agregar Productos</Button>
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

                        {resultadoProducto.length > 0 
                        ? 
                        <>
                        {resultadoProducto.map(product => (

                        <tr>
                        <td>{product.id_producto}</td>
                        <td><img src={product.imagen_produc} width="100" height="auto" alt="" /></td>
                        <td>{product.nombre_produc}</td>
                        <td>{product.descripcion_produc}</td>
                        <td>{product.precio_produc}</td>
                        <td>{product.cantidad_produc}</td>
                        <td >
                            <div className="opciones-tabla">
                                <Button onClick={modificarProductos} className="btn btn-warning">Modificar</Button>
                                <Button onClick={eliminarProductos}  className="btn btn-danger">Eliminar</Button>
                            </div>
                        </td>                        
                        
                        </tr>
                        ))}
                        </>

                        :
                        <>
                        {productos.map(producto => (

                            <tr>
                            <td>{producto.id_producto}</td>
                            <td><img src={producto.imagen_produc} width="100" height="auto" alt="" /></td>
                            <td>{producto.nombre_produc}</td>
                            <td>{producto.descripcion_produc}</td>
                            <td>{producto.precio_produc}</td>
                            <td>{producto.cantidad_produc}</td>
                            <td >
                                <div className="opciones-tabla">
                                    <Button onClick={modificarProductos} className="btn btn-warning">Modificar</Button>
                                    <Button onClick={eliminarProductos} className="btn btn-danger">Eliminar</Button>
                                </div>
                            </td>                        
                            
                            </tr>

                            ))}
                        </>
                        }
                        
                        
                    </tbody>
                    </Table>
                </div>
                

            
            </div>
            <Footer/>
        </div>
    )
}

export default withRouter(AdminProductos)

