import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, withRouter, useHistory } from "react-router-dom";
import {useState} from 'react';
import "../css/carrito.css";
import logo from '../assets/logos/logopng2.png';
import Swal from 'sweetalert2';
import {Modal, Button, Card, ListGroup, Form, FormControl, InputGroup, FormGroup} from 'react-bootstrap';

function Carrito(props) {

  const history = useHistory();

  const storageProducts = JSON.parse(localStorage.getItem('poductCarrito'));
  // console.log(storageProducts);

  // if(storageProducts == null){
  //   console.log('No hay productos');
  // }else{
  //   console.log('Si hay productos');
  // }

  const total_inpu = (5 * 0.12)+5;

  const detalles = {
    subtotal: 5,
    total: total_inpu,
  };

  
// Estado para el modal de transaccion 
  const [openModalTransaccion, setOpenModalTransaccion] = useState(false)

  // estado para el modal de terminos 
  const [openModalTerminos, setOpenModalTerminos] = useState(false)

  //* Funcion para vaciar el carrito de compras

  const vaciarCarrito = e => {
    e.preventDefault();
    // console.log('Se borro el carrito');
    if(storageProducts == null){
      // No hay productos para borrar
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puede vaciar el carrito de compras porque no hay productos en el.',
        confirmButtonColor: '#f05416',
        footer: '<a href="/catalogo">Te gustaría selecionar productos?</a>'
      })


    }else{
      Swal.fire({
        title: 'Estás seguro de vacíar el carrito de compras?',
        text: "Se perderan todos los productos seleccionados!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f05416',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sí, borrar todo!'
      }).then((result) => {
        if (result.isConfirmed) {

          localStorage.removeItem('poductCarrito');
          Swal.fire(
            'Productos Eliminados!',
            'Los productos fueron eliminados con éxito.',
            'success'
          )
          

        }
        history.push('/carrito');
      })
      
    }
  }

  return (
    <div className="Carrito">
      <Header />

      <div className="container">
        <div className="carrito-logo">
          <ion-icon name="cart-outline"></ion-icon>
          <div>
            <h1>Carrito de Compras</h1>
          </div>
        </div>

        <div className="carrito-productos">
          {/* Detalle de los Productos  */}
          <div className="carrito-detalle">
            <div className="detalle-productos">
              {storageProducts
               ?
                  <div className="productos-existen-carrito">
                    <Card className="card-carrito-title">
                        <Card.Body className="card-lista-carrito">
                          <ListGroup className="card-group-lista-carrito-title">
                            <Card.Text>
                              <strong>Código</strong>
                            </Card.Text>
                          </ListGroup>
                          <ListGroup className="card-group-lista-carrito-title">
                            <Card.Text className="card-img-lista-carrito">
                              <strong>Imagen</strong>
                            </Card.Text>
                          </ListGroup>
                          <ListGroup className="card-group-lista-carrito-title">
                            <Card.Text>
                              <strong>Nombre</strong>
                            </Card.Text>
                          </ListGroup>
                          <ListGroup className="card-group-lista-carrito-title">
                            <Card.Text>
                              <strong>Cantidad</strong>
                            </Card.Text>
                          </ListGroup>
                          <ListGroup className="card-group-lista-carrito-title">
                            <Card.Text>
                              <strong>Precio</strong>
                            </Card.Text>
                          </ListGroup>
                        
                        </Card.Body>
                      </Card>
                    {storageProducts.map(storageProduct => (
                      <Card className="card-carrito">
                        <Card.Body className="card-lista-carrito">
                          <ListGroup className="card-group-lista-carrito">
                            <Card.Text>
                              {storageProduct.id_producto}
                            </Card.Text>
                          </ListGroup>
                          <ListGroup className="card-group-lista-carrito">
                            <Card.Text className="card-img-lista-carrito">
                              <img src={storageProduct.imagen_produc} />
                            </Card.Text>
                          </ListGroup>
                          <ListGroup className="card-group-lista-carrito">
                            <Card.Text>
                              {storageProduct.nombre_produc}
                            </Card.Text>
                          </ListGroup>
                          <ListGroup className="card-group-lista-carrito">
                            <Card.Text>
                              {storageProduct.cantidad_producto}
                            </Card.Text>
                          </ListGroup>
                          <ListGroup className="card-group-lista-carrito">
                            <Card.Text>
                              $ {storageProduct.precio_produc}
                            </Card.Text>
                          </ListGroup>
                        
                        </Card.Body>
                      </Card>
                    
                    
                      ))}

                  </div>
                
              :
                <div className="productos-noexisten">

                    <h1>El carrito está vacío</h1>
                    <div className="text-center">

                      <ion-icon name="alert-circle-outline"></ion-icon>
                    </div>
                </div>
              }


            </div>

            <div className="detalle-btnVaciar">
              <button onClick={vaciarCarrito} className="btn vaciar-carrito">VACIAR CARRITO</button>
            </div>
            
          </div>

          {/* Descripción de la compra  */}

          <div className="carrito-descripcion">
            <div className="descripcion-titulo">
              <h4>Descripción</h4>
            </div>

            <div className="descripcion-detalles">
              <div className="contenedor-subtotal">
                <div className="subtotal">
                  <h5>Subtotal</h5>
                </div>

                <div className="cantidad-subtotal">
                  <h5 className="val-subtotal">$ {detalles.subtotal}</h5>
                </div>
              </div>
              <div className="contenedor-total">
                <div className="total">
                  <h5>Total (impuestos inc.)</h5>
                </div>

                <div className="cantidad-total">
                  <h5 className="val-total">$ {detalles.total}</h5>
                </div>
              </div>
            </div>

            <div className="carrito-delivery">
                <div class="form-check">
                    <input
                    class="form-check-input"
                    type="radio"
                    value=""
                    id="flexRadio-1"
                    
                    />
                    <label class="form-check-label" for="flexRadio-1">
                    Sin Delivery (retirar en tienda).
                    </label>
                </div>
                <div class="form-check">
                    <input
                    class="form-check-input"
                    type="radio"
                    value=""
                    id="flexRadio-2"
                    />
                    <label class="form-check-label" for="flexRadio-2">
                    Con Delivery (recargo adicional).
                    </label>
                    <div id="emailHelp" class="form-text">Se tomará la dirección que registró al crear la cuenta.</div>
                </div>
            </div>

            <div className="carrito-condiciones">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="chekckTerminos"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Acepto los términos y condiciones{" "}
                  <a
                    onClick={(() => setOpenModalTerminos(true))}
                    href="#"
                  >
                    Ver.
                  </a>
                </label>
              </div>
            </div>

            <div className="carrito-botones">
              {/* Boton para ingresar metodo de pago  */}
              <div className="btn-1">
                <button className="btn finalizar-pago" onClick={(() =>{setOpenModalTransaccion(true)})}>FINALIZAR COMPRA</button>
              </div>

              {/* enlace a catalogo  */}
              <div className="btn-2">
                <Link className="btn mas-productos" to="/catalogo">
                  ELEGIR MÁS PRODUCTOS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* Modal de Terminos y Condiciones  */}
      <Modal show={openModalTerminos}>
        <Modal.Header>
          <h4>Terminos y Condiciones</h4>
        </Modal.Header>

        <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, voluptatum qui quisquam sit velit id dolorem magnam
            asperiores eos recusandae obcaecati quos vitae, consequatur
            reiciendis consectetur aliquam tempora ipsam minima! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Autem officiis nisi
            laudantium quod deleniti sequi commodi libero ad perspiciatis
            velit? Nesciunt voluptatum nemo sit officia tenetur vero
            reiciendis officiis eveniet!
        </Modal.Body>
        <Modal.Footer>
          
          <Button 
          onClick={(() =>{setOpenModalTerminos(false)})}
          className="btn-secondary"
          >
            Cerrar
          </Button>
           
        </Modal.Footer>
      </Modal>
      {/* Modal de Transaccion  */}
      <Modal 
  
      centered
      show={openModalTransaccion}>
        <Modal.Header >
          <Modal.Title className='modal-title-pago'>
            <img src={logo} width='80px' height='65px'/>           
            <h4>TRANSACCIÓN DE PAGO</h4>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            {/* Correo  */}
            <InputGroup>
              <InputGroup.Text><ion-icon name="mail-outline"></ion-icon></InputGroup.Text>
              <FormControl isValid={false} isInvalid={false} id="modalCorreo" placeholder="Correo electrónico" />
            </InputGroup>
            {/* Tarjeta  */}
            <FormGroup className="modal-form-group">
              <InputGroup>
                <InputGroup.Text><ion-icon name="card-outline"></ion-icon></InputGroup.Text>
                <FormControl isValid={false} isInvalid={false} id="modalNumTarjeta" placeholder="Número de Tarjeta" />
              </InputGroup>
              <div className="seccion-modal-tarjeta-datos">
                <InputGroup>
                  <InputGroup.Text><ion-icon name="calendar-clear-outline"></ion-icon></InputGroup.Text>
                  <FormControl isValid={false} isInvalid={false} id="modalMesAnioTarjeta" placeholder="MM/YY" />
                </InputGroup>

                <InputGroup inline>
                  <InputGroup.Text><ion-icon name="lock-closed-outline"></ion-icon></InputGroup.Text>
                  <FormControl isValid={false} isInvalid={false} id="modalCvcTarjeta" placeholder="CVC" />
                </InputGroup>

              </div>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-modal-pago" >
            Realizar Pago
          </Button>
          <Button 
          onClick={(() =>{setOpenModalTransaccion(false)})}
          variant="secondary"
          >
            Cerrar
          </Button>
           
        </Modal.Footer>
      </Modal>

      

      <Footer />
    </div>
  );
}

export default withRouter(Carrito);
