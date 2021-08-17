import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import clienteAxios from "../config/axios";

import Carrito from "../components/Carrito";
import Inicio from "../components/Inicio";
import Loguin from "../components/Loguin";
import Registro from "../components/Registro";
import Catalogo from "../components/Catalogo";
import Producto from "../components/Producto";
import PerfilCliente from "../components/PerfilCliente";
import PerfilAdmin from "../components/PerfilAdmin";
import PerfilOperativo from "../components/PerfilOperativo"

import AdminProductos from "../components/AdminProductos";
import AdminUsuarios from "../components/AdminUsuarios";
import AdminFacturas from "../components/AdminFacturas";
import Facturacion from "../components/Facturacion";

import ProductosCRUD from '../components/ProductosCRUD';
import UsuariosCRUD from '../components/UsuariosCRUD';
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "./PublicRoute";

function AppRouter() {

  // *Arreglo para los productos en el storage
  // const arregloProductos = [];
  // localStorage.setItem('poductCarrito', JSON.stringify(arregloProductos));

  //State de los productos
  const [productos, guardarProductos] = useState([]);
  const [guardarConsulta, setguardarConsulta] = useState(true)

  useEffect(() => {
    if(guardarConsulta){

      const consultarAPI = () => {
        clienteAxios
          .get("/productos")
          .then((respuesta) => {
            // console.log(respuesta.data);
  
            // Guardar en el state el resultado
            guardarProductos(respuesta.data);
            setguardarConsulta(false)
          })
          .catch((error) => {
            console.log(error);
          });
      };
      consultarAPI();
    }

    // }
  }, [guardarConsulta]);

  return (
    <Router className="App">
      {/* rutas */}
      <Switch>
        <PublicRoute exact path="/signin" >
          <Redirect to="/loguin"/>
        </PublicRoute>
        
        <Route exact path="/" component={Inicio} />
        <PublicRoute exact path="/loguin" component={Loguin} />
        <PublicRoute exact path="/registro" component={Registro} />
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

        <PrivateRoute exact path="/carrito" component={() => <Carrito/>}/>
        <PrivateRoute exact path="/perfil-usuario" component={PerfilCliente} />
        <PrivateRoute exact path="/perfil-admin" component={PerfilAdmin} />
        <PrivateRoute exact path="/perfil-operativo" component={PerfilOperativo} />

        <PrivateRoute exact path="/perfil-admin/productos" component={() => <AdminProductos productos={productos} />} />
        <PrivateRoute exact path="/perfil-admin/usuarios" component={AdminUsuarios} />
        <PrivateRoute exact path="/perfil-admin/facturas" component={AdminFacturas} />
        <PrivateRoute exact path="/facturacion" component={Facturacion} />
        <PrivateRoute exact path="/perfil-admin/productos/CRUD/:id"  component={ProductosCRUD} component={() => <ProductosCRUD setguardarConsulta={setguardarConsulta}/>} />
        <PrivateRoute exact path="/perfil-admin/usuarios/CRUD" component={UsuariosCRUD} />



        <Route path="*" >
          <h1>404 Page Not Found</h1>
        </Route>

      </Switch>
    </Router>
  );
}

export default AppRouter;
