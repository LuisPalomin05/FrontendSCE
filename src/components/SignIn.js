import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setAuth }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [mostrarDiv, setMostrarDiv] = useState(true); // Estado para controlar la visibilidad del div
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí deberías hacer una petición a tu backend para validar al usuario.
    // Simulamos una autenticación exitosa:
    if (
      credentials.email === "pmpalominomedina@gmail.com" &&
      credentials.password === "password"
    ) {
      setAuth(true); // Autenticar al usuario
      navigate("/Dashboard"); // Redirigir al Dashboard
    } else {
      alert("Credenciales inválidas");
    }
  };

  useEffect(() => {
    // Establecer el temporizador para que el div se oculte después de 3 segundos
    const timer = setTimeout(() => {
      setMostrarDiv(false); // Cambiar el estado para ocultar el div
    }, 3000); // 3000 milisegundos = 3 segundos

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  // bg 
  // https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
  return (
    <form id="FormSignIn" onSubmit={handleLogin}>
      <div className="version">
        <ion-icon name="cloudy"></ion-icon>
        <p>v.2.11.30</p>
      </div>

      <div className={`frame ${!mostrarDiv ? "fade-out" : ""}`}>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="343.000000pt"
          height="125.000000pt"
          viewBox="0 0 343.000000 125.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,125.000000) scale(0.100000,-0.100000)"
            fill="#ffffff"
            stroke="none"
          >
            <path
              d="M1620 1224 c-159 -42 -314 -171 -389 -324 -93 -190 -95 -399 -4 -573
47 -91 163 -210 250 -255 133 -70 286 -88 427 -52 109 28 190 74 276 157 l75
73 -110 110 c-109 110 -110 111 -125 88 -36 -53 -75 -89 -128 -115 -47 -23
-70 -28 -132 -28 -126 0 -215 58 -272 175 -29 62 -29 182 1 261 57 149 206
228 353 185 65 -19 139 -79 169 -139 l21 -40 111 111 110 110 -39 52 c-71 94
-192 172 -319 205 -73 19 -202 18 -275 -1z"
            />
            <path
              d="M2780 1224 c-165 -43 -308 -159 -378 -305 -54 -113 -67 -173 -66
-304 0 -182 56 -319 178 -441 123 -122 282 -182 456 -170 101 6 156 22 252 73
62 33 198 150 198 171 0 4 -49 56 -109 116 l-109 109 -16 -30 c-19 -38 -74
-86 -129 -114 -47 -25 -170 -38 -181 -21 -3 6 117 160 269 342 151 183 275
336 275 342 0 6 -31 41 -69 77 -75 74 -177 131 -276 156 -74 19 -222 18 -295
-1z m219 -293 c10 -6 -28 -63 -155 -234 -93 -125 -172 -226 -176 -227 -14 0
-28 76 -28 152 0 151 68 256 194 300 54 18 142 23 165 9z"
            />
            <path
              d="M279 1176 c-99 -26 -187 -100 -235 -196 -39 -78 -46 -209 -14 -293
29 -76 74 -134 140 -179 83 -57 143 -68 363 -68 111 0 196 -4 208 -10 23 -13
25 -57 5 -86 -14 -18 -33 -19 -378 -24 l-363 -5 -3 -148 -3 -148 388 3 c375 3
390 4 443 25 30 13 78 43 107 68 111 97 153 264 102 400 -30 81 -112 163 -194
195 -55 22 -78 24 -265 27 -113 2 -215 6 -227 8 -29 7 -55 57 -47 90 12 49 16
50 358 55 l321 5 3 148 3 147 -333 -1 c-231 0 -347 -4 -379 -13z"
            />
          </g>
        </svg>
      </div>
      <div className="diseñologin">
        <div className="tittleApp">
          <img className="imglogo" src="https://raw.githubusercontent.com/li2524/FrontendSCE/refs/heads/main/src/sce_tuerca.png" alt="" />
          <p>SCE</p>
        </div>
        <div className="forminputs">
          <label htmlFor="email">Ingresa tu Usuario</label>
        <input
          type="email"
          placeholder="Correo"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <br />
        <label htmlFor="password">Ingresa tu contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <br />
        <button type="submit">INICIAR SESION</button>
      
        </div>
</div>
    </form>
  );
};

export default SignIn;
