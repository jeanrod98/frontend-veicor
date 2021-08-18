import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import imagen from "../assets/no-image.png";

import "../css/crud.css";
import { Form, Button } from "react-bootstrap";
import {Link, useParams, withRouter} from 'react-router-dom'
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

function ProductosCRUD (props)  {
  
  
  const {id} = useParams();
  // console.log(id);
  //nuevo estado para el producto encontrado
  const [productoFiltrado, setproductoFiltrado] = useState([])
  // Estado para los campos
  const [producto, guardarProducto] = useState({
    id_producto: "",
    nombre_produc: "",
    cantidad_produc: "",
    descripcion_produc: "",
    precio_produc: "",
    promocion_produc: "",
    imagen_produc: "",
    dscpLarga_produc: "",


  });
  //estado para habilitar el boton
  const [btnHabilitar, setbtnHabilitar] = useState(true)
  
  useEffect( ()  => {
    // if(productos){
      if(id !== 'newProduct' ){
      const consultarAPI = () => {
         clienteAxios
          .get(`/productos/${id}`)
          .then((respuesta) => {
            // console.log(respuesta.data);
            
            // Guardar en el state el resultado
            setproductoFiltrado(respuesta.data);
            guardarProducto({
              ...producto,
              id_producto: respuesta.data.id_producto,             
              nombre_produc: respuesta.data.nombre_produc,
              cantidad_produc: respuesta.data.cantidad_produc,
              descripcion_produc: respuesta.data.descripcion_produc,
              precio_produc: respuesta.data.precio_produc,
              promocion_produc: respuesta.data.promocion_produc,
              imagen_produc: respuesta.data.imagen_produc,
              dscpLarga_produc: respuesta.data.dscpLarga_produc,
            });
          })
          .catch((error) => {
            console.log(error);
            console.log('error en la consulta');
          });
        };
        consultarAPI();
      }
      // }
    }, []);
    // console.log(productoFiltrado);
    
    // if(id !== 'newProduct' ){
      //   console.log(id);
      //consultamos ese producto en la base de datos 
      // const result = productos.filter( (producto) => producto.id_producto == id );
      // console.log(result[0]);
      // const objetoProducto = result[0];
      // console.log(objetoProducto.id_producto);
      // setproductoFiltrado(result[0])
      // guardarProducto({
        //   ...producto,
        //   [id_producto]: objetoProducto.id_producto
        // });
        
        // }else{
  //   console.log('nuevo');
  // }
  
  
  // Expresiones regulares para validar
  const expresiones = {
    codigo: /^[a-zA-ZÀ0-9-ÿ]{1,50}$/, // Letras y numeros.
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
    cantidad: /^[0-9]{1,10}$/, // solo numeros
    descripcionCorta: /^[a-zA-ZÀ-ÿ0-9\s]{1,37}$/,
    precio: /^[0-9.]{1,10}$/, // 10 numeros.
    promocion: /^[0-9]{1,3}$/, // 10 numeros.
    descripcionLarga: /^[a-zA-ÿ.,()-\s]{15,}$/, //descripcion larga
  };
  
  // Estado para la validacion
  //! nombre
  const [validNombre, setValidNombre] = useState(false);
  const [inValidNombre, setInValidNombre] = useState(false);
  //! codigo
  const [validCodigo, setValidCodigo] = useState(false);
  const [inValidCodigo, setInValidCodigo] = useState(false);
  //! cantidad
  const [validCantidad, setValidCantidad] = useState(false);
  const [inValidCantidad, setInValidCantidad] = useState(false);
  //! precio
  const [validPrecio, setValidPrecio] = useState(false);
  const [inValidPrecio, setInValidPrecio] = useState(false);
  //! descripcion corta
  const [validDescripcionCorta, setValidDescripcionCorta] = useState(false);
  const [inValidDescripcionCorta, setInValidDescripcionCorta] = useState(false);

  //!promocion
  const [validPromocion, setValidPromocion] = useState(false);
  const [inValidPromocion, setInValidPromocion] = useState(false);
  //!descripcion larga
  const [validDescripcionLarga, setValidDescripcionLarga] = useState(false);
  const [inValidDescripcionLarga, setInValidDescripcionLarga] = useState(false);

  // validar campos
  const guardarState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });

    // Validaciones de los campos utilizando el estado
    // codigo
    // console.log(producto);
    if (producto.id_producto == "") {
      setInValidCodigo(true);
      setbtnHabilitar(true)
    } else if (expresiones.codigo.test(producto.id_producto)) {
      setInValidCodigo(false);
      setValidCodigo(true);
      setbtnHabilitar(false)
    } else {
      setInValidCodigo(true);
      setValidCodigo(false);
      setbtnHabilitar(true)
    }
    // nombre
    if (producto.nombre_produc == "") {
      setInValidNombre(true);
      setbtnHabilitar(true)
    } else if (expresiones.nombre.test(producto.nombre_produc)) {
      setInValidNombre(false);
      setValidNombre(true);
      setbtnHabilitar(false)
    } else {
      setInValidNombre(true);
      setValidNombre(false);
      setbtnHabilitar(true)
    }
    // cantidad
    if (producto.cantidad_produc == "") {
      setInValidCantidad(true);
      setbtnHabilitar(true)
    } else if (expresiones.cantidad.test(producto.cantidad_produc)) {
      setInValidCantidad(false);
      setValidCantidad(true);
      setbtnHabilitar(false)
    } else {
      setbtnHabilitar(true)
      setInValidCantidad(true);
      setValidCantidad(false);
    }

    // precio
    if (producto.precio_produc == "") {
      setInValidPrecio(true);
      setbtnHabilitar(true)
    } else if (expresiones.precio.test(producto.precio_produc)) {
      setInValidPrecio(false);
      setValidPrecio(true);
      setbtnHabilitar(false)
    } else {
      setInValidPrecio(true);
      setValidPrecio(false);
      setbtnHabilitar(true)
    }
    // Descripcion Corta
    if (producto.descripcion_produc == "") {
      setInValidDescripcionCorta(true);
      setbtnHabilitar(true)
    } else if (expresiones.descripcionCorta.test(producto.descripcion_produc)) {
      setInValidDescripcionCorta(false);
      setValidDescripcionCorta(true);
      setbtnHabilitar(false)
    } else {
      setInValidDescripcionCorta(true);
      setValidDescripcionCorta(false);
      setbtnHabilitar(true)
    }
    // Promocion
    if (producto.promocion_produc == "" || producto.promocion_produc < 0) {
      setInValidPromocion(true);
      setbtnHabilitar(true)
    } else if (expresiones.promocion.test(producto.promocion_produc)) {
      setInValidPromocion(false);
      setValidPromocion(true);
      setbtnHabilitar(false)
    } else {
      setInValidPromocion(true);
      setValidPromocion(false);
      setbtnHabilitar(true)
    }
    // descripcion larga
    if (producto.dscpLarga_produc == "") {
      setInValidDescripcionLarga(true);
      setbtnHabilitar(true)
    } else if (expresiones.descripcionLarga.test(producto.dscpLarga_produc)) {
      setInValidDescripcionLarga(false);
      setValidDescripcionLarga(true);
      setbtnHabilitar(false)
    } else {
      setInValidDescripcionLarga(true);
      setValidDescripcionLarga(false);
      setbtnHabilitar(true)
    }
  };
  //estado para la imagen
  const [imagenSubir, setimagen] = useState(null)

  let previewImg = useRef(null);
  let inputFile = useRef(null);
  
 //funcion que detecta el cambio de imagen
 const changeFile = e =>{
  setimagen(e)
// console.log('hola');
// console.log(previewImg.current.src);
// console.log();

// variables que van almacenar los valores
let inptFile = inputFile.current.files[0];
let preview = previewImg.current;
let readFile = new FileReader();
//validamos que exista la imagen para cargar y mostrarla
if(inptFile){
  readFile.readAsDataURL(inptFile)
  readFile.onloadend = function () {
  preview.src = readFile.result
  }
   

  // setimagen(readFile)
  guardarProducto({
    ...producto,
    imagen_produc: readFile.result,
  });
  
}else{
  preview.src = imagen;
  // setbtnHabilitar(false)
}
// console.log(imagenSubir);

// 
}

 //enviar datos  al servidor
 const guardarCambios = e =>{
   e.preventDefault();
   // validamos que se quiara actualizar o insertar
   if(productoFiltrado.length <= 0){
     //!proceso de insertar en la base de datos
     //alerta de confirmacion para insertar
     Swal.fire({
      title: 'Agregar Producto?',
      text: "Esta seguro de agregar este producto a la base de datos!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#f05416',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Guardar!'
    }).then((result) => {
      if (result.isConfirmed) {
        const img = new FormData();
        console.log(imagenSubir);
        if(imagenSubir != null){
 
          img.append("img-product", imagenSubir[0])
        }
        img.append("producto", JSON.stringify(producto))
        clienteAxios.post('/productos', img)
        .then(res => {
          console.log(res.data.msg);
          
          props.setguardarConsulta(true)
         
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El producto fue registrado!.',
            showConfirmButton: false,
            timer: 1500
          })
          
          
        })
        .catch(error => {
          console.log(error);
          Swal.fire({
          icon: 'error',
          title: 'Error de Imagen',
          text: 'El tamaño maximo es de 500 kb y solo se permiten imagenes con extensión (JPG, JPEG y PNG).',
          confirmButtonColor: "#f05416",
          
        })
        })
 
        
      }
    })

   }else{
     //!proceso de modificar
     //alerta de confirmacion para actualizar
     Swal.fire({
       title: 'Guardar Cambios?',
       text: "Los cambios no se podran revertir y si no seleccionó una imagen se colocará una por defecto!",
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#f05416',
       cancelButtonColor: '#d33',
       cancelButtonText: 'Cancelar',
       confirmButtonText: 'Guardar!'
     }).then((result) => {
       if (result.isConfirmed) {
         const img = new FormData();
         console.log(imagenSubir);
         if(imagenSubir != null){
  
           img.append("img-product", imagenSubir[0])
         }
         img.append("producto", JSON.stringify(producto))
         clienteAxios.put(`/productos-update/${id}`, img)
         .then(res => {
           console.log(res.data.msg);
           
           props.setguardarConsulta(true)
          
           Swal.fire({
             position: 'center',
             icon: 'success',
             title: 'El producto fue actualizado!.',
             showConfirmButton: false,
             timer: 1500
           })
           
           
         })
         .catch(error => {
           console.log(error);
           Swal.fire({
           icon: 'error',
           title: 'Error de Imagen',
           text: 'El tamaño maximo es de 500 kb y solo se permiten imagenes con extensión (JPG, JPEG y PNG).',
           confirmButtonColor: "#f05416",
           
         })
         })
  
         
       }
     })

   }

   
        
        
    


}
//  console.log(imagenSubir);
  
  return (
    <div className="ProductosCRUD">
      <Header />

      <div className="container contenedor-productos-crud">
        <div className="crud-contenido">
          <div>
            <Link to="/perfil-admin/productos" className="btn-atras">
              <ion-icon name="arrow-back-circle-outline"></ion-icon>
            </Link>
          </div>
          <div className="titulo-crud">
            <ion-icon name="create-outline"></ion-icon>
            <h2>CRUD DE PRODUCTOS</h2>
          </div>
          {/* SECCION 1  */}
          <div className="crud-seccion-1">
            {/* seccion imagen producto  */}
            <div className="img-crud-producto">
              <img src={producto.imagen_produc||imagen} ref={previewImg}></img>
              <Form.Control id="img_product" type="file" className="btn btn-crud-addImagen" name="img-product" ref={inputFile} onChange={(e) => changeFile(e.target.files)}/>
            </div>
            {/* seccion detalles producto  */}
            <div className="detalles-crud-producto">
              <Form
                className="form-crud-producto"
                onFocusCapture={guardarState}
                onClick={guardarState}
               
              >
                <Form.Group className="contenido-form-crud">
                  <Form.Label>Código:</Form.Label>
                  <Form.Control
                    isValid={validCodigo}
                    isInvalid={inValidCodigo}
                    onChange={guardarState}
                    onClick={guardarState}
                    name="id_producto"
                    type="text"
                    placeholder="Ingrese el código del producto"
                    defaultValue={productoFiltrado.id_producto}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="contenido-form-crud">
                  <Form.Label>Nombre:</Form.Label>
                  <Form.Control
                    isValid={validNombre}
                    isInvalid={inValidNombre}
                    onChange={guardarState}
                    name="nombre_produc"
                    type="text"
                    placeholder="Ingrese el nombre del producto"
                    defaultValue={productoFiltrado.nombre_produc}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="contenido-form-crud">
                  <Form.Label>Cantidad:</Form.Label>
                  <Form.Control
                    isValid={validCantidad}
                    isInvalid={inValidCantidad}
                    onChange={guardarState}
                    name="cantidad_produc"
                    min="0"
                    
                    defaultValue={productoFiltrado.cantidad_produc}
                    type="number"
                    placeholder="Ingrese la cantidad del producto"
                  ></Form.Control>
                </Form.Group>

                {/* <Form.Group className="contenido-form-crud">
                                    <Form.Label>Descripción corta:</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese descripción del producto"></Form.Control>
                                </Form.Group> */}

                <Form.Group className="contenido-form-crud">
                  <Form.Label>Precio:</Form.Label>
                  <Form.Control
                    isValid={validPrecio}
                    isInvalid={inValidPrecio}
                    onChange={guardarState}
                    name="precio_produc"
                    min="0"
                    defaultValue={productoFiltrado.precio_produc}
                    type="number"
                    placeholder="Ingrese el precio Ej: 1,00"
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="contenido-form-crud">
                  <Form.Label>Descripción corta:</Form.Label>
                  <Form.Control
                    isValid={validDescripcionCorta}
                    isInvalid={inValidDescripcionCorta}
                    onChange={guardarState}
                    name="descripcion_produc"
                    type="text"
                    placeholder="Ingrese descripción corta del producto"
                    defaultValue={productoFiltrado.descripcion_produc}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="contenido-form-crud">
                  <Form.Label>Promoción:</Form.Label>
                  <Form.Control
                    isValid={validPromocion}
                    isInvalid={inValidPromocion}
                    defaultValue={productoFiltrado.promocion_produc}
                    onChange={guardarState}
                    name="promocion_produc"
                    min="0"
                    max="100"
                    type="number"
                    placeholder="Ingrese la promoción Ej: 10"
                    
                  ></Form.Control>
                </Form.Group>
              </Form>
            </div>
          </div>
          {/* SECCION 2  */}
          <div className="crud-seccion-2">
            <Form className="text-center"
           onFocusCapture={guardarState}
           onClick={guardarState}
            >
              <Form.Group className="lbl-descripcion-crud">
                <Form.Label> Descripción Larga</Form.Label>
              </Form.Group>

              <Form.Group className="txtArea-crud-producto">
                <Form.Control
                  isValid={validDescripcionLarga}
                  isInvalid={inValidDescripcionLarga}
                  onChange={guardarState}
                  name="dscpLarga_produc"
                  as="textarea"
                  aria-label="With textarea"
                  defaultValue={productoFiltrado.dscpLarga_produc}
                  
                />
              </Form.Group>

              <Form.Group className="btn-descripcion-crud">
                <Button disabled={btnHabilitar} className="btn-guardar-crud" onClick={guardarCambios}>Guardar</Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductosCRUD;
