import React from 'react';
import './App.css';
import Home from './Components/HomeComponents/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/ExtraComponents/NotFound/NotFound';
import Login from './Components/LoginComponents/Login/Login';
import PrivateRoute from './Components/LoginComponents/PrivateRoute/PrivateRoute';
import Dashboard from './Components/DashboardComponents/Dashboard/Dashboard';
import Test from './Components/Test/Test';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
    // <Test/>
  );
}

export default App;
