import "../content/css/CardBoxCash.css";
import { Link } from "react-router-dom";
import {FormatoMoneda} from "../utils/FuncsUtils";

const SalesBox = ({ ruta, tipo, montoSoles, montoDolar, empresa }) => {
  const classtheme = tipo === "Ventas" ? "ventablue" : "ventaGray";

  return (
    <Link to={ruta}>
      <article className="cardContent">
        {/* Título e ícono */}
        <div className="cardTitle padd2">
          <p className="cardtextTitle">{tipo}</p>
        </div>

        {/* Montos */}
        <div className="flexbox wd50 gapp4 martop amounts">
          <p className={classtheme}>{FormatoMoneda(montoSoles, "PEN")}</p>
          <p className="cBlack">{FormatoMoneda(montoDolar, "USD")}</p>
        </div>

      </article>
    </Link>
  );
};

export default SalesBox;
