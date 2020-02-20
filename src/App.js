import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import SupplierAccountPage from "./Pages/SupplierAccountPage";
import CharityAccountPage from "./Pages/CharityAccountPage";
import SupplierSideDrawer from './Components/SupplierSideDrawer'
import Backdrop from './Components/Backdrop'

import './style/Resources/grid-css/grid.css';
import './style/Resources/normalize/normalize.css';

export default function App() {

  return (
    <div>
      <Router>

        {/* <Navbar className='navbar' /> */}

        <Switch>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/supplier">
            <SupplierAccountPage />
          </Route>

          <Route path="/charity">
            <CharityAccountPage />
          </Route>

          <Route exact path="/" component={Home} />
          {/* <Route exact path="/">
            <Home />
          </Route> */}

        </Switch>

        <Footer />

      </Router>
    </div>
  )
  }
