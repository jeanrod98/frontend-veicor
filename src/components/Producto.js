import Header from './Header';
import Footer from './Footer';
import {useState} from 'react';

function Producto() {

const nombre_producto = "Set de Ollas unco 6 piezas";

const descripcion = {
    "material" : `Una tabla se inserta con la etiqueta <table> y la líneas se definen con la etiqueta <tr>. Cada línea contiene celdas <td> 
    (celdas normales) o celdas <th> (encabezado). 
    El título de la tabla se define con <caption>. /n
    Puedes agregar un borde a las celdas de la tabla con ​border.`
}
// const [count, setCount] = useState(1);

    return (
      <div className="Producto">
        <Header/>
            <div className="container">
                {/* Informacion de Producto  */}
                <div className="contenedor-informacion">
                    <div className="imagen-producto">
                        <div className="nombre-producto">

                            <h2>{nombre_producto}</h2>
                        </div>
                    {/* Contenedor de la imagen del producto  */}
                        <div className="img-producto">
                            <img src="/img/imguso.jpg"></img>
                        </div>

                    </div>
                    {/* Detalles  */}
                    <div className="detalle-producto">
                        <div className="entregaDomicilio">

                            <h5><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ2OS4zMzMgNDY5LjMzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDA1LjMzMywxNDkuMzMzaC02NFY2NEg0Mi42NjdDMTkuMDkzLDY0LDAsODMuMDkzLDAsMTA2LjY2N3YyMzQuNjY3aDQyLjY2N2MwLDM1LjMwNywyOC42OTMsNjQsNjQsNjRzNjQtMjguNjkzLDY0LTY0ICAgIGgxMjhjMCwzNS4zMDcsMjguNjkzLDY0LDY0LDY0YzM1LjMwNywwLDY0LTI4LjY5Myw2NC02NGg0Mi42NjdWMjM0LjY2N0w0MDUuMzMzLDE0OS4zMzN6IE0xMDYuNjY3LDM3My4zMzMgICAgYy0xNy43MDcsMC0zMi0xNC4yOTMtMzItMzJzMTQuMjkzLTMyLDMyLTMyczMyLDE0LjI5MywzMiwzMlMxMjQuMzczLDM3My4zMzMsMTA2LjY2NywzNzMuMzMzeiBNMzYyLjY2NywzNzMuMzMzICAgIGMtMTcuNzA3LDAtMzItMTQuMjkzLTMyLTMyczE0LjI5My0zMiwzMi0zMnMzMiwxNC4yOTMsMzIsMzJTMzgwLjM3MywzNzMuMzMzLDM2Mi42NjcsMzczLjMzM3ogTTM0MS4zMzMsMjM0LjY2N3YtNTMuMzMzaDUzLjMzMyAgICBsNDEuOTIsNTMuMzMzSDM0MS4zMzN6IiBmaWxsPSIjNWNhMTA3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />Disponible entrega a domicilio</h5>
                        </div>
                        
                        <div className="seccion-cantidad-btncarrito">
                            <div className="seccion-cantidad">

                                <input type="number" min="1" defaultValue="1"></input>
                            </div>

                            <div className="seccion-btnCarrito">
                                <button id="aggCarrito" className="btn aggCarrito"><ion-icon name="cart-outline"></ion-icon> Agregar al carrito</button>
                            </div>
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
                                        
                                        <td>{descripcion.material}</td>
                                    
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Iconos */}
                <div className="container inicio-iconos">
                    <div className="div-icono-1">
                    <img className="svg-camion" src="/img/svg/truck.svg" width="50" height="50"/>
                    {/* color #787575 */}
                    <p>ENTREGAS <br/> A <br/> DOMICILIO</p>

                    </div>
                    <div className="div-icono-2">
                    <img className="svg-camion" src="/img/svg/money.svg" width="50" height="50"/>
                    <p>CAMBIOS <br/> Y <br/>DEVOLUCIONES</p>

                    </div>
                    <div className="div-icono-3">
                        <img className="svg-camion" src="/img/svg/tienda.svg" width="50" height="50"/>
                        <p>COMPRA ONLINE <br/> Y <br/> RETIRA EN TIENDA</p>
                    </div>
                    <div className="div-icono-4">
                        <img className="svg-camion" src="/img/svg/bolsa-de-la-compra.svg" width="50" height="50"/>
                        <p>COMPRA FÁCIL <br/> Y <br/> SEGURA</p>

                    </div>
                    <div className="div-icono-5">
                    <img className="svg-camion" src="/img/svg/garantia.svg" width="50" height="50"/>
                    <p>GARANTIA <br/> EN <br/>  PRODUCTOS</p>

                    </div>
                    <div className="div-icono-6">
                    <img className="svg-camion" src="/img/svg/tarjeta-de-debito.svg" width="50" height="50"/>
                    <p>ACEPTAMOS TODAS <br/> LAS <br/> TARJETAS</p>

                    </div>
                </div>
                </div>
        <Footer/>
      </div>
    );
  }
  
  export default Producto;