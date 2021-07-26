import React from 'react'
import money from '../assets/svg/money.svg'
import truck from '../assets/svg/truck.svg'
import tienda from '../assets/svg/tienda.svg'
import bolsaCompra from '../assets/svg/bolsa-de-la-compra.svg'
import garantia from '../assets/svg/garantia.svg'
import tarjetaDebito from '../assets/svg/tarjeta-de-debito.svg'


function Servicios() {
    return (
        <div>
            <div className="container inicio-iconos">
                <div className="div-icono-1">
                  <img className="svg-camion" src={truck} width="50" height="50"/>
                  {/* color #787575 */}
                  <p>ENTREGAS <br/> A <br/> DOMICILIO</p>

                </div>
                <div className="div-icono-2">
                  <img className="svg-camion" src={money} width="50" height="50"/>
                  <p>CAMBIOS <br/> Y <br/>DEVOLUCIONES</p>

                </div>
                <div className="div-icono-3">
                  <img className="svg-camion" src={tienda} width="50" height="50"/>
                  <p>COMPRA ONLINE <br/> Y <br/> RETIRA EN TIENDA</p>
                </div>
                <div className="div-icono-4">
                  <img className="svg-camion" src={bolsaCompra} width="50" height="50"/>
                  <p>COMPRA FÁCIL <br/> Y <br/> SEGURA</p>

                </div>
                <div className="div-icono-5">
                  <img className="svg-camion" src={garantia}width="50" height="50"/>
                  <p>GARANTIA <br/> EN <br/>  PRODUCTOS</p>

                </div>
                <div className="div-icono-6">
                  <img className="svg-camion" src={tarjetaDebito} width="50" height="50"/>
                  <p>ACEPTAMOS TODAS <br/> LAS <br/> TARJETAS</p>

                </div>
              </div>
            
        </div>
    )
}

export default Servicios
