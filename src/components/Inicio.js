import Header from './Header';
import Footer from './Footer';
import {useState} from 'react'

function Inicio(props) {

  // const [tipo, setTipo] = useState("cliente");
 
  
  
    return (
      <div className="Inicio">
        <Header/>
            {/* Titulo */}
            <div className="container contenedor-inicio">
              <div className="detalles-inicio">

                <div className="card inicio-titulo text-center">
                {/* <img src="./img/logos/logohpng2.png" width="175" height="85"/> */}
                  <h1>TIENDA ONLINE</h1>
                </div>

                {/* Imagen del almacen  */}
                <div className="imagenes-inicio-tamanio-3">
                  <img src="/img/veicor_1.jpg" ></img>
                </div>

                {/* Descripcion */}

                <div className="card inicio-descripcion">
                  <div className="my-5">

                  <h5>Contamos con variedad de productos para 
                    el hogar a los mejores precios del mercado.</h5>
                  <h5>Productos de temporada.</h5>
                  <h5>Cristalería.</h5>
                  <h5>Juguetería.</h5>
                  <h5>Plasticos y Desechables.</h5>
                  </div>
                    
                </div>               

              </div>
              <div className="imagenes-inicio">
                <div className="imagenes-inicio-tamanio-1">
                  <img src="/img/veicor_2.jpg" ></img>
                </div>
                <div className="imagenes-inicio-tamanio-2">
                  <img src="/img/veicor_3.jpg" ></img>
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
        <Footer/>
      </div>
    );
  }
  
  export default Inicio;