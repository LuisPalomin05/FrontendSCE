import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// importar estilos css
import "./content/css/App.css";
import "./content/css/SignIn.css";
import "./content/css/Navigation.css";
import "./content/css/SideBar.css";
import "./content/css/CotizadorPanel.css";
import "./content/css/Dashboard.css"
//importar los componentes
import {
  Menulateral,
  Dashboard,
  SignIn,
  SignUp,
  Navigation,
  Configuracion,
  CotizadorPanel,
  Compras,
  Ventas,
  Documentos
} from "./components/Componentes";
// import Cotizador from "./components/LeftSide";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      {isAuthenticated ? (
        // Layout completo para usuarios autenticados
        <div className="layout">
          <div className="sidebar">
            <div className="menuicons">
            <Menulateral />

            </div>
            <div className="contentpanel">
              <CotizadorPanel/>
            </div>
          </div>
          <div className="main">
            <div className="navigations">
              <Navigation />
            </div>
            <div className="sections">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/sce/Configuracion" element={<Configuracion/>} />
                <Route path="/compras" element={<Compras/>}/>
                <Route path="/documentos" element={<Documentos />} />
                <Route path="/ventas/*" element={<Ventas/>}/>

                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route
            path="/signin"
            element={<SignIn setAuth={setIsAuthenticated} />}
          />
          <Route
            path="/signup"
            element={<SignUp setAuth={setIsAuthenticated} />}
          />
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
