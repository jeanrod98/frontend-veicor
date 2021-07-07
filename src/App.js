
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Inicio from './components/Inicio';
import Loguin from './components/Loguin';
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
          </Switch>
        
    </Router>
  );
}

export default App;
