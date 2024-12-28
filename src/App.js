import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// importar estilos css
import "./content/css/App.css";
import "./content/css/LeftSide.css";
import "./content/css/SignIn.css";
import "./content/css/SignUp.css";
import "./content/css/Dashboard.css";
import "./content/css/Navigation.css";
import "./content/css/Cotizador.css";

//importar los componentes
import { LeftSide, Dashboard, SignIn, SignUp, Navigation, Configuracion, SolesIrontools, SolesTorque, DollarIrontool, DollarTorque } from "./components/Componentes";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

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
        // rutas publicas y accesos a enlaces de sitio redireccionado
        <Routes>
          <Route
            path="/signin"
            element={<SignIn setAuth={setIsAuthenticated} />}
          />
          <Route
            path="/signup"
            element={<SignUp setAuth={setIsAuthenticated} />}
          />
          {/* Redirigir rutas desconocidas */}
          <Route path="*" element={<Navigate to="/signin" />} /> 
        </Routes>
      )}
    </Router>
  );
};

export default App;
