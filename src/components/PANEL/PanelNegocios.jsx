import { lazy, Suspense } from "react";

import {
  useVentasIrontools,
  useComprasIrontools,
  useVentasTorque,
  useComprasTorque,
} from "../../utils/panelconsults";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const dataMensual = [
  { mes: "Ene", ventas: 4000, compras: 2400 },
  { mes: "Feb", ventas: 3000, compras: 1398 },
  { mes: "Mar", ventas: 2000, compras: 9800 },
  { mes: "Abr", ventas: 2780, compras: 3908 },
  { mes: "May", ventas: 1890, compras: 4800 },
  { mes: "Jun", ventas: 2390, compras: 3800 },
  { mes: "Jul", ventas: 3490, compras: 4300 },
  { mes: "Ago", ventas: 3200, compras: 2100 },
  { mes: "Sep", ventas: 4100, compras: 3000 },
  { mes: "Oct", ventas: 4600, compras: 2500 },
  { mes: "Nov", ventas: 3800, compras: 2700 },
  { mes: "Dic", ventas: 5000, compras: 4000 },
];

const SalesBox = lazy(() => import("../SalesBox"));

const PanelNegocios = () => {
  const ventaIrontools = useVentasIrontools();
  const compraIrontools = useComprasIrontools();
  const ventaTorque = useVentasTorque();
  const compraTorque = useComprasTorque();

  const boxes = [
    {
      ruta: "/ventas",
      tipo: "Ventas",
      montoSoles: ventaTorque.ventaSolesTorque,
      montoDolar: ventaTorque.ventaDolaresTorque,
      empresa: "Torque-G46",
    },
    {
      ruta: "/compras",
      tipo: "Compras",
      montoSoles: compraTorque.compraSolesTorque,
      montoDolar: compraTorque.compraDolaresTorque,
      empresa: "Torque-G46",
    },
    {
      ruta: "/ventas",
      tipo: "Ventas",
      montoSoles: ventaIrontools.ventaSolesIrontools,
      montoDolar: ventaIrontools.ventaDolaresIrontools,
      empresa: "Irontools",
    },
    {
      ruta: "/compras",
      tipo: "Compras",
      montoSoles: compraIrontools.compraSolesIrontools,
      montoDolar: compraIrontools.compraDolaresIrontools,
      empresa: "Irontools",
    },
  ];

  return (
    <section className="bgWhite wd">
      <div className="flexbox wd gapp4">
        <section className="cartilla">Torque-G46</section>
        <section className="cartilla">Irontools</section>
      </div>
      <div className="flexbox wd">
        <Suspense fallback={<div className="shimmer-loader">Cargando...</div>}>
          {boxes.map((box, i) => (
            <SalesBox key={i} {...box} />
          ))}
        </Suspense>
      </div>
      <div>
        <section>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dataMensual}>
              <CartesianGrid  />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              {/* <Legend /> */}
              <Line type="monotone" dataKey="ventas" stroke="#2964e3ff" />
              <Line type="monotone" dataKey="compras" stroke="#da3030ff" />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </div>
    </section>
  );
};

export default PanelNegocios;
