import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";


import "./App.css";
import "@ionic/react/css/core.css";
import "./content/css/LeftSide.css";

import "./content/css/SignUp.css";
import "./content/css/Dashboard.css";
import "./content/css/Navigation.css";
import "./content/css/Cotizador.css"


import LeftSide from "./components/LeftSide";
import Dashboard from "./components/DashBoard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";
// import Profile from "./components/Profile"
// import Torque from "./components/TorqueCotizador"
// import Irontools from "./components/IrontoolsCotizador"
import Configuracion from "./components/Configuracion"
import SolesIrontools from "./components/SolesIrontools";
import SolesTorque from "./components/SolesTorque";
import DollarIrontool from "./components/DollarIrontool";
import DollarTorque from "./components/DollarTorque";
// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  return (
    <Router>
      {isAuthenticated ? (
        // Layout completo para usuarios autenticados
        <div className="layer">
          <div className="header">
            <Navigation />
          </div>
          <div className="main">
            <section className="layout">
              <div className="sidebar">
                <LeftSide />
              </div>
              <div className="body">
                <Routes>
                  <Route path="/" element={<Dashboard />} />

                  <Route path="/Irontools/soles" element={<SolesIrontools/>}/>
                  <Route path="/Torque/soles" element={<SolesTorque/>}/>

                  <Route path="/Irontools/Dolares" element={<DollarIrontool/>}/>
                  <Route path="/Torque/Dolares" element={<DollarTorque/>}/>


                  <Route path="/sce/Configuracion" element={<Configuracion/>} />

                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="*" element={<Navigate to="/" />} /> {/* Redirigir rutas desconocidas */}
                </Routes>
              </div>
              {/* <div className="profileCard">
                <Profile/>
              </div> */}
            </section>
          </div>
        </div>
      ) : (
        // Solo rutas públicas (sin layout) para usuarios no autenticados
        <Routes>
          <Route
            path="/signin"
            element={<SignIn setAuth={setIsAuthenticated} />}
          />
          <Route
            path="/signup"
            element={<SignUp setAuth={setIsAuthenticated} />}
          />
          <Route path="*" element={<Navigate to="/signin" />} /> {/* Redirigir rutas desconocidas */}
        </Routes>
      )}
    </Router>
  );
};

export default App;
