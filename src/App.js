import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import clienteAxios from "./config/axios";

import Carrito from "./components/Carrito";
import Inicio from "./components/Inicio";
import Loguin from "./components/Loguin";
import Registro from "./components/Registro";
import Catalogo from "./components/Catalogo";
import Producto from "./components/Producto";
import PerfilCliente from "./components/PerfilCliente";
import PerfilAdmin from "./components/PerfilAdmin";

import AdminProductos from "./components/AdminProductos";
import AdminUsuarios from "./components/AdminUsuarios";
import AdminFacturas from "./components/AdminFacturas";
import Facturacion from "./components/Facturacion";

import ProductosCRUD from './components/ProductosCRUD';
import UsuariosCRUD from './components/UsuariosCRUD';

function App() {
  //State de la aoo
  const [productos, guardarProductos] = useState([]);

  useEffect(() => {
    // if(productos){
    const consultarAPI = () => {
      clienteAxios
        .get("/productos")
        .then((respuesta) => {
          // console.log(respuesta.data);

          // Guardar en el state el resultado
          guardarProductos(respuesta.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    consultarAPI();
    // }
  }, []);

  return (
    <Router className="App">
      {/* rutas */}
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/loguin" component={Loguin} />
        <Route exact path="/registro" component={Registro} />
        <Route
          exact
          path="/catalogo"
          component={() => <Catalogo productos={productos} />}
        />
        <Route
          exact
          path="/producto/:id"
          render={(props) => {
            const producto = productos.filter(
              (producto) => producto.id_producto === props.match.params.id
            );
            return <Producto producto={producto[0]} />;
          }}
        />

        <Route
          exact
          path="/carrito"
          component={() => <Carrito/>}
        />
        <Route exact path="/perfil-usuario" component={PerfilCliente} />
        <Route exact path="/perfil-admin" component={PerfilAdmin} />

        <Route exact path="/perfil-admin/productos" component={AdminProductos} />
        <Route exact path="/perfil-admin/usuarios" component={AdminUsuarios} />
        <Route exact path="/perfil-admin/facturas" component={AdminFacturas} />
        <Route exact path="/facturacion" component={Facturacion} />
        <Route exact path="/perfil-admin/productos/CRUD" component={ProductosCRUD} />
        <Route exact path="/perfil-admin/usuarios/CRUD" component={UsuariosCRUD} />

      </Switch>
    </Router>
  );
}

export default App;
