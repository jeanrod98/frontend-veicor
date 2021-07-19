import Header from './Header';
import Footer from './Footer';
import {useState} from 'react'
import '../css/app.css'
import veicor_1 from '../assets/veicor_1.jpg'
import veicor_2 from '../assets/veicor_2.jpg'
import veicor_3 from '../assets/veicor_3.jpg'
import Servicios from './Servicios'


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
                  <img src={veicor_1}></img>
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
                  <img src={veicor_2}></img>
                </div>
                <div className="imagenes-inicio-tamanio-2">
                  <img src={veicor_3} ></img>
                </div>
                
              </div>           

            </div>
             {/* Iconos */}
             <Servicios/>
             
        <Footer/>
      </div>
    );
  }
  
  export default Inicio;