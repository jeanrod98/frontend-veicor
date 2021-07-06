import {Link} from 'react-router-dom';
function Footer() {
    return (
      <footer className= "footer">
       <div className="linea-footer"></div>
        <div className="container-footer">

            <div className="div-footer-1">
                <a href="https://www.facebook.com/AlmacenVeicor/"><img src="facebook.png" className="redes-sociales mx-2"/></a>
                <a href="https://www.instagram.com/almacenveicor/"><img src="instagram.png" className="redes-sociales mx-4"/></a>
                <a href="#"><img src="tw.png" className="redes-sociales mx-2"/></a>
                <div className="copy">Copyright &copy; 2021 almacenes VEICOR</div>

            </div>
            <div className="div-footer-2">   
                <p>EMPRESA</p>
                
                <ul className="nav flex-column">
                    <li><Link className="enlaces-footer" to='#'>¿Quienes Somos?</Link></li>
                    <li><Link className="enlaces-footer" to='/'>Contactenos</Link></li>
                    <li><Link className="enlaces-footer" to='/'>Trabaje con nosotros</Link></li>
                </ul>
                
                        
            </div>
            <div className="div-footer-3">                  
                <p>PREGUNTAS FRECUENTES</p>
                
                <p className="preguntas-footer my-1">¿Aceptan tarjetas de credito?</p>
                <p className="p-footer my-1">Aceptamos todas las tarjetas de credito</p>
                <p className="preguntas-footer my-1">¿Permiten compras Online?</p>
                <p className="p-footer my-1">Compras online y seguras</p>             
                    
                
                
            </div>
            <div className="div-footer-4">                  
                <p>CATALOGO</p>
                

                <ul className="nav flex-column">
                    <li><Link className="enlaces-footer" to='#'>Revisar Catálogo de productos</Link></li>
                   
                </ul>
            </div>

        </div>

        

        
          
      </footer>
    );
  }
  
  export default Footer;