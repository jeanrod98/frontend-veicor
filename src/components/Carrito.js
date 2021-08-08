import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, withRouter, useHistory } from "react-router-dom";
import { useState } from "react";
import "../css/carrito.css";
import logo from "../assets/logos/logopng2.png";
import Swal from "sweetalert2";
import {
  Modal,
  Button,
  Card,
  ListGroup,
  Form,
  Col,
  FormControl,
  InputGroup,
  FormGroup,
} from "react-bootstrap";

import {loadStripe} from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import clienteAxios from "../config/axios";

//stripe
const stripePromise = loadStripe('pk_test_51JMFb2IlbeGS9J0JfqYi3Gjd83j8gOW2uZ4zhwdRQNUTTXRIMJfwsQPnM7T5Dd4mC06jJPUrIZIzwulDIU98cXsU00wU9KlacD');

const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  const localUsuario = JSON.parse(localStorage.getItem('dataUser'))
  const correoUsuario = localUsuario.correo_usu
  const handleSubmit = async (e) =>{
    e.preventDefault();
    // console.log('click');
  
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })
    if(!error){
      console.log(paymentMethod);
      console.log(correoUsuario);
      
    }else{
      console.log('no hay datos');
    }
  
  }
  return (<Form >
  {/* Correo  */}
  <InputGroup>
    <InputGroup.Text>
      <ion-icon name="mail-outline"></ion-icon>
    </InputGroup.Text>
    <FormControl
      isValid={true}
      isInvalid={false}
      type = "mail"
      id="modalCorreo"
      defaultValue={correoUsuario}     
      disabled={true}
      />
  </InputGroup>
  {/* Tarjeta  */}
  <FormGroup className="modal-form-group text-center">
    <h5>DATOS DE LA TARJETA</h5>
  </FormGroup>
  <FormGroup className="modal-form-group">
    
   {/* CardElement */}
   <CardElement/>
  
  </FormGroup>
  <FormGroup className="modal-form-group text-center">

    <Button onClick={handleSubmit} className="btn-modal-pago">Realizar Pago</Button>
  </FormGroup>
</Form>)
}




