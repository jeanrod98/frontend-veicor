import Header from './Header';
import Footer from './Footer';
import css from '../css/loguin-registro.css'

function Registro() {
    return (
      <div className="Registro">
        <Header/>
        <div className="container">
                <div className="div-registro">

                
                <div className="imagen-registro">
                    <div className="text-center">

                    <img src="/img/logos/logopng2.png" />                   
         
                    <h5>Contamos con variedad de productos para 
                    el hogar a los mejores precios del mercado.</h5>
                    <h6>Productos de temporada</h6>
                    <h6>Cristalería</h6>
                    <h6>Juguetería</h6>
                    <h6>Plasticos y Desechables</h6>
                    </div>
                </div>

                

                <div className="form-registro">
                        <form action="#" method="">
                        <div class="form-row">
                            <div class="">
                                <label for="nombres">Nombres:</label>
                                <input type="text" class="form-control" id="nombres" placeholder="Ingrese sus nombres"  required autoFocus/>
                            
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="">
                                <label for="apellidos">Apellidos:</label>
                                <input type="text" class="form-control" id="apellidos" placeholder="Ingrese sus apellidos"  required/>
                            
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="">
                                <label for="correo">Correo:</label>
                                <input type="text" class="form-control" id="correo" placeholder="Ingrese su correo electrónico"  required/>
                            
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="">
                                <label for="contrasenia-regis">Contraseña:</label>
                                <input type="text" class="form-control" id="contrasenia-regis" placeholder="Ingrese su contraseña"  required/>
                            
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="">
                                <label for="contrasenia-regis-conf">Repita su Contraseña:</label>
                                <input type="text" class="form-control" id="contrasenia-regis-conf" placeholder="Repita su contraseña"  required/>
                            
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="">
                                <label for="celular">Celular:</label>
                                <input type="text" class="form-control" id="celular" placeholder="Ingrese su número telefónico"  required/>
                            
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="">
                                <label for="convencional">Convencional:</label>
                                <input type="text" class="form-control" id="convencional" placeholder="Ingrese su número convencional"  required/>
                                <small id="emailHelp" class="form-text text-muted">Este campo es opcional.</small>
                            
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="">
                                <label for="direccion">Dirección:</label>
                                <input type="text" class="form-control" id="direccion" placeholder="Ingrese la dirección de su domicilio"  required/>
                                <small id="emailHelp" class="form-text text-muted">La dirección se utilizará para las entregas por DELIVERY.</small>

                            
                            </div>
                        </div>
                        <div class="form-row">
                            <input className="btn my-3" type="submit" id="enviar-registro" value="REGISTRARME"/>
                        </div>
                        

                        </form>
                </div>

            </div>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Registro;