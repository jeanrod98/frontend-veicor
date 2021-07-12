import Header from './Header';
import Footer from './Footer';

function Catalogo() {
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

            <div className="publicidad-catalogo">
                <h1>Imagenes</h1>
                
            </div>

            <div className="productos">
                <h1>Productos</h1>
                
            </div>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Catalogo;