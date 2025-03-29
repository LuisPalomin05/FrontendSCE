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
  Documentos,
  Pedidos,
  Cotizador,
} from "./components/Componentes";

import NoteList from "./components/NoteList";
import CreateUser from "./components/CreateUser";
import CreateNote from "./components/CreateNote";

import Clientes from "./components/ClientesVista";
import Proveedores from "./components/ProveedorVista";
import ClientesCrear from "./components/ClientesCrear";

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
            <div className="contentpanel">
              <CotizadorPanel />
            </div>
          </div>
          <div className="main">
            <div className="navigations">
              <Navigation />
            </div>
            <div className="sections">
              <Routes>
                <Route path="/" element={<Dashboard />} />

                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/compras/*" element={<Compras />} />

                <Route path="/documentos" element={<Documentos />} />
                <Route path="/ventas/*" element={<Ventas />} />

                <Route
                  path="/sce/configuracion/*"
                  element={<Configuracion />}
                />

                <Route path="/cotizador/*" element={<Cotizador />} />

                <Route path="/lista" element={<NoteList />} />
                <Route path="/create" element={<CreateNote />} />
                <Route path="/edit/:id" element={<CreateNote />} />

                <Route path="/user" element={<CreateUser />} />

                <Route path="/clientes" element={<Clientes />} />
                <Route path="/clientes/create" element={<ClientesCrear />} />
                <Route
                  path="/clientes/editar/:id"
                  element={<ClientesCrear />}
                />

                <Route path="/proveedores" element={<Proveedores />} />

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
