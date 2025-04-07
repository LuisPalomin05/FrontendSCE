import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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
    doc.addImage(img, "PNG", 10, 5, 35, 35);

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

  
    doc.setFont("helvetica", "normal");
    doc.setFontSize(13);
    doc.text(`${numeroRuc}`, 162, 15);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`N° COTIZACION`, 160, 20);
    doc.setFont("helvetica", "normal");
    doc.text(`${numeroCotizacion}`, 160, 25);

    doc.setFontSize(10);

    doc.setFont("helvetica", "normal");
    doc.text(`CLIENTE: ${cliente}`, 15, 45);
    doc.text(`RUC: ${ruc}`, 15, 50);
    doc.text(`MONEDA                : ${moneda}`, 135, 45);
    doc.text(`FORMA DE PAGO : ${formaPago}`, 135, 50);
    doc.text(`F. EMISION            : ${emision}`, 135, 55);


    const columns = [
      "N°",
      "Descripción",
      "Cantidad",
      "Precio Unit.",
      "Subtotal",
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
      theme: "striped",
      styles: { fontSize: 10, cellPadding: 3 },
      headStyles: { fillColor: [44, 62, 80], textColor: 255 },
      alternateRowStyles: { fillColor: [240, 240, 240] },
    });

    const total = productos.reduce(
      (acc, item) => acc + item.cantidad * item.precio,
      0
    );
    const igv = total * 0.18;
    const totalFinal = total + igv;

    doc.text(
      `Subtotal   : ${simbolo} ${total.toFixed(2)}`,
      140,
      doc.lastAutoTable.finalY + 10
    );
    doc.text(
      `IGV (18%): ${simbolo} ${igv.toFixed(2)}`,
      140,
      doc.lastAutoTable.finalY + 16
    );
    doc.setFont("helvetica", "bold");
    doc.text(
      `Total  : ${simbolo} ${totalFinal.toFixed(2)}`,
      140,
      doc.lastAutoTable.finalY + 22
    );

    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text("Observaciones:", 14, doc.lastAutoTable.finalY + 30);
    doc.setFont("helvetica", "normal");
    doc.text(observaciones, 14, doc.lastAutoTable.finalY + 36, {
      maxWidth: 180,
    });

    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text("Gracias por su preferencia.", 14, doc.lastAutoTable.finalY + 50);

    doc.save(`cotizacion_${numeroCotizacion}.pdf`);
  };
};
export default generatePDF;
