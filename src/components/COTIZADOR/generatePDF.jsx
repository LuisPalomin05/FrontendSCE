import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { NumeroLiteral } from "../../utils/NumeroLiteral";

const bcpimg = require("../../content/imagen/bcplogoRs.jpg");

const generatePDF = ({
  ruc,
  cliente,
  numeroRuc,
  empresa,
  direccion,
  correo,
  emision,
  moneda,
  telefono,
  formaPago,
  numeroCotizacion,
  productos,
  observaciones,
  resource,
  nroCuenta,
  nroCuentaCCI,
}) => {
  var simbolo = "";

  if (moneda === "SOLES") {
    simbolo = " S/. ";
  } else {
    simbolo = " $. ";
  }

  const center = 60;

  const doc = new jsPDF();

  const img = new Image();
  img.src = resource;
  img.onload = () => {
    doc.addImage(img, "PNG", 14, 5, 35, 35);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(56, 56, 56);
    doc.setFontSize(12);
    doc.text(empresa, center, 15);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Direccion: ${direccion}`, center, 20);
    doc.text(`Correo: ${correo}`, center, 25);
    doc.text(`Telefono: ${telefono}`, center, 30);

    // Dibuja el rectángulo redondeado
    doc.setDrawColor("#d3d3d3"); // Color del borde
    doc.setLineWidth(0.2); // Grosor del borde
    doc.roundedRect(150, 10, 46, 21, 3, 3); // x, y, width, height, rx, ry

    // Línea horizontal encima de "N° COTIZACION"
    doc.line(150, 17, 196, 17); // línea de división superior

    // Línea horizontal debajo de "N° COTIZACION"
    doc.line(150, 24, 196, 24); // línea de división inferior

    // Texto dentro del recuadro
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`RUC : ${numeroRuc}`, 154, 15); // parte superior

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`N° COTIZACION`, 158, 22); // centrado entre las líneas

    doc.setFont("helvetica", "normal");
    doc.text(`${numeroCotizacion}`, 162, 29); // parte inferior

    doc.setDrawColor("#d3d3d3"); // Color del borde
    doc.setLineWidth(0.2); // Grosor del borde
    doc.roundedRect(14, 40, 182, 18, 1, 1); // (x, y, ancho, alto)
    doc.setFontSize(8);

    doc.setFont("helvetica", "normal");
    doc.text(`CLIENTE: ${cliente}`, 15, 44);
    doc.text(`RUC: ${ruc}`, 15, 49);
    doc.text(`MONEDA                : ${moneda}`, 135, 44);
    doc.text(`CONDICIONES       : ${formaPago}`, 135, 49);
    doc.text(`F. EMISION            : ${emision}`, 135, 54);

    const columns = [
      "N°",
      "Descripción",
      "Cantidad",
      "Precio Unit.",
      "Importe",
    ];
    const rows = productos.map((producto, index) => [
      index + 1,
      producto.descripcion,
      producto.cantidad,
      `${simbolo} ${producto.precio.toFixed(2)}`,
      `${simbolo} ${(producto.cantidad * producto.precio).toFixed(2)}`,
    ]);

    autoTable(doc, {
      startY: 60,
      head: [columns],
      body: rows,
      columnStyles: {
        1: { cellWidth: 100 }, // Índice 2 = tercera columna ("Descripción")
        // El resto puede ser automático o también puedes definirlos si quieres
      },
      theme: "striped",
      styles: { fontSize: 8, cellPadding: 2 },
      headStyles: { fillColor: [44, 62, 80], textColor: 255 },
      alternateRowStyles: { fillColor: [240, 240, 240] },
    });

    const total = productos.reduce(
      (acc, item) => acc + item.cantidad * item.precio,
      0
    );
    const igv = total * 0.18;
    const totalFinal = total + igv;

    doc.roundedRect(14, doc.lastAutoTable.finalY + 6, 182, 20, 1, 1); // (x, y, ancho, alto)
    doc.roundedRect(154.8, doc.lastAutoTable.finalY + 7, 40, 18, 1, 1); // (x, y, ancho, alto)
    doc.line(
      100,
      doc.lastAutoTable.finalY + 6,
      100,
      doc.lastAutoTable.finalY + 26
    ); // línea de división

    doc.setFontSize(7);
    doc.text(
      "CUENTA CORRIENTA " + moneda + " :",
      102,
      doc.lastAutoTable.finalY + 11
    );
    doc.setFontSize(7);

    doc.text(`N° : ${nroCuenta}`, 114, doc.lastAutoTable.finalY + 17);
    doc.text(`CCI : ${nroCuentaCCI}`, 114, doc.lastAutoTable.finalY + 22);

    doc.addImage(bcpimg, "PNG", 102, doc.lastAutoTable.finalY + 16, 9, 5);
    doc.line(
      153,
      doc.lastAutoTable.finalY + 6,
      153,
      doc.lastAutoTable.finalY + 26
    ); // línea de división

    doc.setFontSize(8);
    const inchpath = 157;
    doc.text(`Subtotal      :`, inchpath, doc.lastAutoTable.finalY + 11);
    doc.text(
      `${simbolo} ${total.toFixed(2)}`,
      inchpath + 17.5,
      doc.lastAutoTable.finalY + 11
    );
    doc.text(`IGV (18%)  :`, inchpath, doc.lastAutoTable.finalY + 16.5);
    doc.text(
      `${simbolo} ${igv.toFixed(2)}`,
      inchpath + 17.5,
      doc.lastAutoTable.finalY + 16.5
    );
    doc.setFont("helvetica", "bold");
    doc.text(`Total          :`, inchpath, doc.lastAutoTable.finalY + 22.5);
    doc.text(
      `${simbolo} ${totalFinal.toFixed(2)}`,
      inchpath + 17.5,
      doc.lastAutoTable.finalY + 22.5
    );

    doc.setFontSize(8);
    doc.setFont("helvetica", "bolditalic");
    doc.text("Observaciones:", 16, doc.lastAutoTable.finalY + 10);
    doc.setFontSize(6);
    doc.setFont("helvetica", "normal");
    doc.text(
      NumeroLiteral(totalFinal.toFixed(2), moneda),
      16,
      doc.lastAutoTable.finalY + 13.5,
      { maxWidth: 80 }
    );

    doc.text(observaciones, 16, doc.lastAutoTable.finalY + 20, {
      maxWidth: 80,
    });

    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text("Gracias por su preferencia.", 14, 285);

    doc.save(`cotizacion_${numeroCotizacion}.pdf`);
  };
};
export default generatePDF;
