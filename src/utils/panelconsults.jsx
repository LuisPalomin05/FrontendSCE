import axios from "axios";
import { useEffect, useState } from "react";

// const useTotalVentas = () => {
//     const [ventas, setVentas] = useState([]);
//     const [montoVentas, setMontoVentas] = useState(0);

//     useEffect(() => {
//         async function fetchVentas() {
//             try {
//                 const res = await axios.get("https://backendapi-6thn.onrender.com/api/ventas");
//                 setVentas(res.data);
//             } catch (error) {
//                 console.error("Error fetching ventas data:", error);
//             }
//         }
//         fetchVentas();
//     }, []);

//     useEffect(() => {
//         if (ventas.length > 0) {
//             const total = ventas.reduce((acc, venta) => acc + venta.total, 0);
//             setMontoVentas(total);
//         }
//     }, [ventas]);

//     return montoVentas; 
// };

// const useTotalCompras = () => {
//     const [compras, setCompras] = useState([]);
//     const [montoCompras, setMontoCompras] = useState(0);

//     useEffect(() => {
//         async function fetchCompras() {
//             try {
//                 const res = await axios.get("https://backendapi-6thn.onrender.com/api/compras");
//                 setCompras(res.data);
//             } catch (error) {
//                 console.error("Error fetching compras data:", error);
//             }
//         }
//         fetchCompras();
//     }, []);

//     useEffect(() => {
//         if (compras.length > 0) {
//             const total = compras.reduce((acc, compra) => acc + compra.total, 0);
//             setMontoCompras(total);
//         }
//     }, [compras]);

//     return montoCompras;
// };

const useVentas=() => {
    const [ventas, setVentas] = useState([]);
    useEffect(() => {
        async function fetchVentas() {
            try {
                const res = await axios.get("https://backendapi-6thn.onrender.com/api/ventas");
                setVentas(res.data);
            } catch (error) {
                console.error("Error fetching ventas data:", error);
            }
        }
        fetchVentas();
    }, []);

    return ventas;
}

const useCompras=() => {
    const [compras, setCompras] = useState([]);
    useEffect(() => {
        async function fetchCompras() {
            try {
                const res = await axios.get("https://backendapi-6thn.onrender.com/api/compras");
                setCompras(res.data);
            } catch (error) {
                console.error("Error fetching compras data:", error);
            }
        }
        fetchCompras();
    }, []);

    return compras;

}

const useVentasIrontools = () => {
    const ventas = useVentas();
    const ventasIrontools = ventas.filter(venta => venta.empresa === "IRONTOOLS");
    const ventaSolesIrontools = ventasIrontools.filter(venta => venta.moneda === "Soles").reduce((acc, venta) => acc + venta.total, 0);
    const ventaDolaresIrontools = ventasIrontools.filter(venta => venta.moneda === "Dolares").reduce((acc, venta) => acc + venta.total, 0);

    const totalVentasIrontools = ventasIrontools.reduce((acc, venta) => acc + venta.total, 0);

    return totalVentasIrontools;
}

const useComprasIrontools = () => {
    const compras = useCompras();

    const comprasIrontools = compras.filter(compra => compra.empresa === "IRONTOOLS");
    const compraSolesIrontools = comprasIrontools.filter(compra => compra.moneda === "Soles").reduce((acc, compra) => acc + compra.total, 0);
    const compraDolaresIrontools = comprasIrontools.filter(compra => compra.moneda === "Dolares").reduce((acc, compra) => acc + compra.total, 0);
    const totalComprasIrontools = comprasIrontools.reduce((acc, compra) => acc + compra.total, 0);

    return totalComprasIrontools;
}

const useVentasTorque = () => {
    const ventas = useVentas();

    const ventasTorque = ventas.filter(venta => venta.empresa === "TORQUE-G46");
    const ventaSolesTorque = ventasTorque.filter(venta => venta.moneda === "Soles").reduce((acc, venta) => acc + venta.total, 0);
    const ventaDolaresTorque = ventasTorque.filter(venta => venta.moneda === "Dolares").reduce((acc, venta) => acc + venta.total, 0);
    const totalVentasTorque = ventasTorque.reduce((acc, venta) => acc + venta.total, 0);

    return totalVentasTorque;
}

const useComprasTorque = () => {
    const compras = useCompras();

    const comprasTorque = compras.filter(compra => compra.empresa === "TORQUE-G46");
    const compraSolesTorque = comprasTorque.filter(compra => compra.moneda === "Soles").reduce((acc, compra) => acc + compra.total, 0);
    const compraDolaresTorque = comprasTorque.filter(compra => compra.moneda === "Dolares").reduce((acc, compra) => acc + compra.total, 0);
    const totalComprasTorque = comprasTorque.reduce((acc, compra) => acc + compra.total, 0);

    return totalComprasTorque;
}






export {  useVentas, useCompras, useVentasIrontools, useComprasIrontools, useVentasTorque, useComprasTorque };
