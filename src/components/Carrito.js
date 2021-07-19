import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, withRouter } from "react-router-dom";
import "../css/carrito.css";

function Carrito(props) {
  const total_inpu = 5 * 0.12;

  const detalles = {
    subtotal: 5,
    total: total_inpu,
  };

  const irPagar = e =>{
    props.history.push('/transaccion');
    
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
            <h6>Detalle de los productos</h6>
            
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
                    data-toggle="modal"
                    data-target="#exampleModalLong"
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
                <button className="btn finalizar-pago" onClick={irPagar}>FINALIZAR COMPRA</button>
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

      {/* <!-- Modal Terminos y Condiciones  --> */}
      <div
        class="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Términos y Condiciones
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, voluptatum qui quisquam sit velit id dolorem magnam
              asperiores eos recusandae obcaecati quos vitae, consequatur
              reiciendis consectetur aliquam tempora ipsam minima! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Autem officiis nisi
              laudantium quod deleniti sequi commodi libero ad perspiciatis
              velit? Nesciunt voluptatum nemo sit officia tenetur vero
              reiciendis officiis eveniet!
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      

      <Footer />
    </div>
  );
}

export default withRouter(Carrito);
