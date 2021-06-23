
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import inicio from './components/Inicio';
function App() {
  return (
    <Router className="App">
        
          {/* rutas */}
          <Switch>
            <Route
            exact path="/"
            component={inicio}
            />
          </Switch>
        
    </Router>
  );
}

export default App;
