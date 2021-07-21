import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../css/perfiles.css'
import {Card, Button} from 'react-bootstrap'

function PerfilAdmin() {


    return (
        <div className="PerfilAdmin">
            <Header/>
            <div className="container">
                <h2>Bienvenido Administrador</h2>


                <div className="opciones-admin text-center">
                    <div className="perfil-titulo">

                        <h3>PANEL DE ADMINISTRACIÓN</h3>
                    </div>

                    <div className="opciones">

                        <div className="opciones-productos">
                            <Card className='cards'>
                                <div className="img-producto"><ion-icon name="storefront-outline"></ion-icon></div>
                                <Card.Body className='cards-body'>
                                    <Card.Title className='cards-title'>PRODUCTOS EN TIENDA</Card.Title>
                                    <Card.Text >
                                        Ingresar - Consultar - Actualizar - Eliminar
                                    </Card.Text>
                                    <Button className="btn btn-adminOpciones">Administrar Productos</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    

                        <div className="opciones-usuarios">
                            <Card className='cards'>
                                <div className="img-usuario"><ion-icon name="person-add-outline"></ion-icon></div>
                                <Card.Body className='cards-body'>
                                    <Card.Title className='cards-title'>USUARIOS REGISTRADOS</Card.Title>
                                    <Card.Text >
                                        Ingresar - Consultar - Actualizar - Eliminar
                                    </Card.Text>
                                    <Button className="btn btn-adminOpciones">Administrar Usuarios</Button>
                                </Card.Body>
                            </Card>

                        </div>

                        <div className="opciones-facturas">
                            <Card className='cards'>
                                <div className="img-factura"><ion-icon name="reader-outline"></ion-icon></div>
                                <Card.Body className='cards-body'>
                                    <Card.Title className='cards-title'>FACTURAS PENDIENTES</Card.Title>
                                    <Card.Text >
                                        Facturas pendientes de entrega por DELIVERY
                                    </Card.Text>
                                    <Button className="btn btn-adminOpciones">Revisar Facturas</Button>
                                </Card.Body>
                            </Card>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            
        </div>
    )
}

export default PerfilAdmin