function Carrito(props) {
  const history = useHistory();

  const storageProducts = JSON.parse(localStorage.getItem("poductCarrito"));
  // console.log(storageProducts);

  // if(storageProducts == null){
  //   console.log('No hay productos');
  // }else{
  //   console.log('Si hay productos');
  // }
  // !Estado para cambiar el valor del delibery 
  
  const [valDelivery, setvalDelivery] = useState(0);

  // !variable para ir calculando el sub total 
  let subtotalCarrito = 0;
  // !variable para ir calculando el total 
  let totalCarrito = 0;
  
  // let deliveryCarrito = 0;

  // *validarque el carrito tiene productos
  if(storageProducts != null){
    // Calculando el total del subtotal 
    storageProducts.forEach(subtotal => {
      const cantidad = parseInt(subtotal.cantidad_producto);
      subtotalCarrito += (subtotal.precio_produc * cantidad); 

      
    });
    // console.log(subtotalCarrito);
    totalCarrito = subtotalCarrito + valDelivery

  }




  // estado para marcar el check
  // const [checkDelivery, setvalDelivery] = useState(true);

  // const total_inpu = 5 * 0.12 + 5;

  // const detalles = {
  //   subtotal: 5,
  //   total: total_inpu,
  // };

  // Estado para el modal de transaccion
  const [openModalTransaccion, setOpenModalTransaccion] = useState(false);

  // estado para el modal de terminos
  const [openModalTerminos, setOpenModalTerminos] = useState(false);

  //estado para habilitar o deshabilitar el boton de comprar

  const [btnFinalizar, setBtnFinalizar] = useState(true)

   //estado para los terminos y condiciones

   const [terminosCondiciones, setterminosCondiciones] = useState(null)

  //  validar los terminos para hacer la compra
  const terminos = e => {
    const check = document.getElementById('chekckTerminos').checked
    // console.log(check);
    if(storageProducts != null && check == true ){
      setBtnFinalizar(false)

    
    }else{

      setBtnFinalizar(true)
    }
  }

  //* Funcion para vaciar el carrito de compras

  const vaciarCarrito = (e) => {
    e.preventDefault();
    // console.log('Se borro el carrito');
    if (storageProducts == null) {
      // No hay productos para borrar
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se puede vaciar el carrito de compras porque no hay productos en el.",
        confirmButtonColor: "#f05416",
        footer: '<a href="/catalogo">Te gustaría selecionar productos?</a>',
      });
      setBtnFinalizar(true)
    } else {
      
      Swal.fire({
        title: "Estás seguro de vacíar el carrito de compras?",
        text: "Se perderan todos los productos seleccionados!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f05416",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sí, borrar todo!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("poductCarrito");
          Swal.fire(
            "Productos Eliminados!",
            "Los productos fueron eliminados con éxito.",
            "success"
          );
        }
        history.push("/carrito");
        setBtnFinalizar(true)
      });
      // Si hay elementos validamos que los terminos esten marcados para habilitar el boton 
      
    }
  };
  // if(terminosCondiciones == true){

        
  //   setBtnFinalizar(false)
  // }
  // funcion para capturar si se checkea sin delivery
  const checkedSinDelivery = (e) => {
    // console.log("chekeado sin");
    setvalDelivery(0);
  };
  // funcion para capturar si se checkea con delivery
  const checkedConDelivery = (e) => {
    // console.log("chekeado con");
    // aqui hay que consultar a la base de datos por el precio del delivery 
    clienteAxios.get('/delivery/1')
    .then( respuesta => {
      const newPrecio = respuesta.data.precio_deli
      setvalDelivery(newPrecio);
      
    })
    .catch(error => {
      console.log(error);
    })
  };

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
              {storageProducts ? (
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
                  {storageProducts.map((storageProduct) => (
                    <Card className="card-carrito">
                      <Card.Body className="card-lista-carrito">
                        <ListGroup className="card-group-lista-carrito">
                          <Card.Text>{storageProduct.id_producto}</Card.Text>
                        </ListGroup>
                        <ListGroup className="card-group-lista-carrito">
                          <Card.Text className="card-img-lista-carrito">
                            <img src={storageProduct.imagen_produc} />
                          </Card.Text>
                        </ListGroup>
                        <ListGroup className="card-group-lista-carrito">
                          <Card.Text>{storageProduct.nombre_produc}</Card.Text>
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
              ) : (
                <div className="productos-noexisten">
                  <h1>El carrito está vacío</h1>
                  <div className="text-center">
                    <ion-icon name="alert-circle-outline"></ion-icon>
                  </div>
                </div>
              )}
            </div>

            <div className="detalle-btnVaciar">
              <button onClick={vaciarCarrito} className="btn vaciar-carrito">
                VACIAR CARRITO
              </button>
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
                  <h5 className="val-subtotal">$ {subtotalCarrito}</h5>
                </div>
              </div>
              <div className="contenedor-delivery">
                <div className="delivery">
                  <h5>Delivery </h5>
                </div>
                <div className="cantidad-delivery">
                  <h5 className="val-delivery">$ {valDelivery}</h5>
                </div>
              </div>
              <div className="contenedor-total">
                <div className="total">
                  <h5>Total inlcuye IVA</h5>
                </div>

                <div className="cantidad-total">
                  <h5 className="val-total">$ {totalCarrito}</h5>
                </div>
              </div>
            </div>

            <div className="carrito-delivery">
              <Form.Group className="mb-3">
                
                <Col sm={10}>
                  
                  <Form.Check
                    type="radio"
                    label="Sin Delivery."
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    onChangeCapture={checkedSinDelivery}
                    defaultChecked
                  />
                  <Form.Check
                    type="radio"
                    label="Con Delivery (Recargo adicional)."
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    onClickCapture={checkedConDelivery}
                  />
                </Col>
              </Form.Group>
            </div>

            <div className="carrito-condiciones">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="chekckTerminos"
                  // isChecked={() => setterminosCondiciones(true) }
                  onClick={terminos}
                />
                <label class="form-check-label" for="exampleCheck1">
                  Acepto los términos y condiciones{" "}
                  <a onClick={() => setOpenModalTerminos(true)} href="#">
                    Ver.
                  </a>
                </label>
              </div>
            </div>

            <div className="carrito-botones">
              {/* Boton para ingresar metodo de pago  */}
              <div className="btn-1">
                <button
                  className="btn finalizar-pago"
                  disabled={btnFinalizar}
                  onClick={() => {
                    setOpenModalTransaccion(true);
                  }}
                >
                  FINALIZAR COMPRA
                </button>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          voluptatum qui quisquam sit velit id dolorem magnam asperiores eos
          recusandae obcaecati quos vitae, consequatur reiciendis consectetur
          aliquam tempora ipsam minima! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Autem officiis nisi laudantium quod deleniti sequi
          commodi libero ad perspiciatis velit? Nesciunt voluptatum nemo sit
          officia tenetur vero reiciendis officiis eveniet!
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setOpenModalTerminos(false);
            }}
            className="btn-secondary"
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal de Transaccion  */}
      <Modal centered show={openModalTransaccion} onHide={() => {
              setOpenModalTransaccion(false);
            }} >
        <Modal.Header closeButton={true} closeLabel>
          <Modal.Title className="modal-title-pago">
            <img src={logo} width="80px" height="65px" />
            <h4>TRANSACCIÓN DE PAGO</h4>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Elements stripe={stripePromise}>
                
            <CheckoutForm/>
          </Elements>
        </Modal.Body>
        <Modal.Footer >
          <div className="footer-modal-pago">

          <p>Almacen Veicor - &copy; 2021 Todos los derechos reservados</p>
          </div>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
}

export default withRouter(Carrito);
