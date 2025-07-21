import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./content/css/App.css";
import "./content/css/SignIn.css";
import "./content/css/Navigation.css";
import "./content/css/SideBar.css";
import "./content/css/CotizadorPanel.css";
import "./content/css/Dashboard.css";

import Dashboard from "./components/PANEL/DashBoard";
import PedidosVista from "./components/PEDIDOS/PedidosVista";
import ComprasVista from "./components/COMPRAS/ComprasVista";
import DocumentosVista from "./components/DOCUMENTOS/Documentos";
import VentasVista from "./components/VENTAS/VentasVista";
import Configuracion from "./components/CONFIGURACION/Configuracion";
import CotizacionCreate from "./components/COTIZADOR/CotizacionCreate";
import SignIn from "./components/REGISTRO/SignIn";
import SignUp from "./components/REGISTRO/SignUp";
import ClientesVista from "./components/CLIENTES/ClientesVista";
import ProveedorVista from "./components/PROVEEDORES/ProveedorVista";

import Menulateral from "./components/Menulateral";
import CotizadorPanel from "./components/CotizadorPanel";
import Navigation from "./components/NAV/Navigation";

import QuotCreate from "./components/COTIZADOR/QuotCreate";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      {isAuthenticated ? (
        <div className="layout">
          <div className="sidebar">
            <div className="menuicons">
              <Menulateral />
            </div>
            <div className="contentpanel ">
              <CotizadorPanel />
            </div>
          </div>
          <div className="main">
            <div className="navigations">
              <Navigation />
            </div>
            <div className="sections">
              <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Dashboard />} />

                <Route path="/pedidos" element={<PedidosVista />} />
                <Route path="/compras/*" element={<ComprasVista />} />

                <Route path="/documentos" element={<DocumentosVista />} />
                <Route path="/ventas/*" element={<VentasVista />} />

                <Route path="/sce/configuracion/*" element={<Configuracion />} />

                <Route path="/clientes/*" element={<ClientesVista />} />

                <Route path="/proveedores/*" element={<ProveedorVista />} />
                <Route path="/cotizacion/crear" element={<CotizacionCreate />} />
                <Route path="/cotizacion/version" element={<QuotCreate />} />

                <Route path="/cotizacion/editar/:id" element={<CotizacionCreate />} />

              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/signin" element={<SignIn setAuth={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignUp setAuth={setIsAuthenticated} />} />
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
