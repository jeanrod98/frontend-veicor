
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Inicio from './components/Inicio';
import Loguin from './components/Loguin';
import Registro from './components/Registro';

function App() {
  return (
    <Router className="App">
        
          {/* rutas */}
          <Switch>
            <Route
            exact path="/"
            component={Inicio}
            />
            <Route
            exact path="/loguin"
            component={Loguin}
            />
            <Route
            exact path="/registro"
            component={Registro}
            />
          </Switch>
        
    </Router>
  );
}

export default App;
