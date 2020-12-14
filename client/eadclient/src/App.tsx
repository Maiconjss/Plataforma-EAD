import React from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
