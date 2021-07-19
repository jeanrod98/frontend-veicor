import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import clienteAxios from "./config/axios";

import Carrito from "./components/Carrito";
import Inicio from "./components/Inicio";
import Loguin from "./components/Loguin";
import Registro from "./components/Registro";
import Catalogo from "./components/Catalogo";
import Producto from "./components/Producto";

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
      </Switch>
    </Router>
  );
}

export default App;
