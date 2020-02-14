import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import SupplierAccountPage from "./Pages/SupplierAccountPage";
import CharityAccountPage from "./Pages/CharityAccountPage";

// import './App.css';

function App() {
  return (
    <div>
      <Router>

        <Navbar />

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

          <Route path="/">
            <Home />
          </Route>

        </Switch>

        <Footer />

      </Router>
    </div>
  )
}

export default App;
