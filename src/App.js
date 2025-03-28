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
import "./content/css/Dashboard.css";
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
                {/* Dashboard */}
                <Route path="/" element={<Dashboard />} />

                {/* Pedidos y Compras */}
                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/compras/*" element={<Compras />} />

                {/* Documentos y Ventas */}
                <Route path="/documentos" element={<Documentos />} />
                <Route path="/ventas/*" element={<Ventas />} />

                {/* Configuración */}
                <Route
                  path="/sce/configuracion/*"
                  element={<Configuracion />}
                />

                {/* Cotizador */}
                <Route path="/cotizador/*" element={<Cotizador />} />

                {/* Notas */}
                <Route path="/lista" element={<NoteList />} />
                <Route path="/create" element={<CreateNote />} />
                <Route path="/edit/:id" element={<CreateNote />} />

                {/* Usuarios */}
                <Route path="/user" element={<CreateUser />} />

                {/* Clientes */}
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/clientes/create" element={<ClientesCrear />} />
                <Route
                  path="/clientes/editar/:id"
                  element={<ClientesCrear />}
                />

                {/* Proveedores */}
                <Route path="/proveedores" element={<Proveedores />} />

                {/* Redirección para rutas no encontradas */}
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
