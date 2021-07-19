import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import css from "../css/producto.css";
import clienteAxios from "../config/axios";
import Servicios from './Servicios'

function Producto(props) {
  // console.log(props.producto);
  const {
    match: { params },
  } = props;
  
  // *Consultar a la base de datos el producto por unidad
  // clienteAxios.get(`/productos/?id=${params.id}`)
  //State de la aoo
  const [producto, guardarProducto] = useState([]);

  useEffect(() => {
    // if(productos){
    const consultarAPI = () => {
      clienteAxios
        .get(`/productos/${params.id}`)
        .then((respuesta) => {
          //   console.log(respuesta.data);

          // Guardar en el state el resultado
          guardarProducto(respuesta.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    consultarAPI();
    // }
  }, []);

  //   console.log(params.id)
  // if(!props.producto){
  //     props.history.push(`/producto/${params.id}`);
  //     return null;
  // }
  // Extraer por props
  // const {producto: {nombre_produc, dscpLarga_produc, imagen_produc}} = props.producto;
  // console.log(props.producto)

  return (
    <div className="Producto">
      <Header />
      <div className="container">
        {/* Informacion de Producto  */}
        <div className="contenedor-informacion">
          <div className="imagen-producto">
            <div className="nombre-producto">
              <h2>{producto.nombre_produc}</h2>
            </div>
            {/* Contenedor de la imagen del producto  */}
            <div className="img-producto">
              <img src={producto.imagen_produc}></img>
            </div>
          </div>
          {/* Detalles  */}
          <div className="detalle-producto">
            <div className="entregaDomicilio">
              <h5>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ2OS4zMzMgNDY5LjMzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDA1LjMzMywxNDkuMzMzaC02NFY2NEg0Mi42NjdDMTkuMDkzLDY0LDAsODMuMDkzLDAsMTA2LjY2N3YyMzQuNjY3aDQyLjY2N2MwLDM1LjMwNywyOC42OTMsNjQsNjQsNjRzNjQtMjguNjkzLDY0LTY0ICAgIGgxMjhjMCwzNS4zMDcsMjguNjkzLDY0LDY0LDY0YzM1LjMwNywwLDY0LTI4LjY5Myw2NC02NGg0Mi42NjdWMjM0LjY2N0w0MDUuMzMzLDE0OS4zMzN6IE0xMDYuNjY3LDM3My4zMzMgICAgYy0xNy43MDcsMC0zMi0xNC4yOTMtMzItMzJzMTQuMjkzLTMyLDMyLTMyczMyLDE0LjI5MywzMiwzMlMxMjQuMzczLDM3My4zMzMsMTA2LjY2NywzNzMuMzMzeiBNMzYyLjY2NywzNzMuMzMzICAgIGMtMTcuNzA3LDAtMzItMTQuMjkzLTMyLTMyczE0LjI5My0zMiwzMi0zMnMzMiwxNC4yOTMsMzIsMzJTMzgwLjM3MywzNzMuMzMzLDM2Mi42NjcsMzczLjMzM3ogTTM0MS4zMzMsMjM0LjY2N3YtNTMuMzMzaDUzLjMzMyAgICBsNDEuOTIsNTMuMzMzSDM0MS4zMzN6IiBmaWxsPSIjNWNhMTA3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
                Disponible entrega a domicilio
              </h5>
            </div>

            <div className="seccion-cantidad-btncarrito">
              <div className="seccion-cantidad">
                <label>Cantidad</label>
                <input
                  className="text-center"
                  type="number"
                  min="1"
                  defaultValue="1"
                ></input>
              </div>

              <div className="seccion-btnCarrito">
                <button id="aggCarrito" className="btn aggCarrito">
                  <ion-icon name="cart-outline"></ion-icon> Agregar al carrito
                </button>
              </div>
            </div>

            <div className="seccion-existencia">
              <label><span>Unidades Disponibles:</span> {producto.cantidad_produc}</label>
            </div>

            <div className="especificaciones-producto">
              <h4>Especificaiones</h4>
              <div className="tabla-div">
                <table class="table table-striped">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">Detalles</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* <th scope="row">1</th> */}

                      <td>{producto.dscpLarga_produc}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Iconos */}
        <Servicios/>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(Producto);
