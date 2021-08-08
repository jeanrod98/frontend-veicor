import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../css/perfiles.css";
import { Card } from "react-bootstrap";

function PerfilOperativo() {
  return (
    <div>
      <Header />
      <div className="container contenedor-perfil-operativo">
        <h2>Bienvenido Operativo</h2>

        <div className="opciones-admin text-center">
          <div className="perfil-titulo">
            <h3>PANEL DE OPCIONES</h3>
          </div>

          <div className="opciones">
            <div className="opciones-facturas">
              <Card className="cards">
                <div className="img-factura">
                  <ion-icon name="reader-outline"></ion-icon>
                </div>
                <Card.Body className="cards-body card-bodyAdmin">
                  <Card.Title className="cards-title">
                    FACTURAS PENDIENTES
                  </Card.Title>
                  <Card.Text>
                    Facturas pendientes de entrega por DELIVERY
                  </Card.Text>
                  <Link
                    to="/perfil-admin/facturas"
                    className="btn btn-adminOpciones"
                  >
                    Revisar Facturas
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="opciones-modulo-facturacion">
              <Card className="cards">
                <div className="img-factura">
                  <ion-icon name="print-outline"></ion-icon>
                </div>
                <Card.Body className="cards-body card-bodyAdmin">
                  <Card.Title className="cards-title">
                    MODULO DE FACTURACIÓN
                  </Card.Title>
                  <Card.Text>Modulo de facturación para la tienda</Card.Text>
                  <Link to="/facturacion" className="btn btn-adminOpciones">
                    Entrar al Modulo
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PerfilOperativo;
