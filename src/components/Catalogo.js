import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../css/catalogo.css';
import Swal from 'sweetalert2';

// Imagenes Carousel 
import cat_1 from '../assets/carousel/cat_1.jpg';
import cat_2 from '../assets/carousel/cat_2.jpg';
import cat_3 from '../assets/carousel/cat_3.jpg';
import cat_4 from '../assets/carousel/cat_40.jpg';

// Carousel
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Producto from './Producto';

const items = [
  {
    src: cat_1,

  },
  {
    src: cat_2,

  },
  {
    src: cat_3,

  }
];


function Catalogo({productos}) {

console.log(productos);
// Si el arreglo viene vacio no retorna nada 


// Configuraciones y uso del stage para el carousel de imagenes 
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);


  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }

    
    const slides = items.map((item) => {
      return (
        // carousel de imagenes 
        <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        >
          <img src={item.src} alt={item.altText} width="100%" height="auto"/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    
    
    // if(productos.length === 0 ) return null;
    
    const usuarioStorage = localStorage.getItem('usuario');
    //* Agregar al carrito de compras
    const productoPerfil = e =>{

      e.preventDefault();
      
      
        Swal.fire({
          icon: 'info',
          title: 'No se puede agregar al Carrito',
          text: 'Por favor, primero inicie sesión.',
          footer: '<a id="a-iniciarSesion" href="/registro">¡Quiero registrarme!</a>',
          confirmButtonColor: "#fc5c1b",
          showCloseButton: true
          
        })
        
      




    }

    //agregar producto al localStorage
    // const addLocalStorage = e => {
    //   e.preventDefault();
    //   //Extraer datos del card
    //   const card = e.target.parentElement.parentElement;

    //   const infoProduct = {
    //     imagen: card.querySelector('img').src,
    //     nombre: card.querySelector('h5').textContent,
    //     precio: card.querySelector('.precio span').textContent
    //   }


    //   //add producto a local storage
    //   localStorage.setItem('carrito', JSON.stringify(infoProduct));

     
    // }



    return (
      <div className="Catalogo">
        <Header/>
        <div className="container">

            <div className="search-catalogo">
                <div class="buscador input-group">
                    <input type="search" class="search-input form-control rounded" placeholder="Buscar..." aria-label="Search"
                        aria-describedby="search-addon" />
                    <button id="btn-search" type="button" class="btn"><ion-icon name="search-outline"></ion-icon></button>
                </div>
            </div>
{/* Diseño del carousel de imagenes */}
            <div className="publicidad-catalogo">
                <div className="carousel">

                    <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    className="carousel"
                    width="300px"
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
                        <CarouselControl direction="next" directionText=" " onClickHandler={next} />
                    </Carousel>
                </div>

                <div className="publicidad-img">
                    <img src={cat_4}></img>
                </div>
            
                
            </div>
{/* Muestra los productos en tarjetas */}
            <div className="productos">
            {productos.length == 0 &&
                  <>
                <div className="productos-noexisten">
                    <h1>No hay productos para mostrar</h1>
                    <div className="text-center">

                        <ion-icon name="close-circle-outline"></ion-icon>
                    </div>
                </div>
                </>
                }
                {productos.length > 0 &&
                <>
                <div className="productos-existen">
                    {/* Aqui van los productos  */}
                    {/* <div className="list-group"> */}
                    <div className="recomendados">
                    <h4>RECOMENDACIONES PARA TI</h4>
                    </div>
                      {productos.map(producto => (
                      <div className="contenedor-card">

                        
                          <div className="card card-producto">
                            {usuarioStorage 
                            ? 
                            <Link to={`/producto/${producto.id_producto}`} key={producto.id_producto} > 
                            <img name="imagen" className="card-img-top" src={producto.imagen_produc} alt={producto.nombreImg_produc}/>
                           
                           <div className="card-body titulo">
                             <h5 name="nombre" >{producto.nombre_produc}</h5>
                           </div>
                           </Link>
                            : 
                            <Link to={`/producto/catalogo`} key={producto.id_producto}  onClick={productoPerfil} >  
                            <img name="imagen" className="card-img-top" src={producto.imagen_produc} alt={producto.nombreImg_produc}/>
                           
                           <div className="card-body titulo">
                             <h5 name="nombre" >{producto.nombre_produc}</h5>
                           </div>
                           </Link>
                            }
                            
                            <div className="card-body">
                              <div className="input-group-prepend">
                                <p name="descripcion" className="descripcion">{producto.descripcion_produc}</p>
                              </div>
                              <div class="input-group-prepend">
                                <p name="existencia" className="existencia"><span>Unidades Disponibles: </span>{producto.cantidad_produc}</p>
                              </div>
                              <div className="input-group-prepend precio">
                                
                                <p name="precio" >$ <span>{producto.precio_produc}</span></p>
                              </div>
                              

                            </div>
                            {/* <div className="addCarrito-catalogo">

                              <button className="btn" onClick={addLocalStorage}>Agregar al Carrito</button>
                            </div> */}
                            
                          </div>
                    
                      </div>

                    ))}

                    {/* </div> */}
                </div>
                </>
                }
            </div>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Catalogo;