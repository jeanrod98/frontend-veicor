import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import imagen from "../assets/no-image.png";

import "../css/crud.css";
import { Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

function ProductosCRUD() {
  // Expresiones regulares para validar
  const expresiones = {
    codigo: /^[a-zA-ZÀ0-9-ÿ]{1,50}$/, // Letras y numeros.
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
    cantidad: /^[0-9]{1,10}$/, // solo numeros
    descripcionCorta: /^[a-zA-ZÀ-ÿ0-9\s]{1,37}$/,
    precio: /^[0-9.]{1,10}$/, // 10 numeros.
    promocion: /^[0-9]{1,3}$/, // 10 numeros.
    descripcionLarga: /^[a-zA-ÿ.,()-\s]{1,}$/, //descripcion larga
  };

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
    if (producto.id_producto == "") {
      setInValidCodigo(true);
    } else if (expresiones.codigo.test(producto.id_producto)) {
      setInValidCodigo(false);
      setValidCodigo(true);
    } else {
      setInValidCodigo(true);
      setValidCodigo(false);
    }
    // nombre
    if (producto.nombre_produc == "") {
      setInValidNombre(true);
    } else if (expresiones.nombre.test(producto.nombre_produc)) {
      setInValidNombre(false);
      setValidNombre(true);
    } else {
      setInValidNombre(true);
      setValidNombre(false);
    }
    // cantidad
    if (producto.cantidad_produc == "") {
      setInValidCantidad(true);
    } else if (expresiones.cantidad.test(producto.cantidad_produc)) {
      setInValidCantidad(false);
      setValidCantidad(true);
    } else {
      setInValidCantidad(true);
      setValidCantidad(false);
    }

    // precio
    if (producto.precio_produc == "") {
      setInValidPrecio(true);
    } else if (expresiones.precio.test(producto.precio_produc)) {
      setInValidPrecio(false);
      setValidPrecio(true);
    } else {
      setInValidPrecio(true);
      setValidPrecio(false);
    }
    // Descripcion Corta
    if (producto.descripcion_produc == "") {
      setInValidDescripcionCorta(true);
    } else if (expresiones.descripcionCorta.test(producto.descripcion_produc)) {
      setInValidDescripcionCorta(false);
      setValidDescripcionCorta(true);
    } else {
      setInValidDescripcionCorta(true);
      setValidDescripcionCorta(false);
    }
    // Promocion
    if (producto.promocion_produc == "") {
      setInValidPromocion(true);
    } else if (expresiones.promocion.test(producto.promocion_produc)) {
      setInValidPromocion(false);
      setValidPromocion(true);
    } else {
      setInValidPromocion(true);
      setValidPromocion(false);
    }
    // descripcion larga
    if (producto.dscpLarga_produc == "") {
      setInValidDescripcionLarga(true);
    } else if (expresiones.descripcionLarga.test(producto.dscpLarga_produc)) {
      setInValidDescripcionLarga(false);
      setValidDescripcionLarga(true);
    } else {
      setInValidDescripcionLarga(true);
      setValidDescripcionLarga(false);
    }
  };

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
              <img src={imagen}></img>
              <Button className="btn btn-crud-addImagen">Agregar Imagen</Button>
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
                    name="id_producto"
                    type="text"
                    placeholder="Ingrese el código del producto"
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
                    defaultValue="1"
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
                    defaultValue="0.0"
                    type="number"
                    // placeholder="Ingrese el precio Ej: 1,00"
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
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="contenido-form-crud">
                  <Form.Label>Promoción:</Form.Label>
                  <Form.Control
                    isValid={validPromocion}
                    isInvalid={inValidPromocion}
                    defaultValue="0"
                    onChange={guardarState}
                    name="promocion_produc"
                    min="0"
                    max="100"
                    type="number"
                    // placeholder="Si no tiene promocion ingrese 0"
                  ></Form.Control>
                </Form.Group>
              </Form>
            </div>
          </div>
          {/* SECCION 2  */}
          <div className="crud-seccion-2">
            <Form className="text-center">
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
                />
              </Form.Group>

              <Form.Group className="btn-descripcion-crud">
                <Button>Guardar</Button>
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
